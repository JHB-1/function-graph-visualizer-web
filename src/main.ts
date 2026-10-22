import { z } from "zod";
import { CoreClient, object, type ObjectValue } from "./engine/client";
import { parse_expression } from "./engine/expression";
import { GpuPlot, scene_schema, type SceneData, type ViewState } from "./render/gpu";
import { presets } from "./presets";
import { parse_document, parse_recovery, read_recovery, store_recovery, document_limit,
	type DocumentValue, type RecoveryRecord } from "./document";
import "./style.css";
import { get_workspace_host, storage_key, type WorkspaceEvent } from "./host";
import { watch_updates } from "./updates";

const host = get_workspace_host();

const app: HTMLElement = document.querySelector("#app")!;
app.innerHTML = `
<a class="skip-link" href="#graph">그래프로 이동</a>
<div class="app-shell">
<nav class="tab-rail" aria-label="작업 도구">
<a class="brand-mark" href="./" aria-label="Function Graph Visualizer">fgv</a>
<div id="tabs" role="tablist" aria-label="설정 패널" aria-orientation="vertical"></div>
<button id="theme" class="rail-bottom" aria-label="라이트/다크 모드"><span aria-hidden="true">☼</span>UI 밝기</button>
<a class="repo-link" href="https://github.com/JHB-1/function-graph-visualizer-web" target="_blank"
rel="noopener noreferrer" aria-label="GitHub 저장소">↗</a></nav>
<aside id="sidebar" class="sidebar" aria-label="그래프 조작부">
<header class="sidebar-heading"><div><h1>Function Graph Visualizer</h1><span>WORKSPACE</span></div>
<button id="fold" aria-label="조작부 접기" aria-controls="sidebar" aria-expanded="true">‹</button></header>
<div class="preset-row"><label for="preset">예제</label><select id="preset" aria-label="예제 선택"></select>
<div id="document-status" role="status" aria-live="polite"></div></div>
<section id="content" class="sidebar-body" role="tabpanel" aria-labelledby="tab-input" tabindex="0"></section>
<div class="panel-actions"><button id="apply" class="primary">변경 적용</button></div>
<footer class="sidebar-status"><span id="pulse" aria-hidden="true">●</span>
<span id="status" role="status" aria-live="polite">그래프를 준비하고 있습니다…</span></footer></aside>
<main id="stage" aria-label="그래프 작업 공간">
<canvas id="graph" tabindex="0" role="img" aria-label="2D/3D 그래프, 왼쪽 이동, 오른쪽 회전, 휠 확대"></canvas>
<canvas id="labels" aria-hidden="true"></canvas>
<div id="item-marker" hidden aria-hidden="true"></div>
<section id="recovery" aria-label="작업 복구" hidden><p>이전 작업을 복구할까요?</p>
<button id="recover">복구</button><button id="discard">버리기</button></section>
<div class="canvas-controls" role="group" aria-label="관찰 조작">
<button id="open" aria-label="조작부 열기" aria-controls="sidebar" aria-expanded="false">☰</button>
<button id="zoom-out" aria-label="축소">−</button><span id="zoom-level" aria-live="off">100%</span>
<button id="zoom-in" aria-label="확대">＋</button><button id="reset" aria-label="그래프 맞춤">맞춤</button></div>
<label id="touch_controls">터치 조작 <select id="drag_mode" aria-label="Touch drag mode">
<option value="orbit">회전</option><option value="pan">이동</option></select></label>
<div id="hud" class="canvas-caption">왼쪽 이동 <span>·</span> 오른쪽 회전 <span>·</span> 휠 확대</div>
<div id="error" role="alert"></div></main></div>
<input id="document-picker" type="file" accept=".json,application/json" hidden>`;

if (host)
{
	const notice: HTMLParagraphElement = document.createElement("p");
	notice.id = "host-status";
	notice.setAttribute("aria-live", "polite");
	document.querySelector(".preset-row")!.append(notice);
}

function element<T extends HTMLElement>(id: string): T
{
	return document.getElementById(id) as T;
}
const canvas: HTMLCanvasElement = element("graph");
const plot: GpuPlot = new GpuPlot(canvas, element("labels"));
const core: CoreClient = new CoreClient();
const content: HTMLElement = element("content");
const state_schema = z.object
({
	dimension: z.union([z.literal(2), z.literal(3)]),
	view: z.object({ lower: z.array(z.number()).length(2), upper: z.array(z.number()).length(2), preserve_aspect: z.boolean() }),
	camera: z.object({ eye: z.array(z.number()).length(3), target: z.array(z.number()).length(3), up: z.array(z.number()).length(3),
		projection: z.string(), fov_y: z.number(), near_distance: z.number(), far_distance: z.number(),
		orthographic_width: z.number(), orthographic_height: z.number() }),
});
type State = z.infer<typeof state_schema>;
const screen_vertex_schema = z.object({ source_index: z.number().int(), position: z.array(z.number()).length(3),
	screen: z.array(z.number()).length(3).nullable() });
type ScreenVertex = z.infer<typeof screen_vertex_schema>;
let view_log: State[] = [];
let view_cursor: number = -1;
const bookmarks: Array<{ name: string; view: State }> = [];
let rendering: boolean = false;
let exporting: boolean = false;
let png_scale: number = 1;
let png_transparent: boolean = false;
let png_selection: boolean = false;
let document_value: DocumentValue = structuredClone(host?.initial_document ?? { spec: presets[0]!.spec, history: [] });
let document_name: string = "새 문서";
let baseline: string = JSON.stringify(document_value);
let pending_fields: boolean = false;
let storage_message: string = "자동 저장 준비 중";
let autosave: boolean = true;
let recovery_pending: boolean = false;
let recovery: RecoveryRecord | undefined;
let save_timer: ReturnType<typeof setTimeout> | undefined;
let save_epoch: number = 0;
let initialized: boolean = false;
let selected_item: string | undefined;
interface Item { id: string; label: string; position?: number[]; screen?: number[] | null }
let items: Item[] = [];
let item_query: string = "";
let item_page: number = 0;
let current_preset: string = host ? "" : "0";
let state: State | undefined;
let output: ObjectValue | undefined;
let scene: SceneData | undefined;
let sequence: number = 0;
let tab: string = "input";
let read_fields: () => ObjectValue = (): ObjectValue => structuredClone(document_value.spec);
let gesture: { pointer_id: number; x: number; y: number; button: number; state: State } | undefined;
let changed: boolean = false;
let sync_timer: ReturnType<typeof setTimeout> | undefined;
let style_timer: ReturnType<typeof setTimeout> | undefined;
let zoom_reference: State | undefined;
const system_theme: MediaQueryList = matchMedia("(prefers-color-scheme: dark)");
let dark: boolean = host?.dark ?? system_theme.matches;
let manual_theme: boolean = false;
let disposed: boolean = false;
let animation_id: number = 0;
let external_timer: ReturnType<typeof setTimeout> | undefined;
let external_document: DocumentValue | undefined;
let update_reload: boolean = false;
let update_snapshot: string = "";
let stop_updates: (() => void) | undefined;

function dirty(): boolean
{
	return pending_fields || JSON.stringify(document_value) !== baseline;
}

function document_status(): void
{
	element("document-status").textContent = `${document_name} · ${dirty() ? "미저장" : "변경 없음"} · ${storage_message}`;
}

function require_idle(): void
{
	if (gesture || sync_timer !== undefined || style_timer !== undefined || rendering || exporting)
		throw new Error("조작·계산·출력이 끝난 뒤 다시 시도하세요.");
}

async function confirm_action(message: string): Promise<boolean>
{
	return host?.confirm ? host.confirm(message) : confirm(message);
}

function reset_navigation(): void
{
	view_log = state ? [structuredClone(state)] : [];
	view_cursor = view_log.length - 1;
	bookmarks.length = 0;
}

function remember_view(view: State): void
{
	if (view_log[view_cursor]?.dimension !== view.dimension)
	{
		view_log = [];
		view_cursor = -1;
		bookmarks.length = 0;
	}

	if (JSON.stringify(view_log[view_cursor]) === JSON.stringify(view))
		return;

	view_log = view_log.slice(0, view_cursor + 1);
	view_log.push(structuredClone(view));
	if (view_log.length > 100)
		view_log.shift();

	view_cursor = view_log.length - 1;
}

async function restore_view(view: State, remember: boolean = true): Promise<void>
{
	require_idle();
	if (!state || view.dimension !== state.dimension)
		throw new Error("현재 그래프와 화면 차원이 다릅니다.");

	const previous: State = structuredClone(state);
	state = structuredClone(view);
	if (await commit_view(remember))
		return;

	state = previous;
	plot.preview(previous);
	plot.draw();
	throw new Error("화면 복원 실패 · 이전 관찰 상태 유지");
}

async function open_view(index: number): Promise<void>
{
	require_idle();
	const view: State | undefined = view_log[index];
	if (!view)
		return;

	const previous: number = view_cursor;
	view_cursor = index;
	try { await restore_view(view, false); }
	catch (error: unknown) { view_cursor = previous; throw error; }
}

function selected_vertices(result: ObjectValue): ScreenVertex[]
{
	if (!selected_item)
		throw new Error("항목을 먼저 선택하세요.");

	const vertices: ScreenVertex[] = z.array(screen_vertex_schema).parse(result.vertices);
	const selected: ScreenVertex[] = selected_item === "graph" ? vertices :
		vertices.filter((vertex: ScreenVertex): boolean => vertex.source_index === Number(selected_item!.split(":")[1]));
	if (!selected.length)
		throw new Error("선택 항목에는 표시할 좌표가 없습니다.");

	return selected;
}

function schedule_save(): void
{
	clearTimeout(save_timer);
	const epoch: number = ++save_epoch;
	if (!autosave || recovery_pending || !initialized)
	{
		document_status();

		return;
	}

	storage_message = "저장 중…";
	document_status();
	save_timer = setTimeout
	(
		(): void =>
		{
			const record: RecoveryRecord = { version: 1, name: document_name, document: structuredClone(document_value) };
			store_recovery(record).then
			(
				(): void =>
				{
					if (epoch !== save_epoch || !autosave)
						return;

					storage_message = "자동 저장됨";
					document_status();
				},
				(error: unknown): void =>
				{
					if (epoch !== save_epoch)
						return;

					storage_message = `자동 저장 실패: ${String(error)}`;
					document_status();
				},
			);
		}, 300,
	);
}

async function clear_local_record(all: boolean = false): Promise<void>
{
	clearTimeout(save_timer);
	++save_epoch;
	await store_recovery(undefined, all);
	sessionStorage.removeItem("fgv-update-recovery");
	recovery = undefined;
	recovery_pending = false;
	element("recovery").hidden = true;
	storage_message = autosave ? "로컬 기록 없음" : "자동 저장 꺼짐";
	document_status();
}

async function replace_document(candidate: DocumentValue, name: string): Promise<boolean>
{
	try { require_idle(); }
	catch (error: unknown) { error_text(error); return false; }

	if (dirty() && !await confirm_action("저장하지 않은 변경 사항을 버리고 문서를 교체할까요?"))
		return false;

	require_idle();

	if (!await render(candidate, true))
		return false;

	document_name = name;
	baseline = JSON.stringify(document_value);
	pending_fields = false;
	selected_item = undefined;
	item_query = "";
	item_page = 0;
	current_preset = "";
	preset.value = "";
	zoom_reference = state ? structuredClone(state) : undefined;
	reset_navigation();
	zoom_label();
	update_marker();
	if (tab === "items")
		panel();

	schedule_save();

	return true;
}

async function open_file(file: File): Promise<void>
{
	if (file.size > document_limit)
		throw new Error("문서 파일 상한은 1 MiB입니다.");

	const candidate: DocumentValue = parse_document(await file.text());
	await replace_document(candidate, file.name);
}

function configure_picker(input: HTMLInputElement): void
{
	input.onchange = (): void =>
	{
		const selected: File | undefined = input.files?.[0];
		if (selected)
			void open_file(selected).catch((error: unknown): void => error_text(error));

		input.value = "";
	};
}

async function export_document(): Promise<void>
{
	const exported: string = JSON.stringify(document_value);
	await download("graph.fgv.json", JSON.stringify(document_value, null, 2));
	baseline = exported;
	document_status();
}

function error_text(error: unknown): void
{
	element("error").textContent = error instanceof Error ? error.message : String(error);
}
function clear_error(): void
{
	element("error").textContent = "";
}
function theme(): void
{
	document.body.classList.toggle("light", !dark);
	document.documentElement.dataset.theme = dark ? "dark" : "light";
	plot.set_theme(dark);
}
theme();
system_theme.addEventListener
(
	"change", (event: MediaQueryListEvent): void =>
	{
		if (!manual_theme)
		{
			dark = event.matches;
			theme();
		}
	},
);
element("theme").onclick = (): void => { manual_theme = true; dark = !dark; theme(); };
function toggle_sidebar(collapsed: boolean): void
{
	document.body.classList.toggle("collapsed", collapsed);
	element("fold").setAttribute("aria-expanded", String(!collapsed));
	element("open").setAttribute("aria-expanded", String(!collapsed));
}
element("fold").onclick = (): void => toggle_sidebar(true);
element("open").onclick = (): void => toggle_sidebar(false);

function size(): [number, number]
{
	const area: DOMRect = canvas.getBoundingClientRect();

	return [Math.max(64, Math.min(4096, Math.round(area.width))), Math.max(64, Math.min(4096, Math.round(area.height)))];
}

function zoom_label(): void
{
	if (!state || !zoom_reference)
		return;

	let ratio: number;
	if (state.dimension === 2)
		ratio = (zoom_reference.view.upper[0]! - zoom_reference.view.lower[0]!) / (state.view.upper[0]! - state.view.lower[0]!);
	else if (state.camera.projection === "orthographic")
		ratio = zoom_reference.camera.orthographic_width / state.camera.orthographic_width;
	else
	{
		const distance = (value: State): number => Math.hypot
		(
			...value.camera.eye.map((coordinate: number, axis: number): number => coordinate - value.camera.target[axis]!),
		);
		ratio = distance(zoom_reference) / distance(state);
	}

	element("zoom-level").textContent = `${Math.round(ratio * 100)}%`;
}

async function render(candidate: DocumentValue, rebuild: boolean = false, remember: boolean = true): Promise<boolean>
{
	if (exporting || disposed)
		return false;

	const ticket: number = ++sequence;
	rendering = true;
	clear_error();
	element("status").textContent = "코어 계산 중…";
	try
	{
		const spec: ObjectValue = candidate.spec;
		const input: ObjectValue = { spec, history: candidate.history, canvas_size: size() };
		if (spec.kind === "function")
			input.expression_ast = parse_expression(String(spec.expression), Number(spec.dimension_count));

		const result: ObjectValue = await core.request(input);
		await document.fonts.ready;
		if (ticket !== sequence)
			return false;

		const next_scene: SceneData = scene_schema.parse(result);
		const next_state: State = state_schema.parse(result);
		const next_items: Item[] = make_items(result, next_scene, candidate.spec);
		plot.load(next_scene, next_state);
		plot.set_theme(dark);
		const edited: boolean = JSON.stringify(document_value) !== JSON.stringify(candidate);
		document_value = structuredClone(candidate);
		if (edited || rebuild)
			pending_fields = false;
		state = next_state;
		if (remember)
			remember_view(next_state);
		zoom_reference ??= structuredClone(next_state);
		zoom_label();
		output = result;
		scene = next_scene;
		items = next_items;
		canvas.dataset.ready = "true";
		canvas.dataset.dimension = String(next_scene.dimension);
		element<HTMLSelectElement>("drag_mode").disabled = next_scene.dimension !== 3;
		canvas.dataset.revision = String(result.host_revision ?? result.cache_revision);
		element("status").textContent = `${next_scene.dimension}D · ${next_scene.vertices.length.toLocaleString()} 정점 · ` +
			`${next_scene.triangles.length.toLocaleString()} 면 · revision ${result.host_revision ?? result.cache_revision}`;
		if (rebuild || tab === "items")
			panel();
		update_marker();
		if (edited)
			schedule_save();
		else
			document_status();

		return true;
	}
	catch (error: unknown)
	{
		if (ticket === sequence)
		{
			error_text(error);
			element("status").textContent = "적용 실패 · 마지막 성공 그래프 유지";
		}

		return false;
	}
	finally
	{
		if (ticket === sequence)
			rendering = false;
	}
}

function heading(title: string, description: string): void
{
	const h: HTMLHeadingElement = document.createElement("h2");
	h.textContent = title;
	const p: HTMLParagraphElement = document.createElement("p");
	p.textContent = description;
	content.append(h, p);
}
function field(label: string, value: string, multiline: boolean = false): HTMLInputElement | HTMLTextAreaElement
{
	const wrap: HTMLLabelElement = document.createElement("label");
	wrap.textContent = label;
	const input: HTMLInputElement | HTMLTextAreaElement = document.createElement(multiline ? "textarea" : "input");
	if (input instanceof HTMLInputElement)
		input.type = "text";

	input.value = value;
	wrap.append(input);
	content.append(wrap);

	return input;
}
function json_field(label: string, value: unknown): HTMLTextAreaElement
{
	return field(label, JSON.stringify(value, null, 2), true) as HTMLTextAreaElement;
}
function button(label: string, action: () => void | Promise<void>): HTMLButtonElement
{
	const result: HTMLButtonElement = document.createElement("button");
	result.textContent = label;
	result.onclick = (): void =>
	{
		clear_error();
		Promise.resolve().then(action).catch((error: unknown): void => error_text(error));
	};
	content.append(result);

	return result;
}
function check(label: string, checked: boolean): HTMLInputElement
{
	const wrap: HTMLLabelElement = document.createElement("label");
	wrap.className = "check";
	const input: HTMLInputElement = document.createElement("input");
	input.type = "checkbox";
	input.checked = checked;
	wrap.append(input, document.createTextNode(label));
	content.append(wrap);

	return input;
}
function selection(label: string, values: string[], selected: string): HTMLSelectElement
{
	const wrap: HTMLLabelElement = document.createElement("label");
	wrap.textContent = label;
	const select: HTMLSelectElement = document.createElement("select");
	select.setAttribute("aria-label", label);
	for (const value of values)
	{
		const option: HTMLOptionElement = document.createElement("option");
		option.textContent = value;
		select.append(option);
	}

	select.value = selected;
	wrap.append(select);
	content.append(wrap);

	return select;
}
async function download(name: string, value: string, type: string = "application/json"): Promise<void>
{
	require_idle();
	if (host)
		return host.download(name, new Blob([value], { type }));

	const url: string = URL.createObjectURL(new Blob([value], { type }));
	const anchor: HTMLAnchorElement = document.createElement("a");
	anchor.href = url;
	anchor.download = name;
	anchor.click();
	setTimeout((): void => URL.revokeObjectURL(url), 1000);
}
async function export_png(): Promise<void>
{
	require_idle();
	const [width, height] = size();
	const scaled_width: number = width * png_scale;
	const scaled_height: number = height * png_scale;
	if (scaled_width > 4096 || scaled_height > 4096 || scaled_width * scaled_height > 32000000)
		throw new Error("PNG 상한은 각 변 4096px, 전체 32MP입니다. 배율을 줄이세요.");

	if (png_selection && output)
		selected_vertices(output);

	exporting = true;
	const box: HTMLDivElement = document.createElement("div");
	box.dataset.exportPreview = "true";
	box.style.cssText = `position:fixed;left:-100000px;top:0;width:${width}px;height:${height}px;pointer-events:none`;
	const image_canvas: HTMLCanvasElement = document.createElement("canvas");
	const image_labels: HTMLCanvasElement = document.createElement("canvas");
	box.append(image_canvas, image_labels);
	document.body.append(box);
	let preview: GpuPlot | undefined;
	try
	{
		await document.fonts.ready;
		const source: DocumentValue = structuredClone(document_value);
		const input: ObjectValue = { ...source, canvas_size: [scaled_width, scaled_height], grid_pixel_scale: png_scale };
		if (source.spec.kind === "function")
			input.expression_ast = parse_expression(String(source.spec.expression), Number(source.spec.dimension_count));

		const result: ObjectValue = await core.request(input, true);
		const geometry: SceneData = scene_schema.parse(result);
		if (png_transparent)
		{
			geometry.style.background[3] = 0;
			geometry.rendering.host_background = false;
		}

		preview = new GpuPlot(image_canvas, image_labels);
		preview.load(geometry, state_schema.parse(result));
		preview.set_theme(dark);
		preview.draw();
		let left: number = 0, top: number = 0, right: number = scaled_width, bottom: number = scaled_height;
		if (png_selection)
		{
			const points: number[][] = selected_vertices(result).flatMap
			(
				(vertex: ScreenVertex): number[][] => vertex.screen ? [vertex.screen] : [],
			);
			if (!points.length)
				throw new Error("선택 영역이 현재 화면에 없습니다.");

			const pad: number = 12 * png_scale;
			left = Math.max(0, Math.floor(Math.min(...points.map((point: number[]): number => point[0]!)) - pad));
			top = Math.max(0, Math.floor(Math.min(...points.map((point: number[]): number => point[1]!)) - pad));
			right = Math.min(scaled_width, Math.ceil(Math.max(...points.map((point: number[]): number => point[0]!)) + pad));
			bottom = Math.min(scaled_height, Math.ceil(Math.max(...points.map((point: number[]): number => point[1]!)) + pad));
			if (left >= right || top >= bottom)
				throw new Error("선택 영역이 현재 화면에 없습니다.");
		}

		const image: HTMLCanvasElement = document.createElement("canvas");
		image.width = right - left;
		image.height = bottom - top;
		const context: CanvasRenderingContext2D = image.getContext("2d")!;
		if (!png_transparent)
		{
			context.fillStyle = getComputedStyle(element("stage")).backgroundColor;
			context.fillRect(0, 0, image.width, image.height);
		}

		context.drawImage(image_canvas, -left, -top);
		context.drawImage(image_labels, -left, -top);
		if (host)
		{
			const png: Blob = await new Promise
			(
				(resolve: (value: Blob) => void, reject: (error: Error) => void): void =>
				{
					image.toBlob((value: Blob | null): void =>
					{
						if (value) resolve(value);
						else reject(new Error("PNG 생성 실패"));
					});
				},
			);
			await host.download("graph.png", png);
		}
		else
		{
			const anchor: HTMLAnchorElement = document.createElement("a");
			anchor.download = "graph.png";
			anchor.href = image.toDataURL();
			anchor.click();
		}
	}
	finally
	{
		preview?.dispose();
		box.remove();
		exporting = false;
	}
}

function file_menu(): void
{
	const wrapper: HTMLDivElement = document.createElement("div");
	wrapper.className = "export-control";
	const menu: HTMLDivElement = document.createElement("div");
	menu.id = "export-menu";
	menu.hidden = true;
	menu.setAttribute("role", "group");
	menu.setAttribute("aria-label", "파일 출력 형식");
	const toggle = button("파일 출력 ▾", (): void =>
	{
		menu.hidden = !menu.hidden;
		toggle.setAttribute("aria-expanded", String(!menu.hidden));
	});
	toggle.id = "export-toggle";
	toggle.setAttribute("aria-expanded", "false");
	toggle.setAttribute("aria-controls", "export-menu");
	wrapper.append(toggle, menu);
	content.append(wrapper);
	const choices: Array<[string, () => void | Promise<void>]> =
	[
		["이미지 파일로 출력 (.png)", export_png],
		["그래프 문서로 출력 (.json)", export_document],
		["raw 데이터로 출력 (.json)", async (): Promise<void> =>
		{
			const raw: ObjectValue = structuredClone(document_value.spec);
			for (const key of ["presentation", "dimensions", "output", "theme", "surface_rendering"])
				delete raw[key];

			await download("graph.raw.json", JSON.stringify({ spec: raw, history: document_value.history }, null, 2));
		}],
		["코어 결과로 출력 (.json)", (): Promise<void> => download("scene.json", JSON.stringify(output, null, 2))],
	];
	for (const [label, action] of choices)
		menu.append(button(label, action));

	wrapper.onkeydown = (event: KeyboardEvent): void =>
	{
		if (event.key !== "Escape")
			return;

		event.stopPropagation();
		menu.hidden = true;
		toggle.setAttribute("aria-expanded", "false");
		toggle.focus();
	};
}

function upload(label: string, accept: string, receive: (text: string) => Promise<void>): void
{
	const input: HTMLInputElement = document.createElement("input");
	input.type = "file";
	input.accept = accept;
	input.setAttribute("aria-label", label);
	input.onchange = (): void =>
	{
		const file: File | undefined = input.files?.[0];
		if (!file)
			return;

		if (file.size > 8 * 1024 * 1024)
			return error_text(new Error("파일 상한은 8 MiB입니다."));

		file.text().then(receive).catch((error: unknown): void => error_text(error));
	};
	const text: HTMLLabelElement = document.createElement("label");
	text.textContent = label;
	text.append(input);
	content.append(text);
}
function presentation(spec: ObjectValue): ObjectValue
{
	if (!spec.presentation)
		spec.presentation = {};

	return object(spec.presentation);
}
function overrides(spec: ObjectValue): ObjectValue
{
	const display: ObjectValue = presentation(spec);
	if (!display.overrides)
		display.overrides = {};

	return object(display.overrides);
}

function panel(): void
{
	clearTimeout(style_timer);
	style_timer = undefined;
	content.replaceChildren();
	content.setAttribute("aria-labelledby", `tab-${tab}`);
	element("apply").hidden = !["input", "axes", "camera"].includes(tab);
	const draft: ObjectValue = structuredClone(document_value.spec);
	read_fields = (): ObjectValue => draft;
	if (tab === "input")
	{
		heading("입력 · ND 데이터", "raw 입력에 표시 정보는 필요하지 않습니다. JSON 편집은 이 웹 호스트의 입력 양식입니다.");
		const kind: HTMLSelectElement = selection("시각화 대상", ["function", "dataset", "histogram"], String(draft.kind));
		const dimensions = field("ND 차원 수", String(draft.dimension_count));
		const invalid = selection("결측값 정책 · null / 정의되지 않은 함수값", ["reject", "skip"], String(draft.invalid_values ?? "reject"));
		const editors: Array<[string, HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, boolean]> = [];
		if (draft.kind === "function")
		{
			heading("함수", "x/y/z 또는 x0…x63. + - * / ^, sin cos tan exp log sqrt abs min max pow, pi e. 코드 실행 없이 제한 AST만 사용합니다.");
			const expression = field("수식", String(draft.expression));
			expression.className = "code-input";
			expression.spellcheck = false;
			editors.push(["expression", expression, false]);
			editors.push(["sampling", json_field("변화 축 · 범위 · 해상도 / 나머지 고정값", draft.sampling), true]);
			editors.push(["surface_rendering", json_field("와이어프레임 / LOD", draft.surface_rendering ??
				{ wireframe: "grid", wireframe_lines: [11, 11], lod: { enabled: true, max_error_pixels: 1 } }), true]);
		}
		else
		{
			editors.push(["rows", json_field("행 우선 원본 데이터 · null 허용", draft.rows), true]);
			if (draft.kind === "dataset")
			{
				editors.push(["plot", selection("표현", ["points", "curve", "surface"], String(draft.plot)), false]);
				editors.push(["columns", json_field("선택할 2개 / 3개 열", draft.columns), true]);
				editors.push(["paths", json_field("임의 경로 · null은 입력 순서, []는 연결 없음", draft.paths ?? null), true]);
				editors.push(["grid", json_field("곡면 격자 · u_count/v_count/row_indices", draft.grid ?? null), true]);
			}
			else
			{
				heading("집계", "mode: count / sum / mean. axes는 1개 또는 2개. uniform의 lower부터 step 간격으로 자르거나 intervals에 직접 구간을 지정합니다.");
				editors.push(["histogram", json_field("구간 / 집계 / 값 열", draft.histogram), true]);
			}
		}

		read_fields = (): ObjectValue =>
		{
			if (kind.value !== draft.kind)
				throw new Error("대상 종류 변경은 위 예제 선택 또는 문서 탭의 전체 명세로 시작하세요.");

			draft.dimension_count = Number(dimensions.value);
			draft.invalid_values = invalid.value;
			for (const [key, input, json] of editors)
			{
				const value: unknown = json ? JSON.parse(input.value) : input.value;
				if (value === null)
					delete draft[key];
				else
					draft[key] = value;
			}

			return draft;
		};
	}
	else if (tab === "axes")
	{
		heading("축 · 범위", "격자는 무한 직선입니다. 축 길이는 샘플링·집계 범위와 독립입니다. 자동 설정으로 복원하려면 해당 필드를 null로 지정하세요.");
		const display: ObjectValue = presentation(draft);
		const patch: ObjectValue = overrides(draft);
		const grid = check("격자 표시", Boolean(patch.show_grid ?? display.show_grid ?? true));
		const axes = check("축 표시", Boolean(patch.show_axes ?? display.show_axes ?? true));
		const arrows = check("축 화살표", Boolean(patch.show_axis_arrows ?? display.show_axis_arrows ?? true));
		const config: ObjectValue = {};
		for (const key of ["display_range", "grid_spacing", "grid_origin", "axis_lengths", "axis_origin"])
			config[key] = patch[key] ?? display[key] ?? null;

		const range = json_field("범위 / 간격 / 원점 / 축 길이", config);
		const metadata = json_field("제목 / 출력 축 이름·단위", { title: display.title ?? "", axes: display.axes ?? [] });
		const labels = json_field("ND 열·변수 이름·단위", draft.dimensions ?? []);
		const out = json_field("함수 출력 이름·단위", draft.output ?? {});
		read_fields = (): ObjectValue =>
		{
			const values: ObjectValue = object(JSON.parse(range.value));
			for (const [key, value] of Object.entries(values))
			{
				if (value === null)
				{
					delete patch[key];
					delete display[key];
					if (key === "display_range")
						patch.automatic_range = true;
				}
				else
				{
					patch[key] = value;
					if (key === "display_range")
						patch.automatic_range = false;
				}
			}

			patch.show_grid = grid.checked;
			patch.show_axes = axes.checked;
			patch.show_axis_arrows = arrows.checked;
			Object.assign(display, object(JSON.parse(metadata.value)));
			draft.dimensions = JSON.parse(labels.value);
			draft.output = JSON.parse(out.value);

			return draft;
		};
	}
	else if (tab === "style")
	{
		heading("색상 · 크기", "값을 변경하면 바로 반영됩니다. 2D 기본 축은 UI 밝기를 따르고, 3D 기본 축은 RGB입니다. 지정한 색은 유지됩니다.");
		const patch: ObjectValue = overrides(draft);
		const style: ObjectValue = object(patch.style ?? {});
		patch.style = style;
		const surface: boolean = draft.kind === "function" ? object(draft.sampling).axes instanceof Array &&
			(object(draft.sampling).axes as unknown[]).length === 2 : draft.kind === "dataset" && draft.plot === "surface";
		for (const [key, label] of Object.entries({ background: "배경", grid: "격자", axes: "공통 축", stroke: "곡선",
			points: "데이터 점", surface: "곡면", wireframe: "와이어프레임", bars: "히스토그램 막대", text: "일반 글자" }))
		{
			if (key === "wireframe" && !surface)
				continue;

			const fallback: unknown = key === "axes" ? [128, 128, 128, 255] : scene?.style[key as keyof SceneData["style"]];
			const rgba: number[] = z.array(z.number()).length(4).parse(style[key] ?? fallback ?? [128, 128, 128, 255]);
			const wrap: HTMLLabelElement = document.createElement("label");
			wrap.textContent = label;
			const row: HTMLDivElement = document.createElement("div");
			row.className = "row";
			const color: HTMLInputElement = document.createElement("input");
			color.type = "color";
			color.value = "#" + rgba.slice(0, 3).map((v: number): string => v.toString(16).padStart(2, "0")).join("");
			color.setAttribute("aria-label", label + " 색상");
			const alpha: HTMLInputElement = document.createElement("input");
			alpha.type = "range"; alpha.min = "0"; alpha.max = "255"; alpha.value = String(rgba[3]);
			alpha.setAttribute("aria-label", label + " 알파");
			const update = (): void =>
			{
				style[key] = [1, 3, 5].map((offset: number): number => parseInt(color.value.slice(offset, offset + 2), 16));
				(style[key] as number[]).push(Number(alpha.value));
			};
			color.oninput = update;
			alpha.oninput = update;
			row.append(color, alpha);
			wrap.append(row);
			content.append(wrap);
		}

		const colors = json_field("축별 RGBA · null은 공통 설정", style.axis_colors ?? [null, null, null]);
		const sizes: ObjectValue = {};
		const legacy_style: ObjectValue = object(presentation(draft).style ?? {});
		for (const key of ["line_width", "point_radius", "grid_width", "axis_width", "arrow_length", "arrow_width", "bar_gap"])
			sizes[key] = style[key] ?? legacy_style[key] ??
				(key === "bar_gap" ? 0.1 : object(scene?.style ?? {})[key]);

		const names: Record<string, string> = { line_width: "곡선 굵기", point_radius: "점 반지름", grid_width: "격자 굵기",
			axis_width: "축 굵기", arrow_length: "화살표 길이", arrow_width: "화살표 너비", bar_gap: "막대 간격" };
		for (const [key, value] of Object.entries(sizes))
		{
			const number = field(names[key]!, String(value)) as HTMLInputElement;
			number.type = "number";
			number.min = "0";
			number.required = true;
			number.step = key === "bar_gap" ? "0.01" : "0.1";
			if (key === "bar_gap") number.max = "0.99";

			number.oninput = (): void =>
			{
				if (!number.validity.valid || !number.value.trim())
					return;

				style[key] = Number(number.value);
			};
		}
		read_fields = (): ObjectValue =>
		{
			style.axis_colors = JSON.parse(colors.value);

			return draft;
		};
		button("색상·크기 기본값 복원", async (): Promise<void> =>
		{
			delete patch.style;
			delete presentation(draft).style;
			await render({ spec: draft, history: document_value.history }, true);
		});
	}
	else if (tab === "camera")
	{
		heading("관찰 · 투영", "왼쪽 드래그 이동, 오른쪽 드래그 3D 회전, 휠 확대·축소. 초기 3D는 양의 XYZ 쪽에서 보는 120° 등각 정투상입니다.");
		const patch: ObjectValue = overrides(draft);
		const view = json_field("2D 뷰 · preserve_aspect", patch.view ?? state?.view);
		const camera = json_field("3D 카메라 · 원근 / 정투상 · fov_y는 라디안", patch.camera ?? state?.camera);
		read_fields = (): ObjectValue =>
		{
			if (state?.dimension === 2)
			{
				patch.view = object(JSON.parse(view.value));
				patch.automatic_view = false;
			}
			else
			{
				patch.camera = object(JSON.parse(camera.value));
				patch.automatic_camera = false;
			}

			return draft;
		};
	}
	else if (tab === "stream")
	{
		heading("증분 · 스트림", "행 ID는 삭제 후에도 재사용하지 않습니다. 실패 배치는 반영되지 않습니다. 웹 데모는 최대 128개 배치를 재현하고, 코어는 영향 행·셀만 증분 갱신합니다.");
		const changes = json_field("append / replace / erase · 고정 row_id", { append: [[0, 0, 0, 1]], replace: [], erase: [] });
		button("배치 적용", async (): Promise<void> =>
		{
			await render({ spec: document_value.spec, history: [...document_value.history, object(JSON.parse(changes.value))] }, true);
		});
		upload("NDJSON 배치 파일 · 한 줄에 한 변경 객체", ".ndjson,.jsonl,.txt", async (text: string): Promise<void> =>
		{
			for (const line of text.split(/\r?\n/).filter((value: string): boolean => value.trim().length > 0))
				if (!await render({ spec: document_value.spec, history: [...document_value.history, object(JSON.parse(line))] }))
					throw new Error("스트림 중단 · 앞서 성공한 배치는 유지됩니다.");

			panel();
		});
		heading("전송 환경", "브라우저는 임의 TCP 수신 소켓을 열 수 없습니다. 로컬/네트워크 Boost.Asio 수신은 네이티브 호스트의 역할입니다. 이 페이지는 파일 스트림과 증분 배치를 직접 시험합니다.");
		const pre: HTMLPreElement = document.createElement("pre");
		pre.textContent = JSON.stringify({ row_ids: output?.row_ids, cache_revision: output?.cache_revision,
			last_delta: output?.last_delta, cells: output?.cells }, null, 2);
		content.append(pre);
	}
	else if (tab === "items")
	{
		heading
		(
			"항목",
			"현재 그래프와 원본 행 ID, 함수 샘플 또는 히스토그램 셀을 검색합니다. " +
			"선택 후 위치 찾기로 관찰 중심을 옮깁니다.",
		);
		const search = field("이름·ID 검색", item_query) as HTMLInputElement;
		search.type = "search";
		const summary: HTMLParagraphElement = document.createElement("p");
		const list: HTMLDivElement = document.createElement("div");
		list.className = "item-list";
		list.setAttribute("role", "group");
		list.setAttribute("aria-label", "항목 목록");
		content.append(summary, list);
		const draw_list = (): void =>
		{
			const query: string = item_query.trim().toLocaleLowerCase();
			const found: Item[] = items.filter((item: Item): boolean => `${item.id} ${item.label}`.toLocaleLowerCase().includes(query));
			const start: number = item_page * 100;
			summary.textContent = `${found.length}개 항목 · ${item_page + 1}/${Math.max(1, Math.ceil(found.length / 100))} 페이지`;
			list.replaceChildren();
			for (const item of found.slice(start, start + 100))
			{
				const control: HTMLButtonElement = document.createElement("button");
				control.textContent = `${item.label} · ${item.id}`;
				control.dataset.itemId = item.id;
				control.setAttribute("aria-pressed", String(selected_item === item.id));
				control.onclick = (): void =>
				{
					selected_item = item.id;
					update_marker();
					draw_list();
					list.querySelector<HTMLButtonElement>(`[data-item-id="${CSS.escape(item.id)}"]`)?.focus();
				};
				list.append(control);
			}
		};
		search.oninput = (): void => { item_query = search.value; item_page = 0; draw_list(); };
		button("이전 페이지", (): void => { item_page = Math.max(0, item_page - 1); draw_list(); });
		button("다음 페이지", (): void =>
		{
			const count: number = items.filter((item: Item): boolean =>
				`${item.id} ${item.label}`.toLocaleLowerCase().includes(item_query.trim().toLocaleLowerCase())).length;
			item_page = Math.min(Math.max(0, Math.ceil(count / 100) - 1), item_page + 1);
			draw_list();
		});
		button("위치 찾기", (): void => locate_item());
		const view_heading: HTMLHeadingElement = document.createElement("h3");
		view_heading.textContent = "화면";
		content.append(view_heading);
		button("이전", async (): Promise<void> => { await open_view(view_cursor - 1); }).disabled = view_cursor <= 0;
		button("다음", async (): Promise<void> => { await open_view(view_cursor + 1); }).disabled = view_cursor + 1 >= view_log.length;
		button("선택 항목에 맞춤", (): void => locate_item(true));
		const bookmark = field("화면 이름", "") as HTMLInputElement;
		bookmark.maxLength = 80;
		button("현재 화면 저장", (): void =>
		{
			require_idle();
			const name: string = bookmark.value.trim();
			if (!state || !name || bookmarks.length >= 20 ||
				bookmarks.some((entry: typeof bookmarks[number]): boolean => entry.name === name))
				throw new Error("중복되지 않는 화면 이름이 필요합니다. 최대 20개까지 저장합니다.");

			bookmarks.push({ name, view: structuredClone(state) });
			panel();
		});
		for (const entry of bookmarks)
		{
			button(`${entry.name} 열기`, async (): Promise<void> => { await restore_view(entry.view); });
			button(`${entry.name} 삭제`, (): void => { bookmarks.splice(bookmarks.indexOf(entry), 1); panel(); });
		}

		draw_list();
	}
	else if (tab === "document")
	{
		heading("문서 · 테마", "raw 입력과 표시 정보를 포함한 문서를 모두 받습니다. .fgvtheme은 실제 코어가 읽고 정규화합니다. 명시 override는 프로파일 기본값보다 우선합니다.");
		if (host?.recovery_note)
		{
			const note: HTMLParagraphElement = document.createElement("p");
			note.textContent = host.recovery_note;
			content.append(note);
		}
		button("새 문서", async (): Promise<void> =>
		{
			await replace_document({ spec: { kind: "dataset", dimension_count: 2, rows: [], columns: [0, 1], plot: "points" },
				history: [] }, "새 문서");
		});
		const file: HTMLInputElement = document.createElement("input");
		file.type = "file";
		file.accept = ".json,application/json";
		file.setAttribute("aria-label", "파일 열기 (.json)");
		configure_picker(file);
		content.append(file);
		const save = check("자동 저장", autosave);
		save.onchange = async (): Promise<void> =>
		{
			autosave = save.checked;
			try
			{
				if (host?.drafts) await host.drafts.set_enabled(autosave);
				else sessionStorage.setItem(storage_key("autosave"), String(autosave));
			}
			catch (error: unknown) { error_text(error); }
			if (autosave)
				schedule_save();
			else
				void clear_local_record().catch((error: unknown): void =>
				{
					storage_message = `로컬 기록 삭제 실패: ${String(error)}`;
					document_status();
				});
		};
		button("로컬 기록 지우기", async (): Promise<void> =>
		{
			if (await confirm_action("FGV의 모든 탭에서 저장한 로컬 기록을 지울까요?"))
				await clear_local_record(true);
		});
		const options_heading: HTMLHeadingElement = document.createElement("h3");
		options_heading.textContent = "이미지 출력 옵션";
		content.append(options_heading);
		const scale = selection("PNG 배율", ["1×", "2×", "3×"], `${png_scale}×`);
		scale.onchange = (): void => { png_scale = Number(scale.value[0]); };
		const transparent = check("투명 배경", png_transparent);
		transparent.onchange = (): void => { png_transparent = transparent.checked; };
		const extent = selection("출력 범위", ["현재 화면", "선택 영역"], png_selection ? "선택 영역" : "현재 화면");
		extent.onchange = (): void => { png_selection = extent.value === "선택 영역"; };
		const help: HTMLParagraphElement = document.createElement("p");
		help.textContent = "PNG는 코어 뷰를 다시 계산해 출력합니다. 각 변 4096px 이하, 32MP 이하입니다. " +
			"Ctrl/Cmd+S: JSON 출력 · Ctrl/Cmd+O: 파일 열기 · Ctrl/Cmd+F: 항목 검색";
		help.setAttribute("aria-label", "단축키 안내");
		content.append(help);
		const editor = json_field("전체 웹 호스트 문서 · spec / history", document_value);
		editor.className = "long";
		button("문서 적용", async (): Promise<void> =>
		{
			await render(parse_document(editor.value), true);
		});
		file_menu();
		const theme_editor = field(".fgvtheme 프로파일", String(draft.theme ?? "fgv-theme 1\n"), true);
		button("테마 검증·적용", async (): Promise<void> =>
		{
			const result: ObjectValue = await core.request({ operation: "theme", text: theme_editor.value });
			draft.theme = result.text;
			await render({ spec: draft, history: document_value.history }, true);
		});
		button("테마 저장", async (): Promise<void> =>
		{
			const result: ObjectValue = await core.request({ operation: "theme", text: theme_editor.value });
			await download("default.fgvtheme", String(result.text), "text/plain");
		});
		upload("테마 파일 열기", ".fgvtheme", async (text: string): Promise<void> =>
		{
			const result: ObjectValue = await core.request({ operation: "theme", text });
			draft.theme = result.text;
			await render({ spec: draft, history: document_value.history }, true);
		});
	}
	else
	{
		heading("코어 · 진단", "행렬·기하·집계·프레임은 C++23 코어에서 생성합니다. JavaScript는 입력 해석과 Three.js 렌더링을 담당합니다.");
		for (const action of host?.actions ?? [])
			button(action.label, action.run).id = action.id;
		const transform = json_field("투영 / 역변환 / ray / 직선·선분 절단", {
			world: [0, 0, 0], screen: [size()[0] / 2, size()[1] / 2], end: [1, 1, 1],
			line: { origin: [0, 0, 0], direction: [1, 0, 0] },
		});
		const result: HTMLPreElement = document.createElement("pre");
		button("현재 뷰에서 변환", async (): Promise<void> =>
		{
			result.textContent = JSON.stringify(await core.request({ ...object(JSON.parse(transform.value)), operation: "transform",
				dimension: state?.dimension, view: state?.view, camera: state?.camera, viewport: scene?.rendering.viewport }), null, 2);
		});
		content.append(result);
		button("코어 결과 JSON 저장", (): Promise<void> => download("scene.json", JSON.stringify(output, null, 2)));
		button("PNG 저장", export_png);
		const info: HTMLPreElement = document.createElement("pre");
		info.textContent = JSON.stringify({ version: "web 0.1.0 · core 0.7.0", range: output?.range, bounds: output?.bounds,
			grid_spacing: output?.grid_spacing, grid_lines: scene?.rendering.grid_lines.length, host: host?.info(),
			stats: output?.stats, sampling_axes: output?.sampling_axes, rendering: { canvas_size: scene?.rendering.canvas_size,
				viewport: scene?.rendering.viewport, view_matrix: scene?.rendering.view_matrix,
				projection_matrix: scene?.rendering.projection_matrix } }, null, 2);
		content.append(info);
	}
}

const tabs: Array<[string, string, string]> = [["input", "입력", "⌘"], ["style", "스타일", "◐"], ["items", "항목", "☷"],
	["axes", "축·범위", "⌁"], ["camera", "관찰", "◇"], ["stream", "증분", "⇄"],
	["diagnostics", "진단", "⋈"], ["document", "파일", "▤"]];
function select_tab(id: string): void
{
	tab = id;
	for (const child of document.querySelectorAll<HTMLButtonElement>("[role=tab]"))
	{
		child.classList.toggle("active", child.dataset.tab === id);
		child.setAttribute("aria-selected", String(child.dataset.tab === id));
		child.tabIndex = child.dataset.tab === id ? 0 : -1;
	}

	toggle_sidebar(false);
	panel();
}
for (const [index, [id, label, icon]] of tabs.entries())
{
	const control: HTMLButtonElement = document.createElement("button");
	const symbol: HTMLSpanElement = document.createElement("span");
	symbol.textContent = icon;
	symbol.setAttribute("aria-hidden", "true");
	control.append(symbol, document.createTextNode(label));
	control.id = `tab-${id}`;
	control.dataset.tab = id;
	control.setAttribute("role", "tab");
	control.setAttribute("aria-controls", "content");
	control.setAttribute("aria-selected", String(tab === id));
	control.tabIndex = tab === id ? 0 : -1;
	control.classList.toggle("active", tab === id);
	control.onclick = (): void => select_tab(id);
	control.onkeydown = (event: KeyboardEvent): void =>
	{
		let next: number;
		if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % tabs.length;
		else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
		else if (event.key === "Home") next = 0;
		else if (event.key === "End") next = tabs.length - 1;
		else return;

		event.preventDefault();
		select_tab(tabs[next]![0]);
		element(`tab-${tabs[next]![0]}`).focus();
	};
	element("tabs").append(control);
}

function schedule_style(): void
{
	if (tab !== "style")
		return;

	if (style_timer !== undefined)
		return;

	style_timer = setTimeout
	(
		(): void =>
		{
			style_timer = undefined;
			try
			{
				const candidate: ObjectValue = structuredClone(read_fields());
				if (content.querySelector("input:invalid"))
					throw new Error("유효한 스타일 값을 입력하세요. 마지막 그래프는 유지됩니다.");

				void render({ spec: candidate, history: document_value.history });
			}
			catch (error: unknown) { error_text(error); }
		}, 90,
	);
}
content.addEventListener("input", schedule_style);
content.addEventListener("change", schedule_style);
content.addEventListener
(
	"input", (event: Event): void =>
	{
		if (!["input", "style", "axes", "camera", "document"].includes(tab) ||
			!(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) ||
			event.target.type === "file" || event.target.type === "checkbox")
			return;

		pending_fields = true;
		document_status();
	},
);
const preset: HTMLSelectElement = element("preset");
for (const [index, entry] of presets.entries())
{
	const option: HTMLOptionElement = document.createElement("option");
	option.value = String(index); option.textContent = entry.name; preset.append(option);
}

preset.value = current_preset;

preset.onchange = async (): Promise<void> =>
{
	const chosen: string = preset.value;
	const entry = presets[Number(chosen)]!;
	if (await replace_document({ spec: structuredClone(entry.spec), history: [] }, entry.name))
		current_preset = chosen;

	preset.value = current_preset;
};
element("apply").onclick = (): void =>
{
	try
	{
		require_idle();
		const spec: ObjectValue = read_fields();
		void render({ spec, history: document_value.history }, true);
	}
	catch (error: unknown) { error_text(error); }
};
element("reset").onclick = (): void =>
{
	zoom_reference = undefined;
	const spec: ObjectValue = structuredClone(document_value.spec);
	const display: ObjectValue = presentation(spec);
	const patch: ObjectValue = overrides(spec);
	for (const key of ["view", "camera", "display_range"])
	{
		delete display[key];
		delete patch[key];
	}

	Object.assign(patch, { automatic_range: true, automatic_view: true, automatic_camera: true });
	void render({ spec, history: document_value.history }, true);
};

async function commit_view(remember: boolean = true): Promise<boolean>
{
	if (!state)
		return false;

	const spec: ObjectValue = structuredClone(document_value.spec);
	const patch: ObjectValue = overrides(spec);
	if (state.dimension === 2)
	{
		patch.view = state.view;
		patch.automatic_view = false;
		delete patch.display_range;
		delete presentation(spec).display_range;
		patch.automatic_range = true;
	}
	else
	{
		patch.camera = state.camera;
		patch.automatic_camera = false;
	}

	return render({ spec, history: document_value.history }, tab === "camera", remember);
}
canvas.oncontextmenu = (event: MouseEvent): void => event.preventDefault();
canvas.onpointerdown = (event: PointerEvent): void =>
{
	if (exporting || !state || (event.button !== 0 && event.button !== 2))
		return;

	canvas.setPointerCapture(event.pointerId);
	element("item-marker").hidden = true;
	++sequence;
	rendering = false;
	const button: number = event.pointerType === "touch" && state.dimension === 3 &&
		element<HTMLSelectElement>("drag_mode").value === "orbit" ? 2 : event.button;
	gesture = { pointer_id: event.pointerId, x: event.clientX, y: event.clientY, button, state: structuredClone(state) };
};
canvas.onpointermove = (event: PointerEvent): void =>
{
	if (!gesture || !state || gesture.pointer_id !== event.pointerId)
		return;

	const dx: number = (event.clientX - gesture.x) / canvas.getBoundingClientRect().width;
	const dy: number = (event.clientY - gesture.y) / canvas.getBoundingClientRect().height;
	const next: State = structuredClone(gesture.state);
	if (gesture.button === 0)
	{
		if (next.dimension === 2)
		{
			const x: number = -dx * (next.view.upper[0]! - next.view.lower[0]!);
			const y: number = dy * (next.view.upper[1]! - next.view.lower[1]!);
			for (const edge of [next.view.lower, next.view.upper]) { edge[0]! += x; edge[1]! += y; }
		}
		else
		{
			const offset: number[] = plot.pan_offset(dx, dy, next.camera.target);
			for (let axis: number = 0; axis < 3; ++axis)
			{
				next.camera.eye[axis]! += offset[axis]!;
				next.camera.target[axis]! += offset[axis]!;
			}
		}
	}
	else if (next.dimension === 3)
	{
		const [x, y, z_] = next.camera.eye.map((value: number, axis: number): number => value - next.camera.target[axis]!);
		const radius: number = Math.hypot(x!, y!, z_!);
		const azimuth: number = Math.atan2(y!, x!) - dx * Math.PI * 2;
		const elevation: number = Math.max(-1.52, Math.min(1.52, Math.asin(z_! / radius) + dy * Math.PI));
		next.camera.eye = [radius * Math.cos(elevation) * Math.cos(azimuth), radius * Math.cos(elevation) * Math.sin(azimuth),
			radius * Math.sin(elevation)].map((value: number, axis: number): number => value + next.camera.target[axis]!);
	}

	state = next;
	plot.preview(next);
	changed = true;
};
canvas.onpointerup = (event: PointerEvent): void =>
{
	if (gesture?.pointer_id === event.pointerId)
	{
		gesture = undefined;
		if (canvas.hasPointerCapture(event.pointerId))
			canvas.releasePointerCapture(event.pointerId);

		commit_view();
	}
};
canvas.onpointercancel = (event: PointerEvent): void =>
{
	if (gesture?.pointer_id === event.pointerId)
	{
		gesture = undefined;
		void commit_view();
	}
};
canvas.onlostpointercapture = canvas.onpointercancel;
function scale_view(factor: number): void
{
	if (!state)
		return;

	if (state.dimension === 2)
		for (let axis: number = 0; axis < 2; ++axis)
		{
			const center: number = (state.view.lower[axis]! + state.view.upper[axis]!) / 2;
			state.view.lower[axis] = center + (state.view.lower[axis]! - center) / factor;
			state.view.upper[axis] = center + (state.view.upper[axis]! - center) / factor;
		}
	else if (state.camera.projection === "orthographic")
	{
		state.camera.orthographic_width /= factor;
		state.camera.orthographic_height /= factor;
	}
	else
		state.camera.eye = state.camera.eye.map
		(
			(value: number, axis: number): number => state!.camera.target[axis]! + (value - state!.camera.target[axis]!) / factor,
		);

}

function zoom_by(factor: number): void
{
	if (exporting || !state)
		return;

	++sequence;
	rendering = false;
	element("item-marker").hidden = true;
	scale_view(factor);
	plot.preview(state);
	changed = true;
	clearTimeout(sync_timer);
	sync_timer = setTimeout((): void => { sync_timer = undefined; void commit_view(); }, 140);
	zoom_label();
}
element("zoom-in").onclick = (): void => zoom_by(1.2);
element("zoom-out").onclick = (): void => zoom_by(1 / 1.2);
canvas.addEventListener
(
	"wheel", (event: WheelEvent): void =>
	{
		event.preventDefault();
		zoom_by(Math.exp(Math.max(-0.4, Math.min(0.4, -event.deltaY * 0.0015))));
	}, { passive: false },
);
function animate(): void
{
	if (disposed)
		return;

	if (changed || gesture)
	{
		plot.draw();
		changed = false;
	}

	animation_id = requestAnimationFrame(animate);
}

function make_items(result: ObjectValue, geometry: SceneData, spec: ObjectValue): Item[]
{
	const vertices: ScreenVertex[] = z.array(screen_vertex_schema).parse(result.vertices);
	const positions = new Map(vertices.map((vertex: typeof vertices[number]): [number, typeof vertex] => [vertex.source_index, vertex]));
	const entries: Item[] = [{ id: "graph", label: geometry.title }];
	if (spec.kind === "histogram")
		for (const [index, cell] of z.array(z.object({ count: z.number(), value: z.number().nullable() })).parse(result.cells).entries())
			entries.push({ id: `cell:${index}`, label: `셀 ${index} · 개수 ${cell.count} · 값 ${cell.value ?? "없음"}`,
				...positions.get(index) });
	else if (spec.kind === "function")
		for (const vertex of vertices)
			entries.push({ id: `sample:${vertex.source_index}`, label: `샘플 ${vertex.source_index}`, ...vertex });
	else
		for (const id of z.array(z.number().int()).parse(result.row_ids))
			entries.push({ id: `row:${id}`, label: `행 ${id}`, ...positions.get(id) });

	return entries;
}

function update_marker(): void
{
	const marker: HTMLElement = element("item-marker");
	const item: Item | undefined = items.find((entry: Item): boolean => entry.id === selected_item);
	marker.hidden = !item?.screen;
	if (!item?.screen)
		return;

	const area: DOMRect = canvas.getBoundingClientRect();
	marker.style.left = `${item.screen[0]! * area.width / canvas.width}px`;
	marker.style.top = `${item.screen[1]! * area.height / canvas.height}px`;
}

function locate_item(fit: boolean = false): void
{
	require_idle();
	const item: Item | undefined = items.find((entry: Item): boolean => entry.id === selected_item);
	if (!item || !state)
		throw new Error("항목을 먼저 선택하세요.");

	if (item.id === "graph")
		return element("reset").click();

	if (!item.position)
		throw new Error("이 항목에는 표시할 좌표가 없습니다.");

	let point: number[] = item.position;
	let factor: number = 1;
	if (fit && output)
	{
		const vertices = selected_vertices(output);
		point = [0, 1, 2].map((axis: number): number =>
			(Math.min(...vertices.map((vertex: ScreenVertex): number => vertex.position[axis]!)) +
				Math.max(...vertices.map((vertex: ScreenVertex): number => vertex.position[axis]!))) / 2);
		const screens: number[][] = vertices.flatMap((vertex: ScreenVertex): number[][] => vertex.screen ? [vertex.screen] : []);
		if (screens.length)
			factor = Math.max(.1, Math.min(10, ...[0, 1].map((axis: number): number =>
				.65 * size()[axis]! / Math.max(10, Math.max(...screens.map((p: number[]): number => p[axis]!)) -
					Math.min(...screens.map((p: number[]): number => p[axis]!))))));
	}
	if (state.dimension === 2)
		for (let axis: number = 0; axis < 2; ++axis)
		{
			const offset: number = point[axis]! - (state.view.lower[axis]! + state.view.upper[axis]!) / 2;
			state.view.lower[axis]! += offset;
			state.view.upper[axis]! += offset;
		}
	else
		for (let axis: number = 0; axis < 3; ++axis)
		{
			state.camera.eye[axis]! += point[axis]! - state.camera.target[axis]!;
			state.camera.target[axis] = point[axis]!;
		}

	scale_view(factor);
	void commit_view();
}

async function initialize(): Promise<void>
{
	try
	{
		autosave = host?.drafts ? await host.drafts.get_enabled() : sessionStorage.getItem(storage_key("autosave")) !== "false";
		const stored: unknown = await read_recovery();
		recovery_pending = (autosave || sessionStorage.getItem("fgv-update-recovery") === "true") && stored !== undefined;
		if (recovery_pending)
		{
			element("recovery").hidden = false;
			storage_message = "복구 선택 대기";
			recovery = parse_recovery(stored);
		}
		else
		{
			storage_message = autosave ? "자동 저장 대기" : "자동 저장 꺼짐";
			if (!autosave)
				await store_recovery(undefined);
		}
	}
	catch (error: unknown)
	{
		storage_message = `로컬 저장소 오류: ${String(error)}`;
	}

	initialized = true;
	element<HTMLButtonElement>("recover").disabled = !recovery;
	document_status();
	await render(document_value, true);
	if (!host)
		stop_updates = watch_updates
		(
			async (): Promise<void> =>
			{
				require_idle();
				if (pending_fields || recovery_pending)
					throw new Error("입력 변경을 적용하거나 이전 복구를 선택한 뒤 업데이트하세요.");

				clearTimeout(save_timer);
				++save_epoch;
				await store_recovery({ version: 1, name: document_name, document: structuredClone(document_value) });
				sessionStorage.setItem("fgv-update-recovery", "true");
				update_reload = true;
				update_snapshot = JSON.stringify(document_value);
			},
		);
}

element("recover").onclick = (): void =>
{
	if (!recovery)
		return;

	const candidate: RecoveryRecord = recovery;
	void (async (): Promise<void> =>
	{
		if (dirty() && !await confirm_action("저장하지 않은 변경 사항을 버리고 이전 작업을 복구할까요?"))
			return;

		if (!await render(candidate.document, true))
			return;

		document_name = candidate.name;
		baseline = "";
		reset_navigation();
		pending_fields = false;
		recovery = undefined;
		recovery_pending = false;
		sessionStorage.removeItem("fgv-update-recovery");
		element("recovery").hidden = true;
		schedule_save();
	})();
};
element("discard").onclick = (): void => { void clear_local_record().catch((error: unknown): void => error_text(error)); };
window.addEventListener("beforeunload", (event: BeforeUnloadEvent): void =>
{
	if (dirty() && (!update_reload || pending_fields || JSON.stringify(document_value) !== update_snapshot))
		event.preventDefault();
});
element("stage").addEventListener
(
	"dragover", (event: DragEvent): void => { if (event.dataTransfer?.types.includes("Files")) event.preventDefault(); },
);
element("stage").addEventListener
(
	"drop", (event: DragEvent): void =>
	{
		event.preventDefault();
		const file: File | undefined = event.dataTransfer?.files[0];
		if (file)
			void open_file(file).catch((error: unknown): void => error_text(error));
	},
);
animate();
document.fonts.ready.then((): void => { if (!disposed) plot.draw(); });
document.addEventListener("keydown", (event: KeyboardEvent): void =>
{
	if ((event.ctrlKey || event.metaKey) && !event.altKey && ["KeyS", "KeyO", "KeyF"].includes(event.code))
	{
		event.preventDefault();
		try
		{
			if (event.code === "KeyS")
				void export_document().catch((error: unknown): void => error_text(error));
			else if (event.code === "KeyO")
			{
				require_idle();
				element<HTMLInputElement>("document-picker").click();
			}
			else
			{
				select_tab("items");
				const search: HTMLInputElement = content.querySelector('input[type="search"]')!;
				search.focus();
				search.select();
			}
		}
		catch (error: unknown) { error_text(error); }

		return;
	}

	if (event.key !== "Escape" || document.body.classList.contains("collapsed"))
		return;

	toggle_sidebar(true);
	element("open").focus();
});
let resize_timer: ReturnType<typeof setTimeout> | undefined;
function resize_canvas(): void
{
	if (disposed)
		return;

	const [width, height] = size();
	if (scene?.rendering.canvas_size[0] === width && scene.rendering.canvas_size[1] === height)
		return;

	if (rendering || gesture || exporting)
	{
		resize_timer = setTimeout(resize_canvas, 100);

		return;
	}

	void render(document_value);
}

const resize_observer: ResizeObserver = new ResizeObserver((): void =>
{
	clearTimeout(resize_timer);
	resize_timer = setTimeout(resize_canvas, 160);
});
resize_observer.observe(element("stage"));
function dispose_workspace(): void
{
	if (disposed)
		return;

	disposed = true;
	stop_updates?.();
	++sequence;
	clearTimeout(save_timer);
	clearTimeout(sync_timer);
	clearTimeout(style_timer);
	clearTimeout(resize_timer);
	clearTimeout(external_timer);
	cancelAnimationFrame(animation_id);
	resize_observer.disconnect();
	core.dispose();
	plot.dispose();
}

async function apply_external_document(): Promise<void>
{
	if (disposed || !external_document)
		return;

	if (rendering || gesture || exporting || sync_timer !== undefined || style_timer !== undefined)
	{
		external_timer = setTimeout(apply_external_document, 100);

		return;
	}

	const candidate: DocumentValue = external_document;
	if (pending_fields && !await confirm_action("서버의 새 그래프로 편집 중인 입력을 바꿀까요?"))
	{
		element("host-status").textContent = "서버에 새 변경 사항이 있습니다. 진단의 서버 새로고침으로 불러오세요.";

		return;
	}

	if (external_document !== candidate || disposed)
		return;

	external_document = undefined;
	reset_navigation();
	void render(candidate, true);
}

host?.subscribe
(
	(event: WorkspaceEvent): void =>
	{
		if (event.type === "teardown")
			return dispose_workspace();

		if (disposed)
			return;

		if (event.type === "document")
		{
			external_document = structuredClone(event.document);
			apply_external_document();
		}
		else if (event.type === "theme" && !manual_theme)
		{
			dark = event.dark;
			theme();
		}
		else if (event.type === "notice")
		{
			element("host-status").textContent = event.text;
			if (event.error)
				error_text(new Error(event.text));
		}
	},
);
window.addEventListener("pagehide", dispose_workspace);
panel();
configure_picker(element("document-picker"));
void initialize();
