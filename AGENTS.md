# 후속 작업

- README.md와 docs/validation.md, native/bridge.cpp의 입력 계약부터 확인
- public 저장소, private 코어 소스/인증/빌드 디버그 정보 업로드 금지
- core.lock.json의 고정 커밋과 runtime.lock.json의 SHA-256 보존
- 수학/집계/기하/테마/투영은 실제 fgv::core 호출, JS 수학 재구현 금지
- 원본 샘플/ID/범위와 표시 LOD 분리, 결측 구간 연결 금지
- 캔버스는 전체 화면, 왼쪽 이동/오른쪽 회전/휠 확대, 닫기 버튼 없음
- 격자는 무한 직선, 축 길이는 범위와 독립, 축 라벨은 축 RGBA 사용
- 새 TypeScript 함수/콜백에 매개변수/반환 타입, strict 검사 유지
- C++23, 한국어 주석, 탭 들여쓰기, 긴 괄호 호출은 Allman 형태
- runtime tests와 실제 브라우저 조작 검증, 정적 이미지와 조작 UI 구별
- npm 잠금 파일 유지, node_modules/dist/런타임 생성물은 소스 브랜치에 추적 금지
- gh-pages 브랜치는 검증된 배포 산출물 전용, source/private core 포함 금지
- 새 라이선스/force push/계정 설정 변경 금지, 사용자 지정 공개 웹 배포만 승인 범위
