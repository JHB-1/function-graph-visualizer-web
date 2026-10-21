# Function Graph Visualizer Web

[전체 화면 체험판](https://JHB-1.github.io/function-graph-visualizer-web/)

C++23 **fgv::core 0.7.0**를 WebAssembly로 실행하는 2D/3D 웹 렌더러입니다.
페이지 전체를 작업 공간으로 사용합니다. 데스크톱은 56px 탭 레일과 접이식 300px 패널,
나머지 영역은 캔버스입니다. 700px 이하는 48px 레일과 오버레이 패널을 사용합니다.
왼쪽 드래그 이동, 오른쪽 드래그 3D 회전, 휠 확대·축소를 지원합니다.
수학·집계·증분 변경·테마·투영은 C++ 코어가 계산하고 Three.js가 결과를 그립니다.

격자는 현재 화면 전체를 채우며 이동/확대/회전/크기 변경 뒤 C++ 코어에서 다시 생성합니다.
3D 자동 간격은 세 축에 같은 월드 값을 사용하고 축별 명시 간격/원본 데이터 범위는 유지합니다.
원근 화면 간격은 깊이에 따라 달라집니다. 진단 탭에서 실제 격자 간격/후보 수를 확인할 수 있습니다.

| 저장소 | 역할 | 공개 범위 |
|---|---|---|
| function-graph-visualizer-core | 모델, 기하, 집계, 변환, 증분 캐시, 선택적 TCP/C ABI | private |
| function-graph-visualizer-web | 공통 Three.js 렌더러, 코어 JSON 브리지, WASM, Pages | public |
| function-graph-visualizer-plugin | 로컬 호스트, MCP, 스킬, 패키징 | private |
| function-graph-visualizer-desktop | 웹 화면을 재사용하는 크로스 플랫폼 Electron 앱 | private |

## 실행

Node.js 24 이상이 필요합니다. 공개 배포물은 코어 소스 접근 권한 없이 사용할 수 있습니다.

```sh
npm ci
npm run runtime
npm run dev
```

`npm run runtime`은 `runtime.lock.json`의 공개 WASM/ES 모듈을 내려받아 SHA-256을 확인합니다.
코어 소스나 인증 정보는 공개 저장소에 포함하지 않습니다. 입력 데이터는 브라우저 안에서 처리하며
서버에 전송하지 않습니다. 최초 정적 자원 다운로드 후 수학 계산에 외부 서비스는 필요하지 않습니다.

```sh
npm run build
node --test tests/runtime.mjs
# dist를 http://127.0.0.1:8988 에 제공한 뒤
npm test
```

## 기능

| 카테고리 | 코어 기능 / 조작 |
|---|---|
| 입력 | ND 함수의 변화 축 1개/2개, 나머지 변수 고정, 입력 범위·샘플 수, reject/skip |
| 입력 | ND 데이터의 2개/3개 열, 점, 입력 순서 곡선, 명시 경로, 빈 경로, 정규 격자 곡면 |
| 입력 | 히스토그램 1개/2개 구간 축, count/sum/mean, 균등·직접 지정 구간, 상한 포함 여부 |
| 축·범위 | 표시 범위, 무한 직선 격자, 축·격자 원점, 축 길이, 축 간격, 화살표, 이름·단위 |
| 색상·크기 | 모든 성분 RGBA, 축별 RGBA, 선·점·축·화살표 크기, bar_gap |
| 관찰 | 2D 뷰·종횡비, 3D 정투상/원근, eye/target/up/FOV/near/far, 초기 120도 등각 뷰 |
| 증분·스트림 | append/replace/erase, 고정 행 ID, revision, 실제 코어 delta, NDJSON 배치 파일 |
| 문서·테마 | raw / 표시 문서 JSON 열기·저장, .fgvtheme 검증·정규화·입출력, 명시 override |
| 진단 | 기하·행렬·범위·통계, project/unproject/ray, 무한 직선·유한 선분 절단, JSON/PNG 저장 |
| 표시 최적화 | 샘플 수와 U/V 표시선 분리, 선 배치, 보수적 화면 오차 LOD, 원본 기하 보존 |

복합 설정은 각 탭의 JSON 편집기로 모든 필드를 노출합니다. 예제 9종으로 기본 입력을 선택할 수 있습니다.
파일 탭의 새 문서/파일 열기와 화면 드래그앤드롭은 기존 spec/history JSON을 받습니다.
문서 파일과 전체 문서 편집기의 상한은 1 MiB이며 실패/교체 취소 시 현재 그래프를 유지합니다.
IndexedDB 자동 저장은 브라우저 안에서만 처리합니다. 시작 시 복구/버리기 선택 전에는 기록을 덮어쓰지 않습니다.
자동 저장을 끄거나 로컬 기록을 지울 수 있으며, 저장 실패도 현재 그래프를 보존합니다.
항목 탭은 현재 그래프/원본 행 ID/함수 샘플/히스토그램 셀의 검색·선택·위치 찾기를 제공합니다.
이전·다음 화면과 선택 항목 맞춤, 문서와 별도의 화면 북마크도 항목 탭에서 조작합니다.
PNG 1×/2×/3×, 투명 배경, 현재 화면/선택 영역을 지원하며 코어와 GPU에서 다시 그립니다.
출력 상한은 기존 WASM과 같은 각 변 4096px이며 32MP도 넘지 않습니다.
Ctrl/Cmd+S/O/F로 JSON 출력/파일 열기/항목 검색이 가능하며 조작 중 출력·교체는 거절합니다.
스타일은 값 변경 후 90ms 이내 입력을 병합해 자동 반영하고, 입력 폼의 포커스와 스크롤을 유지합니다.
잘못된 입력은 마지막 유효 그래프를 유지합니다. 스타일/파일 탭, 줌/맞춤, 상태와 키보드 탭 탐색은
GV의 [공통 작업 공간 계약](docs/workspace-ui.md)을 따릅니다.
UI와 기본 축 라벨은 자체 호스팅 Pretendard Variable v1.3.9, JSON/수식은 고정폭을 사용합니다.
폰트는 `public/fonts/PretendardVariable.woff2`, SIL OFL 원문은 `public/licenses/Pretendard-LICENSE.txt`입니다.
UI 밝기 변경은 코어 문서나 .fgvtheme 값을 변경하지 않습니다.
웹 JSON은 호스트의 교환 양식이며 새로운 코어 데이터 파일 표준을 의미하지 않습니다.
함수는 제한 AST로만 해석합니다. `eval`, `Function`, 사용자 코드 컴파일은 사용하지 않습니다.
`count` 집계에는 `value_column`을 생략하고, `sum`과 `mean`에는 지정합니다.

브라우저의 임의 TCP 수신과 네이티브 DLL 호출은 플랫폼 제한으로 제공할 수 없습니다.
Boost.Asio 로컬/네트워크 TCP 및 C ABI는 private 코어/네이티브 호스트의 기능이며,
웹에서는 파일 스트림과 같은 증분 배치를 시험합니다. 이 차이를 소켓 기능 구현으로 보고하지 않습니다.

## 제한과 소유권

웹 호스트는 입력 8 MiB, ND 1..64열, 보유 10,000행/160,000스칼라,
기하 후보 50,000정점/100,000선분/100,000삼각형, 히스토그램 1,000셀,
격자 1,000후보, 이력 128배치, 캔버스 각 변 64..4096픽셀을 제한으로 둡니다.
수식은 4096자/512노드/64중첩까지 허용합니다. 이는 코어 자체의 고정 한계가 아닌 웹 호스트의 설정입니다.
실패한 후보는 표시 상태를 교체하지 않습니다. 파일 스트림은 앞서 성공한 배치를 유지하고 오류 줄에서 멈춥니다.
세션을 닫으면 메모리는 사라지므로 후속 작업은 문서 저장으로 보관하세요.

정적 페이지는 전체 문서 이력을 후보 캐시에 재현합니다. 각 배치의 실제 계산은 코어 증분 API를 사용하지만,
브라우저 왕복 비용이 이력 길이에 따라 늘어납니다. 이 방식은 지속 캐시 서버의 처리량과 구별해야 합니다.
증분 점·곡선과 고정 구간 히스토그램만 지원하며, 임의 경로/격자 곡면 변경은 새 문서를 만듭니다.

## 코어에서 WASM 재빌드

`core.lock.json`에 고정한 private 코어 체크아웃과 Emscripten 4.0.23,
CMake 3.31 이상, nlohmann_json 3.12.0을 사용합니다. Docker는 필수 의존성이 아닙니다.
이번 런타임은 Windows Emscripten SDK 4.0.23/CMake 4.4.3으로 직접 빌드했습니다.

```sh
emcmake cmake -S . -B build-wasm -DCMAKE_BUILD_TYPE=Release -DFGV_CORE_SOURCE=/path/to/core
cmake --build build-wasm --parallel
# build-wasm/fgv-runtime.mjs, fgv-runtime.wasm을 public/runtime/에 복사
```

공통 JSON 브리지는 네이티브 CLI로도 빌드할 수 있으며 private 플러그인이 같은 소스를 사용합니다.
기본 1000×700 패킷은 기존 MCP 뷰와 호환되고, 웹은 `canvas_size`로 화면 전체 뷰포트를 요청합니다.
렌더러는 `@fgv/web/renderer`에서 재사용합니다. 코어 수학은 JavaScript로 다시 구현하지 않습니다.

`@fgv/web/host`의 `set_workspace_host`를 먼저 설정하고 `@fgv/web/workspace`를 불러오면
같은 UI를 MCP 등 다른 계산/파일 호스트에 연결할 수 있습니다. 호스트 미지정 시 기존 WASM 경로입니다.
호스트는 선언 문서/계산 요청/다운로드/복구 저장소/외부 갱신/테마/정리 계약을 제공합니다.
계산과 PNG 미리보기 요청을 구별하고, 실패한 후보가 현재 화면을 바꾸지 않도록 반환해야 합니다.
프로젝트 자체 라이선스는 이 작업에서 새로 지정하지 않았습니다. 배포된 외부 라이브러리 고지는
`THIRD_PARTY_NOTICES.txt`에 포함합니다.
