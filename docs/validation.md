# 검증 기록

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
