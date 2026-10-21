import type { ObjectValue } from "./engine/client";

export interface Preset { name: string; spec: ObjectValue }
const rows: number[][] = Array.from
(
	{ length: 80 }, (_: unknown, i: number): number[] =>
		[i / 8 - 5, Math.sin(i / 8) * 2, Math.cos(i / 8) * 2, i % 7 + 1],
);
const surface_rows: number[][] = [];
for (let v: number = 0; v < 9; ++v)
	for (let u: number = 0; u < 9; ++u)
		surface_rows.push([u - 4, v - 4, ((u - 4) ** 2 - (v - 4) ** 2) / 8]);

export const presets: Preset[] =
[
	{ name: "3D 함수 · 파동", spec: { kind: "function", dimension_count: 2, expression: "sin(x)*cos(y)",
		sampling: { axes: [{ variable: 0, lower: -5, upper: 5, count: 81 }, { variable: 1, lower: -5, upper: 5, count: 81 }],
			fixed: [null, null] }, invalid_values: "skip" } },
	{ name: "2D 함수 · sin", spec: { kind: "function", dimension_count: 1, expression: "sin(x)",
		sampling: { axes: [{ variable: 0, lower: -8, upper: 8, count: 401 }], fixed: [null] } } },
	{ name: "ND 함수 · 고정 변수", spec: { kind: "function", dimension_count: 4, expression: "sin(x0*x2)+cos(x1)+x3",
		sampling: { axes: [{ variable: 0, lower: -4, upper: 4, count: 71 }, { variable: 1, lower: -4, upper: 4, count: 71 }],
			fixed: [null, null, 2, 0.5] } } },
	{ name: "2D 데이터 · 점", spec: { kind: "dataset", dimension_count: 4, rows, columns: [0, 1], plot: "points" } },
	{ name: "3D 데이터 · 곡선", spec: { kind: "dataset", dimension_count: 4, rows, columns: [0, 1, 2], plot: "curve" } },
	{ name: "데이터 · 임의 경로", spec: { kind: "dataset", dimension_count: 4, rows, columns: [0, 1, 2], plot: "curve",
		paths: [[0, 10, 30, 50], [5, 25, 45, 65]] } },
	{ name: "데이터 · 격자 곡면", spec: { kind: "dataset", dimension_count: 3, rows: surface_rows, columns: [0, 1, 2],
		plot: "surface", grid: { u_count: 9, v_count: 9 } } },
	{ name: "2D 히스토그램 · 개수", spec: { kind: "histogram", dimension_count: 4, rows,
		histogram: { mode: "count", axes: [{ column: 0, uniform: { lower: -5, upper: 5, step: 1 } }] } } },
	{ name: "3D 히스토그램 · 합계", spec: { kind: "histogram", dimension_count: 4, rows,
		histogram: { mode: "sum", value_column: 3,
			axes: [{ column: 1, uniform: { lower: -2.5, upper: 2.5, step: 1 } },
				{ column: 2, uniform: { lower: -2.5, upper: 2.5, step: 1 } }] } } },
];
