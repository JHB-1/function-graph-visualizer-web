import assert from 'node:assert/strict';
import { test } from 'node:test';
import createRuntime from '../public/runtime/fgv-runtime.mjs';

const runtime = await createRuntime();
function request(input)
{
	return JSON.parse(runtime.ccall('fgv_request', 'string', ['string'], [JSON.stringify(input)]));
}
function scene(spec, history = [], extra = {})
{
	const result = request({ spec, history, ...extra });
	assert.equal(result.native_error, undefined, result.native_error);

	return result;
}
const base = { kind: 'dataset', dimension_count: 3, rows: [[0, 1, 2], [1, 3, 4], [2, 5, 6]], columns: [0, 1], plot: 'curve' };

test('ND projection, full viewport, raw and explicit document style', () =>
{
	const value = scene(base, [], { canvas_size: [1600, 900] });
	assert.deepEqual(value.rendering.viewport, [0, 0, 1600, 900]);
	assert.deepEqual(value.vertices.map((v) => v.position), [[0, 1, 0], [1, 3, 0], [2, 5, 0]]);
	const styled = scene({ ...base, presentation: { overrides: { style: { stroke: [1, 2, 3, 40] } } } });
	assert.deepEqual(styled.style.stroke, [1, 2, 3, 40]);
});
test('ND scalar function fixed variables and variable safety', () =>
{
	const spec = { kind: 'function', dimension_count: 3,
		sampling: { axes: [{ variable: 0, lower: 0, upper: 2, count: 3 }], fixed: [null, 4, 5] } };
	const value = scene(spec, [], { expression_ast: ['add', ['variable', 0], ['variable', 2]] });
	assert.deepEqual(value.vertices.map((v) => v.position[1]), [5, 6, 7]);
	assert.match(request({ spec, history: [], expression_ast: ['variable', 99] }).native_error, /variable/);
});
test('explicit paths, empty paths and regular-grid surface', () =>
{
	assert.equal(scene({ ...base, paths: [] }).segments.length, 0);
	assert.deepEqual(scene({ ...base, paths: [[0, 2]] }).rendering.segment_indices, [[0, 1]]);
	const value = scene({ ...base, plot: 'surface', columns: [0, 1, 2],
		rows: [[0, 0, 0], [1, 0, 1], [0, 1, 1], [1, 1, 2]], grid: { u_count: 2, v_count: 2 } });
	assert.equal(value.triangles.length, 2);
});
test('uniform intervals and count/sum/mean, empty mean', () =>
{
	const histogram = { axes: [{ column: 0, uniform: { lower: 0, upper: 3, step: 1 } }], value_column: 1 };
	for (const [mode, expected] of [['count', [1, 1, 1]], ['sum', [1, 3, 5]], ['mean', [1, 3, 5]]])
		assert.deepEqual(scene({ ...base, kind: 'histogram', histogram: { ...histogram, mode,
			...(mode === 'count' ? { value_column: undefined } : {}) } }).cells.map((v) => v.value), expected);

	const value = scene({ ...base, rows: [[0, 1, 2]], kind: 'histogram', histogram: { ...histogram, mode: 'mean' } });
	assert.deepEqual(value.cells.map((v) => v.value), [1, null, null]);
});
test('incremental IDs, changed deltas, rejection preserves replayable original', () =>
{
	const history = [{ erase: [1], append: [[3, 7, 8]] }, { replace: [{ row_id: 2, values: [2, 9, 6] }] }];
	const value = scene(base, history);
	assert.deepEqual(value.row_ids, [0, 2, 3]);
	assert.equal(value.last_delta.revision, 3);
	assert.equal(value.last_delta.upserted_vertices[0].row_id, 2);
	assert.ok(request({ spec: base, history: [...history, { erase: [999] }] }).native_error);
	assert.deepEqual(scene(base, history).row_ids, [0, 2, 3]);
});
test('theme round trip and duplicate/unknown rejection', () =>
{
	const value = request({ operation: 'theme', text: 'fgv-theme 1\n' });
	assert.equal(request({ operation: 'theme', text: value.text }).text, value.text);
	assert.ok(request({ operation: 'theme', text: 'fgv-theme 1\nunknown=1\n' }).native_error);
});
test('core project/unproject roundtrip and line clipping', () =>
{
	const value = request({ operation: 'transform', dimension: 2,
		view: { lower: [-1, -1], upper: [1, 1], preserve_aspect: false }, viewport: [0, 0, 800, 600],
		world: [0, 0, 0], screen: [400, 300], end: [1, 0, 0], line: { origin: [0, 0, 0], direction: [1, 0, 0] } });
	assert.deepEqual(value.project, [400, 300]);
	assert.deepEqual(value.unproject, [0, 0]);
	assert.deepEqual(value.line, [[0, 300, 0], [800, 300, 0]]);
});
test('reject malformed rows, excessive AST, invalid canvas and sample limits', () =>
{
	assert.ok(request({ spec: { ...base, rows: [[1, 2], [3, 4, 5, 6]] }, history: [] }).native_error);
	assert.ok(request({ spec: base, history: [], canvas_size: [0, 900] }).native_error);
	let ast = ['number', 0];
	for (let i = 0; i < 70; ++i)
		ast = ['neg', ast];

	assert.ok(request({ spec: { kind: 'function', dimension_count: 1 }, history: [], expression_ast: ast }).native_error);
});
test('JSON integer boundaries, invalid enum and ambiguous histogram bins are rejected', () =>
{
	for (const spec of [{ ...base, dimension_count: 3.5 }, { ...base, columns: [0, 1.5] }, { ...base, plot: 'unknown' },
		{ ...base, invalid_values: 'unknown' }, { ...base, presentation: { style: { stroke: [300, 0, 0, 255] } } }])
		assert.ok(request({ spec, history: [] }).native_error);

	assert.ok(request({ spec: base, history: [{ erase: [1.5] }] }).native_error);
	assert.ok(request({ spec: base, history: [], canvas_size: [800.5, 600] }).native_error);
	assert.ok(request({ spec: { ...base, kind: 'histogram', histogram: { mode: 'count', axes: [{ column: 0,
		uniform: { lower: 0, upper: 2, step: 1 }, intervals: [] }] } }, history: [] }).native_error);
});
