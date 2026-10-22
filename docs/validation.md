# 검증 기록

## 자동 업데이트, 2026-10-22

0.2.0은 공통 update-manifest 형식과 SHA-256/크기 검증 서비스 워커를 추가했습니다.
실행 중 강제 reload/skipWaiting/clients.claim은 없으며 명시 백업 후 재시작 복구를 제공합니다.
TypeScript strict/production build, 기존 실제 WASM 12/12와 Chrome 전체 18/18 통과입니다.
실제 HTTP 배포 응답을 전환하여 waiting, 열린 탭 유지, 백업/복구, digest/저장 실패를 검사했습니다.
문서/격자/PNG/마우스 등 기존 15개 회귀도 포함합니다.
수학/코어/WASM 바이너리는 변경하지 않았습니다. 실제 배포 확인은 후속 배포 기록과 구별합니다.

### 공개 배포 확인

소스 2e0cf04와 Pages 409e518의 기존 immutable 런타임/해시 자산 URL을 보존했습니다.
공개 CI 39728071788과 Pages 39728287947 성공, 실제 Pages Chrome 회귀 18/18 통과입니다.
새 별도 Chrome에서 SW 제어와 버전0.2.0, 검증 캐시12/12를 확인했습니다.
배포 Git blob의 실제 크기/바이트 해시도 manifest 12개 모두 일치합니다.
기존 탭/사용자 그래프를 강제로 새로고침하지 않았습니다.

## 히스토그램 표시선 제거, 2026-10-21

히스토그램은 C++ 브리지부터 surface 표시선/LOD를 생성하지 않습니다.
PNG 호환 필드는 빈 wireframe이며 WebGL도 삼각형 모서리로 대체하지 않습니다.
빈 결과와 증분 갱신, 2D/3D 모두 같은 계약입니다.
와이어프레임 색상/알파 조작부는 함수/데이터 곡면에만 표시합니다.
불투명 와이어프레임도 반투명 곡면 이후 합성하여 지정 RGB를 유지하고 깊이 검사는 유지합니다.

고정 core 3040d47의 실제 C++/WASM 회귀 10/10, TypeScript strict/production build 통과입니다.
Chrome 실제 픽셀에서 함수/데이터 곡면의 자홍색 표시와 알파 0 제거를 검사했습니다.
히스토그램은 면을 유지하고 표시선 수 0과 색상 조작부 부재를 확인했습니다.
현재 Codex 설치본 갱신을 뜻하지 않습니다.

2026-10-21, core 0.7.0 / 3040d47, Emscripten 4.0.23, CMake 3.31.6,
nlohmann_json 3.12.0, Three.js 0.186.1, TypeScript 5.9.3, Vite 7.3.1

- strict TypeScript와 production build 통과
- Node에서 실제 WASM 테스트 9/9 통과
- Windows Chrome headless에서 전체 예제 9종과 카테고리, 화면 크기, 회전/이동/휠/테마,
  잘못된 문서 실패 시 이전 그래프 보존 테스트 2/2 통과
- 1440×900과 1100×760에서 canvas/label/core viewport 크기 일치 확인
- 실제 PNG를 열어 초기 곡면·무한 격자·축·좌측 겹침 사이드바 확인
- 실제 GitHub Pages 주소에서도 같은 2개 브라우저 검사 통과, 공개 runtime SHA-256 다운로드 확인

브라우저 검증은 독립 headless Chrome이며, 현재 Codex 대화창 인라인 위젯 검증을 뜻하지 않습니다.
웹 테스트는 프레임 도중 갱신을 검사하지만 별도 성능 벤치마크를 대체하지 않습니다.
0.4.4 공통 렌더러의 30fps 검증 기록은 private plugin의 docs/surface-rendering.md를 참조합니다.
모바일 실기기와 macOS 앱 패키지는 이 실행에서 확인하지 않았습니다.

## GV 공통 작업 공간, 2026-10-21

GV main 9a83a0b의 docs/workspace-ui.md와 src/workspace.css를 기준으로 동일한 셸/토큰을 적용했습니다.
core/WASM 수학은 변경하지 않았습니다. desktop 56px/300px/나머지 캔버스와 모바일 48px/오버레이,
ARIA 탭/키보드/Home/End/Escape, 접기/열기, 줌/맞춤, 파일 출력 메뉴를 검사했습니다.
스타일은 90ms 입력 병합과 포커스/기하 보존, 오류 입력의 이전 유효 그래프 보존을 확인했습니다.
연속 슬라이더 입력 16회 중에도 프레임이 갱신되며, 입력 종료까지 기다리는 debounce와 구별합니다.
Pretendard 실제 FontFace 로드, Canvas 라벨 font-family, JSON/수식 고정폭,
폰트 준비 후 PNG 출력의 서명과 캔버스 크기를 검사했습니다.
strict TypeScript/production build와 실제 브라우저 4/4, 기존 WASM 테스트 9/9 통과입니다.
실제 데스크톱/모바일 크기 PNG를 열어 공통 셸과 그래프 표시를 확인했습니다.
현재 Codex 인라인 위젯이나 private plugin/desktop 설치본을 이 변경으로 갱신하지 않았습니다.

## 공통 파일/복구/탐색, 2026-10-21

core/WASM 변경 없이 기존 spec/history 문서 입출력과 브라우저 작업 공간만 확장했습니다.
strict TypeScript/production build, 실제 WASM 10/10과 Chrome 회귀 10/10 통과입니다.
문서 원본 ID/이력 왕복, 잘못된 버전/행/ID·1MiB 초과 거절과 기존 문서 보존,
드롭/새 문서/교체 취소, 복구 선택 전 반복 새로고침/복구/버리기/기록 삭제를 검사했습니다.
저장소 접근 실패 시에도 현재 기하를 유지하고 오류 상태를 표시합니다.
탭 복제 시 Web Locks로 키 충돌을 피하고 다른 탭 기록이 버리기/OFF로 삭제되지 않음을 확인했습니다.
항목은 현재 그래프/원본 행 ID/샘플/셀만 사용하며 100개 페이지와 선택/위치 찾기를 제공합니다.
이 웹 확장은 이번에 별도로 검증한 plugin 0732616/desktop f20624d 고정을 변경하지 않습니다.

## 공통 화면 탐색/이미지 출력/단축키, 2026-10-21

문서 수학/원본 기하/WASM은 유지하며 웹 작업 공간만 추가했습니다.
화면 이전/다음, 선택 항목 맞춤, 이름 있는 세션 북마크와 문서 교체 초기화를 검사합니다.
PNG 배율 출력은 실제 코어 뷰와 임시 GPU 캔버스로 다시 그리며 CSS 크기의 선/글꼴을 보존합니다.
2× PNG 2168×1800의 서명/크기와 배경 알파 0, 선택 크롭, 임시 GL/DOM 회수, 문서 불변을 검사했습니다.
각 변 4096px/전체 32MP 상한은 할당 전에 거절합니다.
Ctrl/Cmd S/O/F와 도움말, 드래그 중 파일 출력/교체 거절도 실제 브라우저로 검사합니다.
불필요한 동일 크기 ResizeObserver 재계산이 조작 보호와 충돌하는 경로도 제거했습니다.

최종 strict TypeScript/production build, 실제 WASM 10/10, Chrome 전체 회귀 13/13 통과입니다.

## 화면 전체 격자/공통 3D 간격, 2026-10-21

고정 core 0f3c8ac의 view/camera/viewport 프레임 API를 사용합니다.
3D 자동 간격을 같은 월드 값으로 해석하고, 화면 밖 데이터 경계에서 격자 후보가 끊기지 않습니다.
2D 종횡비 여백과 넓은 화면, 이동/확대/3D 회전 뒤 코어에서 후보를 다시 생성합니다.
축별 명시 간격/원점 위상/원본 기하와 범위/축 길이를 유지하며 과밀 간격은 거절합니다.
진단 JSON은 실제 grid_spacing/후보 수, 캔버스는 data-grid-lines를 보고합니다.
PNG 배율 요청의 grid_pixel_scale은 같은 화면의 자동 월드 간격을 보존하며 1..3만 허용합니다.

Windows MSVC 19.51 코어 CTest 8/8와 실제 네이티브 요청 12/12,
설치 패키지의 외부 C++ 소비자 실행과 render_demo 빌드가 통과했습니다.
Windows Emscripten 4.0.23/SDK c0bb220/CMake 4.4.3으로 직접 WASM을 빌드했습니다.
Docker에 소스를 연결하지 않았고 SDK는 작업 폴더에만 설치했습니다.
새 .mjs/.wasm에 절대 소스 경로가 없음을 확인하고 해시/빌드 출처를 runtime.lock.json에 기록했습니다.
private 코어 소스는 공개하지 않으며 버전별 산출물 URL을 불변 Git SHA에 고정합니다.

strict TypeScript/production build, 실제 WASM 12/12, Chrome production 회귀 15/15 통과입니다.
실제 2D 픽셀 줄의 간격 오차 1px 이하와 양쪽 화면 끝까지의 채움을 검사했습니다.
1440×900과 1920×600, 이동/휠/크기 변경과 3D 회전도 검사했습니다.
휠 입력 병합 뒤 코어 동기화가 끝나는 실제 픽셀을 기다리며 입력 직후의 임시 카메라와 구별합니다.
기본 3D/회전/2D 종횡비 여백/넓은 화면 PNG를 직접 열어 시각적으로도 확인했습니다.
ES 모듈과 WASM 요청 모두 고정 산출물 SHA의 같은 버전 쿼리를 사용합니다.
기존 탭의 이전 런타임 캐시 재사용을 피하며 실제 브라우저 요청 URL에서도 두 버전의 일치를 검사합니다.
# MCP 호스트 확인창 확장, 2026-10-21

WorkspaceHost.confirm을 선택적으로 제공할 수 있습니다. MCP sandbox에서 브라우저 모달 권한 없이
위젯 내부 확인창을 사용할 수 있으며 기본 웹/데스크톱은 기존 확인 절차를 유지합니다.
호스트 확인 뒤 문서 교체의 유휴 상태를 다시 검사하며 대기 중 도착한 다른 서버 문서를 덮어쓰지 않습니다.
Windows Chrome의 strict TypeScript/production build와 기존 실제 브라우저 15/15가 통과했습니다.

