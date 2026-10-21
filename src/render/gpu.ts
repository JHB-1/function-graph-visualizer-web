import * as THREE from "three";
import { z } from "zod";

const point = z.tuple([z.number().finite(), z.number().finite(), z.number().finite()]);
const color = z.tuple([z.number().int().min(0).max(255), z.number().int().min(0).max(255),
	z.number().int().min(0).max(255), z.number().int().min(0).max(255)]);
const index = z.number().int().nonnegative();
const matrix = z.array(z.number().finite()).length(16);
const style = z.object({
	background: color, grid: color, surface: color, bars: color, wireframe: color, stroke: color, points: color, text: color,
	line_width: z.number().nonnegative(), grid_width: z.number().nonnegative(), axis_width: z.number().nonnegative(),
	point_radius: z.number().nonnegative(), arrow_length: z.number().nonnegative(), arrow_width: z.number().nonnegative(),
});
export const scene_schema = z.object({
	dimension: z.union([z.literal(2), z.literal(3)]), title: z.string(), style,
	vertices: z.array(z.object({ position: point })).max(100000), points: z.array(index).max(100000),
	triangles: z.array(z.tuple([index, index, index])).max(200000), cells: z.array(z.unknown()).max(1000),
	show_grid: z.boolean(), show_axes: z.boolean(), show_axis_arrows: z.boolean(),
	axes: z.array(z.object({ label: z.string(), unit: z.string(), color, begin: point, end: point,
		ticks: z.array(z.object({ value: z.number().finite(), position: point })).max(1000) })).max(3),
	rendering: z.object({ version: z.literal(1), host_background: z.boolean().default(false),
		host_axis_colors: z.tuple([z.boolean(), z.boolean(), z.boolean()]).default([false, false, false]),
		canvas_size: z.tuple([z.number().min(64).max(4096), z.number().min(64).max(4096)]).default([1000, 700]),
		view_matrix: matrix, projection_matrix: matrix,
		viewport: z.tuple([z.number(), z.number(), z.number().positive(), z.number().positive()]),
		segment_indices: z.array(z.tuple([index, index])).max(200000),
		grid_lines: z.array(z.object({ origin: point, direction: point })).max(1000),
		surface: z.object({
			wireframe_indices: z.array(z.tuple([index, index])).max(300000),
			levels: z.array(z.object({ triangles: z.array(z.tuple([index, index, index])).max(200000),
				max_error_world: z.number().finite().nonnegative() })).max(16),
			lod_enabled: z.boolean(), max_error_pixels: z.number().finite().positive().max(20),
		}).optional(),
	}),
});
export type SceneData = z.infer<typeof scene_schema>;
type Rgba = z.infer<typeof color>;
export interface ViewState
{
	dimension: 2 | 3;
	view: { lower: number[]; upper: number[] };
	camera: {
		eye: number[]; target: number[]; up: number[]; projection: string;
		orthographic_width: number; orthographic_height: number;
	};
}

// 무한 직선의 동차 시야체 절단, 고정 길이/데이터 경계면으로 격자를 대체하지 않음
const infinite_vertex: string = `
attribute vec3 direction;
attribute float edge;
attribute float side;
uniform float line_width;
uniform vec2 resolution;
bool plane_clip(float p, float q, inout float lo, inout float hi) {
	if (abs(q) < 1e-12) return p >= 0.0;
	float t = -p / q;
	if (q > 0.0) lo = max(lo, t); else hi = min(hi, t);
	return lo <= hi;
}
void main() {
	vec4 a = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	vec4 b = projectionMatrix * modelViewMatrix * vec4(direction, 0.0);
	float lo = -1e30, hi = 1e30;
	bool ok = plane_clip(a.w+a.x,b.w+b.x,lo,hi);
	ok = plane_clip(a.w-a.x,b.w-b.x,lo,hi) && ok;
	ok = plane_clip(a.w+a.y,b.w+b.y,lo,hi) && ok;
	ok = plane_clip(a.w-a.y,b.w-b.y,lo,hi) && ok;
	ok = plane_clip(a.w+a.z,b.w+b.z,lo,hi) && ok;
	ok = plane_clip(a.w-a.z,b.w-b.z,lo,hi) && ok;
	vec4 p = a + lo * b;
	vec4 q = a + hi * b;
	vec2 delta = (q.xy / q.w - p.xy / p.w) * resolution;
	vec2 normal = vec2(-delta.y, delta.x) / max(length(delta), 1e-12);
	vec4 end = mix(p, q, edge);
	end.xy += normal * side * line_width / resolution * end.w;
	gl_Position = ok ? end : vec4(2.0,2.0,2.0,1.0);
}`;

function rgb(value: Rgba): THREE.Color
{
	return new THREE.Color(`rgb(${value[0]},${value[1]},${value[2]})`);
}

export class GpuPlot
{
	private readonly renderer: THREE.WebGLRenderer;
	private readonly scene: THREE.Scene = new THREE.Scene();
	private readonly root: THREE.Group = new THREE.Group();
	private readonly camera: THREE.Camera = new THREE.Camera();
	private readonly ink: CanvasRenderingContext2D;
	private data: SceneData | undefined;
	private base: ViewState | undefined;
	private readonly labels: HTMLCanvasElement;
	private frames: number = 0;
	private times: number[] = [];
	private disposed: boolean = false;
	private dark: boolean = false;
	private pixel_scale: number = 1;
	private buffer_width: number = 1000;
	private buffer_height: number = 700;
	private readonly resize_observer: ResizeObserver;
	private axis_lines: Array<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial> | undefined> = [];
	private surface_geometry: THREE.BufferGeometry | undefined;
	private levels: Array<{ indices: Uint32Array; error: number }> = [];
	private current_level: number = -1;
	private line_updates: Array<() => void> = [];
	private surface_bounds: THREE.Box3 = new THREE.Box3();

	constructor(private readonly canvas: HTMLCanvasElement, labels: HTMLCanvasElement)
	{
		this.labels = labels;
		const ink: CanvasRenderingContext2D | null = labels.getContext("2d");
		if (!ink)
			throw new Error("Canvas labels unavailable");

		this.ink = ink;
		this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
		this.renderer.setSize(1000, 700, false);
		this.renderer.setPixelRatio(1);
		labels.width = 1000;
		labels.height = 700;
		this.camera.matrixAutoUpdate = false;
		this.scene.add(this.root);
		canvas.dataset.renderer = "webgl2";
		this.resize_observer = new ResizeObserver((): void => { this.resize(); });
		this.resize_observer.observe(canvas);
	}

	private axis_tint(index: number): Rgba
	{
		const data: SceneData = this.data!;
		const original: Rgba = data.axes[index]!.color;
		if (data.dimension === 2 && data.rendering.host_axis_colors[index])
		{
			const channel: number = this.dark ? 255 : 0;

			return [channel, channel, channel, original[3]];
		}

		return original;
	}

	set_theme(dark: boolean): void
	{
		this.dark = dark;
		for (const [index, line] of this.axis_lines.entries())
			if (line)
			{
				const tint: THREE.Color = rgb(this.axis_tint(index));
				const uniform: THREE.Vector4 = line.material.uniforms.tint!.value as THREE.Vector4;
				uniform.set(tint.r, tint.g, tint.b, uniform.w);
			}

		this.draw();
	}

	private resize(): void
	{
		const width: number = this.canvas.getBoundingClientRect().width;
		if (this.disposed || width <= 0)
			return;

		// 버퍼/기하/코어 행렬 유지, 화면 크기가 바뀌어도 선/점/글꼴의 CSS 픽셀 크기 유지
		const scale: number = this.buffer_width / width;
		const ratio: number = scale / this.pixel_scale;
		this.pixel_scale = scale;
		this.root.traverse
		(
			(object: THREE.Object3D): void =>
			{
				if (!(object instanceof THREE.Mesh || object instanceof THREE.Points))
					return;

				const materials: THREE.Material[] = Array.isArray(object.material) ? object.material : [object.material];
				for (const material of materials)
					if (material instanceof THREE.ShaderMaterial)
						for (const name of ["line_width", "size"])
							if (material.uniforms[name])
								material.uniforms[name]!.value *= ratio;
			}
		);
		this.canvas.dataset.pixelScale = String(scale);
		this.draw();
	}

	private clear(): void
	{
		this.root.traverse((object: THREE.Object3D): void =>
		{
			if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points)
			{
				object.geometry.dispose();
				const materials: THREE.Material[] = Array.isArray(object.material) ? object.material : [object.material];
				for (const material of materials)
					material.dispose();
			}
		});
		this.root.clear();
		this.axis_lines = [];
		this.surface_geometry = undefined;
		this.levels = [];
		this.current_level = -1;
		this.line_updates = [];
	}

	private lines
	(
		positions: number[],
		tint: Rgba,
		width: number,
		overlay: boolean = false,
	): THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial> | undefined
	{
		if (!positions.length || !tint[3] || !width)
			return;

		// 소프트웨어 GL의 작은 인스턴스 반복 비용 제거, 정점은 선분당 네 개만 사용
		const count: number = positions.length / 6;
		const values = new Float32Array(count * 4 * 4);
		const indices = new Uint32Array(count * 6);
		for (let i: number = 0; i < count; ++i)
			indices.set([i*4, i*4+1, i*4+2, i*4+2, i*4+3, i*4], i*6);

		const geometry = new THREE.BufferGeometry();
		const buffer = new THREE.BufferAttribute(values, 4).setUsage(THREE.DynamicDrawUsage);
		geometry.setAttribute("clip_position", buffer);
		geometry.setIndex(new THREE.BufferAttribute(indices, 1));
		const color: THREE.Color = rgb(tint);
		// 축은 반투명 격자/곡면 이후 합성, 축 RGBA를 유지하며 깊이 가림 방지
		const material = new THREE.ShaderMaterial({
			vertexShader: "attribute vec4 clip_position; void main() { gl_Position = clip_position; }",
			fragmentShader: `uniform vec4 tint; void main() { gl_FragColor = tint;
				#include <colorspace_fragment>
			}`, uniforms: { tint: { value: new THREE.Vector4(color.r, color.g, color.b, tint[3] / 255) },
				line_width: { value: width * this.pixel_scale } },
			transparent: overlay || tint[3] < 255, depthWrite: false, depthTest: !overlay, side: THREE.DoubleSide });
		const object = new THREE.Mesh(geometry, material);
		object.renderOrder = overlay ? 10 : 0;
		object.frustumCulled = false;
		this.root.add(object);
		const transform = new THREE.Matrix4();
		const previous = new THREE.Matrix4();
		const begin = new THREE.Vector4(), end = new THREE.Vector4();
		const [,, viewport_width, viewport_height] = this.data!.rendering.viewport;
		let previous_width: number = NaN;
		this.line_updates.push
		(
			(): void =>
			{
				transform.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse).multiply(this.root.matrix);
				const line_width: number = material.uniforms.line_width!.value as number;
				if (transform.equals(previous) && line_width === previous_width)
					return;

				previous.copy(transform);
				previous_width = line_width;
				for (let i: number = 0; i < count; ++i)
				{
					const offset: number = i * 6;
					begin.set(positions[offset]!, positions[offset + 1]!, positions[offset + 2]!, 1).applyMatrix4(transform);
					end.set(positions[offset + 3]!, positions[offset + 4]!, positions[offset + 5]!, 1).applyMatrix4(transform);
					const da: number = begin.z + begin.w, db: number = end.z + end.w;
					if (da < 0 && db < 0)
					{
						values.fill(0, i * 16, (i + 1) * 16);
						continue;
					}

					if (da < 0)
						begin.lerp(end, da / (da - db));
					else if (db < 0)
						end.lerp(begin, db / (db - da));

					const dx: number = (end.x / end.w - begin.x / begin.w) * viewport_width;
					const dy: number = (end.y / end.w - begin.y / begin.w) * viewport_height;
					const length: number = Math.hypot(dx, dy);
					if (length <= 1e-10 || !Number.isFinite(length))
					{
						values.fill(0, i * 16, (i + 1) * 16);
						continue;
					}

					// 끝점 투영/근평면 절단을 한 번만 수행, GL에서는 완성된 쿼드의 합성만 실행
					const nx: number = -dy * line_width / (length * viewport_width);
					const ny: number = dx * line_width / (length * viewport_height);
					for (let j: number = 0; j < 4; ++j)
					{
						const p: THREE.Vector4 = j < 2 ? begin : end;
						const side: number = j === 0 || j === 3 ? -1 : 1;
						const vertex: number = i * 16 + j * 4;
						values[vertex] = p.x + nx * side * p.w;
						values[vertex + 1] = p.y + ny * side * p.w;
						values[vertex + 2] = p.z;
						values[vertex + 3] = p.w;
					}
				}

				buffer.needsUpdate = true;
			},
		);

		return object;
	}

	load(data: SceneData, state: ViewState): void
	{
		// 참조 인덱스 검증 완료 후 GPU 할당, 원본 수학/집계/샘플링은 코어 결과만 사용
		const count: number = data.vertices.length;
		const detail_indices: number[] = data.rendering.surface?.levels.flatMap
		(
			(level: NonNullable<SceneData["rendering"]["surface"]>["levels"][number]): number[] => level.triangles.flat(),
		) ?? [];
		for (const reference of [...data.triangles.flat(), ...data.rendering.segment_indices.flat(), ...data.points,
			...(data.rendering.surface?.wireframe_indices.flat() ?? []),
			...detail_indices])
			if (reference >= count)
				throw new Error("Scene index exceeds vertex count");

		this.clear();
		this.data = data;
		[this.buffer_width, this.buffer_height] = data.rendering.canvas_size;
		this.renderer.setSize(this.buffer_width, this.buffer_height, false);
		this.labels.width = this.buffer_width;
		this.labels.height = this.buffer_height;
		this.pixel_scale = this.buffer_width / Math.max(1, this.canvas.getBoundingClientRect().width);
		this.canvas.title = data.axes.map
		(
			(axis: SceneData["axes"][number]): string => axis.label + (axis.unit ? ` (${axis.unit})` : ""),
		).join(" · ");
		this.base = structuredClone(state);
		this.root.matrixAutoUpdate = false;
		this.root.matrix.identity();
		this.camera.matrixWorld.fromArray(data.rendering.view_matrix).transpose().invert();
		this.camera.matrix.copy(this.camera.matrixWorld);
		this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert();
		this.camera.projectionMatrix.fromArray(data.rendering.projection_matrix).transpose();

		// 코어 깊이 [0,1]을 WebGL 깊이 [-1,1]로 맞추는 좌표계 어댑터
		const depth = new THREE.Matrix4().set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, -1, 0, 0, 0, 1);
		this.camera.projectionMatrix.premultiply(depth);
		this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert();
		const positions: number[] = data.vertices.flatMap((vertex: SceneData["vertices"][number]): number[] => vertex.position);
		const fill: Rgba = data.cells.length ? data.style.bars : data.style.surface;
		if (data.triangles.length && fill[3])
		{
			const geometry = new THREE.BufferGeometry();
			geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
			geometry.setIndex(new THREE.Uint32BufferAttribute(data.triangles.flat(), 1).setUsage(THREE.DynamicDrawUsage));
			this.surface_geometry = geometry;
			geometry.computeBoundingBox();
			this.surface_bounds.copy(geometry.boundingBox!);
			this.levels = [{ indices: new Uint32Array(data.triangles.flat()), error: 0 }];
			for (const level of data.rendering.surface?.lod_enabled ? data.rendering.surface.levels : [])
				this.levels.push({ indices: new Uint32Array(level.triangles.flat()), error: level.max_error_world });
			const material = new THREE.MeshBasicMaterial({ color: rgb(fill), opacity: fill[3] / 255,
				transparent: fill[3] < 255, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1,
				polygonOffsetUnits: 1, forceSinglePass: true });
			this.root.add(new THREE.Mesh(geometry, material));
		}

		const wire: number[] = [];
		if (!data.cells.length && data.rendering.surface)
			for (const [begin, end] of data.rendering.surface.wireframe_indices)
				wire.push(...data.vertices[begin]!.position, ...data.vertices[end]!.position);

		const wire_mesh = this.lines(wire, data.style.wireframe, 1);
		if (wire_mesh)
		{
			// 불투명 선도 반투명 곡면 뒤에 합성, 깊이 검사는 유지하며 지정 RGB 보존
			wire_mesh.material.transparent = true;
			wire_mesh.renderOrder = 1;
		}

		this.canvas.dataset.wireSegments = String(wire.length / 6);
		this.canvas.dataset.sourceTriangles = String(data.triangles.length);
		const segments: number[] = [];
		for (const [begin, end] of data.rendering.segment_indices)
			segments.push(...data.vertices[begin]!.position, ...data.vertices[end]!.position);

		this.lines(segments, data.style.stroke, data.style.line_width);
		if (data.points.length && data.style.points[3] && data.style.point_radius)
		{
			const geometry = new THREE.BufferGeometry();
			geometry.setAttribute("position", new THREE.Float32BufferAttribute
			(
				data.points.flatMap((i: number): number[] => data.vertices[i]!.position), 3,
			));
			const tint: THREE.Color = rgb(data.style.points);
			const material = new THREE.ShaderMaterial({
				vertexShader: `uniform float size; void main() {
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_PointSize = size;
				}`,
				fragmentShader: `uniform vec4 tint; void main() {
					if (length(gl_PointCoord - vec2(.5)) > .5) discard;
					gl_FragColor = tint;
					#include <colorspace_fragment>
				}`,
				uniforms: { tint: { value: new THREE.Vector4(tint.r, tint.g, tint.b, data.style.points[3] / 255) },
					size: { value: data.style.point_radius * 2 * this.pixel_scale } }, transparent: true,
			});
			this.root.add(new THREE.Points(geometry, material));
		}

		if (data.show_grid && data.style.grid[3] && data.style.grid_width)
		{
			const origins: number[] = [], directions: number[] = [], edges: number[] = [], sides: number[] = [];
			for (const line of data.rendering.grid_lines)
			{
				for (let i: number = 0; i < 6; ++i)
				{
					origins.push(...line.origin);
					directions.push(...line.direction);
				}

				edges.push(0, 0, 1, 1, 1, 0);
				sides.push(-1, 1, 1, 1, -1, -1);
			}

			const geometry = new THREE.BufferGeometry();
			geometry.setAttribute("position", new THREE.Float32BufferAttribute(origins, 3));
			geometry.setAttribute("direction", new THREE.Float32BufferAttribute(directions, 3));
			geometry.setAttribute("edge", new THREE.Float32BufferAttribute(edges, 1));
			geometry.setAttribute("side", new THREE.Float32BufferAttribute(sides, 1));
			const tint: THREE.Color = rgb(data.style.grid);
			const material = new THREE.ShaderMaterial({ vertexShader: infinite_vertex,
				fragmentShader: `uniform vec4 tint; void main() { gl_FragColor = tint;
					#include <colorspace_fragment>
				}`,
				uniforms: { tint: { value: new THREE.Vector4(tint.r, tint.g, tint.b, data.style.grid[3] / 255) },
					line_width: { value: data.style.grid_width * this.pixel_scale }, resolution: { value: new THREE.Vector2(data.rendering.viewport[2], data.rendering.viewport[3]) } },
				transparent: true, depthWrite: false, side: THREE.DoubleSide });
			const grid = new THREE.Mesh(geometry, material);
			grid.renderOrder = -10;
			grid.frustumCulled = false;
			this.root.add(grid);
		}

		if (data.show_axes)
			for (const [index, axis] of data.axes.entries())
				this.axis_lines.push(this.lines([...axis.begin, ...axis.end], this.axis_tint(index), data.style.axis_width, true));

		// 자동 배경은 호스트 CSS가 담당, 테마 변경으로 기하/서버 revision 변경 없음
		this.renderer.setClearColor(rgb(data.style.background), data.rendering.host_background ? 0 : data.style.background[3] / 255);
		this.draw();
	}

	preview(state: ViewState): void
	{
		if (!this.base)
			return;

		const base: ViewState = this.base;
		if (state.dimension === 3)
		{
			// 호스트의 카메라 포즈만 변경, 투영 행렬은 코어에서 받은 행렬 유지
			const camera = state.camera;
			const target = new THREE.Vector3().fromArray(camera.target);
			this.camera.matrix.lookAt(new THREE.Vector3().fromArray(camera.eye), target, new THREE.Vector3().fromArray(camera.up));
			this.camera.matrix.setPosition(new THREE.Vector3().fromArray(camera.eye));
			this.camera.matrixWorld.copy(this.camera.matrix);
			this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert();
			const scale: number = camera.projection === "orthographic" ? base.camera.orthographic_width / camera.orthographic_width : 1;
			this.root.matrix.makeTranslation(...target.toArray());
			this.root.matrix.scale(new THREE.Vector3(scale, scale, scale));
			this.root.matrix.multiply(new THREE.Matrix4().makeTranslation(...target.negate().toArray()));
		}
		else
		{
			const old_center = new THREE.Vector3((base.view.lower[0]! + base.view.upper[0]!) / 2,
				(base.view.lower[1]! + base.view.upper[1]!) / 2, 0);
			const center = new THREE.Vector3((state.view.lower[0]! + state.view.upper[0]!) / 2,
				(state.view.lower[1]! + state.view.upper[1]!) / 2, 0);
			const scale: number = (base.view.upper[0]! - base.view.lower[0]!) / (state.view.upper[0]! - state.view.lower[0]!);
			this.root.matrix.makeTranslation(...old_center.toArray());
			this.root.matrix.scale(new THREE.Vector3(scale, scale, 1));
			this.root.matrix.multiply(new THREE.Matrix4().makeTranslation(...center.negate().toArray()));
		}
	}

	pan_offset(dx: number, dy: number, target: number[]): [number, number, number]
	{
		// 코어 투영 행렬과 렌더러 역변환으로 화면 평면의 입력 이동량 해석
		const ndc = new THREE.Vector3().fromArray(target).project(this.camera);
		const begin = ndc.clone().unproject(this.camera);
		const end = new THREE.Vector3(ndc.x - dx * 2 * this.buffer_width / this.data!.rendering.viewport[2], ndc.y + dy * 2 * this.buffer_height / this.data!.rendering.viewport[3], ndc.z).unproject(this.camera);

		return end.sub(begin).toArray();
	}

	private select_detail(): void
	{
		if (!this.surface_geometry || !this.data)
			return;

		// 정투상은 화면 축척, 원근은 최근접 깊이와 투영 미분 상한으로 픽셀 오차 제한
		const transform = new THREE.Matrix4().multiplyMatrices(this.camera.matrixWorldInverse, this.root.matrix);
		const p: number[] = this.camera.projectionMatrix.elements;
		const [,, width, height] = this.data.rendering.viewport;
		const fx: number = Math.abs(p[0]!) * width / (2 * this.pixel_scale);
		const fy: number = Math.abs(p[5]!) * height / (2 * this.pixel_scale);
		const scale: number = new THREE.Vector3().setFromMatrixColumn(this.root.matrix, 0).length();
		const bounds: THREE.Box3 = this.surface_bounds.clone().applyMatrix4(transform);
		const nearest: number = -bounds.max.z;
		const perspective: boolean = p[15] === 0;
		const near_plane: number = perspective ? p[14]! / (p[10]! - 1) : 0;
		const tolerance: number = this.data.rendering.surface?.max_error_pixels ?? 1;
		let selected: number = 0;
		let pixel_error: number = 0;
		for (let i: number = 1; i < this.levels.length; ++i)
		{
			const error: number = this.levels[i]!.error * scale;
			let pixels: number = error * Math.hypot(fx, fy);
			if (perspective)
			{
				if (nearest - error <= near_plane)
					continue;

				const x: number = Math.max(Math.abs(bounds.min.x), Math.abs(bounds.max.x));
				const y: number = Math.max(Math.abs(bounds.min.y), Math.abs(bounds.max.y));
				pixels = error * Math.hypot(fx * (1 + x / nearest), fy * (1 + y / nearest)) / (nearest - error);
			}

			if (pixels <= tolerance)
			{
				selected = i;
				pixel_error = pixels;
			}
		}

		if (selected !== this.current_level)
		{
			const indices: THREE.BufferAttribute = this.surface_geometry.getIndex()!;
			indices.array.set(this.levels[selected]!.indices);
			indices.needsUpdate = true;
			this.surface_geometry.setDrawRange(0, this.levels[selected]!.indices.length);
			this.current_level = selected;
		}

		this.canvas.dataset.lodLevel = String(selected);
		this.canvas.dataset.renderTriangles = String(this.levels[selected]!.indices.length / 3);
		this.canvas.dataset.lodErrorPixels = String(pixel_error);
	}

	draw(): void
	{
		if (!this.data || this.disposed)
			return;

		const began: number = performance.now();
		this.select_detail();
		for (const update of this.line_updates)
			update();
		const [x, y, width, height] = this.data.rendering.viewport;
		this.renderer.setViewport(0, 0, this.buffer_width, this.buffer_height);
		this.renderer.clear();
		this.renderer.setViewport(x, this.buffer_height - y - height, width, height);
		this.renderer.setScissor(x, this.buffer_height - y - height, width, height);
		this.renderer.setScissorTest(true);
		this.renderer.autoClear = false;
		this.renderer.render(this.scene, this.camera);
		this.renderer.setScissorTest(false);
		this.draw_labels();
		++this.frames;
		this.times.push(began);
		while (this.times.length > 2 && this.times[0]! < began - 1000)
			this.times.shift();

		this.canvas.dataset.frames = String(this.frames);
		this.canvas.dataset.fps = String((this.times.length - 1) * 1000 / Math.max(1, began - this.times[0]!));
		this.canvas.dataset.drawMs = String(performance.now() - began);
	}

	private draw_labels(): void
	{
		if (!this.data)
			return;

		const data: SceneData = this.data;
		const ink: CanvasRenderingContext2D = this.ink;
		const [x, y, width, height] = data.rendering.viewport;
		const scale: number = this.pixel_scale;
		const font_size: number = 13 * scale;
		const padding: number = 3 * scale;
		const occupied: Array<{ x: number; y: number; width: number; height: number }> = [];
		ink.clearRect(0, 0, this.buffer_width, this.buffer_height);
		ink.font = `${font_size}px ${getComputedStyle(this.canvas).fontFamily || "system-ui"}`;
		ink.textBaseline = "top";
		ink.save();
		ink.beginPath();
		ink.rect(x, y, width, height);
		ink.clip();
		const screen = (position: number[]): THREE.Vector3 =>
		{
			return new THREE.Vector3().fromArray(position).applyMatrix4(this.root.matrix).project(this.camera);
		};
		const [red, green, blue, alpha] = data.style.background;
		const background: string = data.rendering.host_background ?
			getComputedStyle(this.canvas.parentElement!).backgroundColor :
			`rgba(${red},${green},${blue},${alpha / 255})`;
		const label = (text: string, px: number, py: number, tint: Rgba): void =>
		{
			if (!text || !tint[3])
				return;

			// 라벨을 표시 영역 안으로 이동하고 겹치는 눈금 생략, 축 이름 우선 배치
			const available: number = width - padding * 2;
			if (ink.measureText(text).width > available)
			{
				const characters: string[] = Array.from(text);
				let lower: number = 0, upper: number = characters.length;
				while (lower < upper)
				{
					const middle: number = Math.ceil((lower + upper) / 2);
					if (ink.measureText(characters.slice(0, middle).join("") + "…").width <= available)
						lower = middle;
					else
						upper = middle - 1;
				}

				text = characters.slice(0, lower).join("") + "…";
			}

			const size: number = ink.measureText(text).width;
			const box = { x: Math.max(x + padding, Math.min(x + width - size - padding, px)),
				y: Math.max(y + padding, Math.min(y + height - font_size * 1.25 - padding, py)),
				width: size, height: font_size * 1.25 };
			if (occupied.some
			(
				(other: typeof occupied[number]): boolean => box.x < other.x + other.width + padding &&
					other.x < box.x + box.width + padding && box.y < other.y + other.height + padding &&
					other.y < box.y + box.height + padding,
			))
				return;

			occupied.push(box);
			ink.save();
			ink.globalAlpha = tint[3] / 255;
			ink.strokeStyle = background;
			ink.lineWidth = 3 * scale;
			ink.lineJoin = "round";
			ink.strokeText(text, box.x, box.y);
			ink.fillStyle = `rgb(${tint[0]},${tint[1]},${tint[2]})`;
			ink.fillText(text, box.x, box.y);
			ink.restore();
		};
		if (data.show_axes)
			for (const [index, axis] of data.axes.entries())
			{
				const tint: Rgba = this.axis_tint(index);
				ink.fillStyle = `rgba(${tint[0]},${tint[1]},${tint[2]},${tint[3] / 255})`;
				const end: THREE.Vector3 = screen(axis.end);
				if (Math.abs(end.x) <= 1 && Math.abs(end.y) <= 1 && Math.abs(end.z) <= 1)
				{
					const px: number = x + (end.x + 1) * width / 2;
					const py: number = y + (1 - end.y) * height / 2;
					label(axis.label + (axis.unit ? ` (${axis.unit})` : ""), px + 5 * scale, py + 5 * scale, tint);
					if (data.show_axis_arrows)
					{
						const begin: THREE.Vector3 = screen(axis.begin);
						const angle: number = Math.atan2(-(end.y - begin.y) * height, (end.x - begin.x) * width);
						ink.save();
						ink.translate(px, py);
						ink.rotate(angle);
						ink.beginPath();
						ink.moveTo(0, 0);
						ink.lineTo(-data.style.arrow_length * scale, -data.style.arrow_width * scale / 2);
						ink.lineTo(-data.style.arrow_length * scale, data.style.arrow_width * scale / 2);
						ink.closePath();
						ink.fill();
						ink.restore();
					}
				}
			}

		// 축 이름 배치 후 남은 영역에 눈금 배치, 원점 중복도 같은 충돌 검사로 생략
		if (data.show_axes)
			for (const [index, axis] of data.axes.entries())
				for (const tick of axis.ticks)
				{
					const p: THREE.Vector3 = screen(tick.position);
					if (Math.abs(p.x) > 1 || Math.abs(p.y) > 1 || Math.abs(p.z) > 1)
						continue;

					label(Number(tick.value.toPrecision(3)).toString(), x + (p.x + 1) * width / 2 + 3 * scale,
						y + (1 - p.y) * height / 2 + 8 * scale, this.axis_tint(index));
				}

		ink.restore();
	}

	dispose(): void
	{
		this.disposed = true;
		this.resize_observer.disconnect();
		this.clear();
		this.renderer.dispose();
		this.renderer.forceContextLoss();
		this.ink.clearRect(0, 0, this.labels.width, this.labels.height);
	}
}
