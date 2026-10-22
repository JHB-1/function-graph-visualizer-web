// 버전별 검증 캐시 사용, 열린 탭 강제 전환 금지
const VERSION = '__FGV_VERSION__';
const BUILD = '__FGV_BUILD__';
const PREFIX = 'fgv-web-v1-' + BUILD + '-';
let cacheName;
const allowed = /^(index\.html|THIRD_PARTY_NOTICES\.txt|update-worker\.js|assets\/[A-Za-z0-9_-]+\.(js|css)|runtime\/(fgv-runtime\.(mjs|wasm)|\.gitkeep)|fonts\/(PretendardVariable\.woff2|pretendard\/source\.json)|licenses\/Pretendard-LICENSE\.txt)$/;

async function bytes(response, limit)
{
	if (!response.ok || !response.body) throw new Error('Update download failed');

	const reader = response.body.getReader();
	const parts = [];
	let length = 0;
	try
	{
		for (;;)
		{
			const {done, value} = await reader.read();
			if (done) break;

			length += value.length;
			if (length > limit) throw new Error('Update download exceeds limit');

			parts.push(value);
		}
	}
	finally {await reader.cancel();}
	const output = new Uint8Array(length);
	let offset = 0;
	for (const part of parts) {output.set(part, offset); offset += part.length;}

	return output;
}

self.addEventListener('install', event => event.waitUntil((async () =>
{
	const base = new URL(self.registration.scope);
	const response = await fetch(new URL('update-manifest.json', base),
		{cache: 'no-store', redirect: 'error', signal: AbortSignal.timeout(15000)});
	const manifest = JSON.parse(new TextDecoder().decode(await bytes(response, 65536)));
	if (manifest.schema !== 1 || manifest.product !== 'fgv' || manifest.component !== 'web' || manifest.version !== VERSION || manifest.build !== BUILD ||
		!/^[a-f0-9]{64}$/.test(manifest.build) || !Array.isArray(manifest.files) || manifest.files.length > 100)
		throw new Error('Invalid update manifest');

	const paths = new Set();
	let total = 0;
	for (const file of manifest.files)
	{
		if (typeof file.path !== 'string' || !allowed.test(file.path) || paths.has(file.path) ||
			!Number.isSafeInteger(file.bytes) || file.bytes < 0 || !/^[a-f0-9]{64}$/.test(file.sha256))
			throw new Error('Invalid update file');

		paths.add(file.path);
		total += file.bytes;
		if (total > 32 * 1024 * 1024) throw new Error('Update exceeds storage budget');
	}
	if (!['index.html', 'runtime/fgv-runtime.wasm', 'runtime/fgv-runtime.mjs', 'update-worker.js'].every(path => paths.has(path)))
		throw new Error('Incomplete update');
	if (!manifest.files.some(file => /^assets\/index-.*\.js$/.test(file.path)) ||
		!manifest.files.some(file => /^assets\/index-.*\.css$/.test(file.path)))
		throw new Error('Missing entry assets');

	const name = PREFIX + manifest.build;
	const cache = await caches.open(name);
	try
	{
		for (const file of manifest.files)
		{
			const url = new URL(file.path, base);
			const response = await fetch(url, {cache: 'no-store', redirect: 'error', signal: AbortSignal.timeout(20000)});
			const content = await bytes(response, file.bytes);
			const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', content)))
				.map(value => value.toString(16).padStart(2, '0')).join('');
			if (content.length !== file.bytes || hash !== file.sha256) throw new Error('Update digest mismatch');

			const headers = new Headers(response.headers);
			headers.delete('content-encoding');
			headers.delete('content-length');
			await cache.put(url, new Response(content, {headers}));
		}
		cacheName = name;
	}
	catch (error)
	{
		await caches.delete(name);
		throw error;
	}
})()));

self.addEventListener('fetch', event =>
{
	const url = new URL(event.request.url);
	const base = new URL(self.registration.scope);
	if (event.request.method !== 'GET' || url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) return;

	const path = url.pathname.slice(base.pathname.length);
	if (path === 'update-manifest.json' || path === 'update-worker.js') return;

	event.respondWith((async () =>
	{
		if (!cacheName) cacheName = (await caches.keys()).find(name => name.startsWith(PREFIX));

		if (!cacheName) return fetch(event.request);

		const key = event.request.mode === 'navigate' ? new URL('index.html', base) : new URL(url.pathname, base);
		const cached = await (await caches.open(cacheName)).match(key);

		return cached ?? new Response('Unknown application asset', {status: 404});
	})());
});
