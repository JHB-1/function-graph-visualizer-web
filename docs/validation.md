# 검증 기록

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
