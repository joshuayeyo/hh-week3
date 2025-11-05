# Chore(001): Create project refactoring and modularization issue

## 📄 Description

현재 프로젝트에서 많은 파일들이 수정된 상태로 남아있어 과제 시작 전에 체계적인 리팩토링과 모듈화 작업이 필요합니다.
테스트 파일들, 타입 정의, 훅, 모킹 데이터, 설정 파일들을 각각 적절한 커밋으로 분리하여 관리해야 합니다.

## ✅ TODO

- [x] src/**tests**/ 디렉토리 커밋 (테스트 파일들)
- [x] src/types/ 디렉토리 커밋 (타입 정의 모듈화)
- [x] src/hooks/ 디렉토리 커밋 (커스텀 훅 개선)
- [x] CLAUDE.md 설정 파일 커밋
- [x] .claude/ 에이전트 설정 커밋
- [x] markdowns/ 문서화 템플릿 커밋
- [x] src/**mocks**/ 모킹 핸들러 리팩토링 커밋
- [x] .husky/ Git hooks 설정 커밋
- [ ] src/components/ 컴포넌트 파일들 정리
- [ ] src/App.tsx 메인 앱 파일 정리
- [ ] 설정 파일들 정리 (package.json, tsconfig, vite.config 등)
- [ ] 삭제된 src/types.ts 관련 정리

## 🎸 ETC

- 각 커밋은 원자적(atomic)이고 명확한 목적을 가져야 함
- 커밋 메시지는 영문 제목 + 한글 설명 형식 준수
- "Generated with Claude Code" 제거하여 깔끔한 커밋 히스토리 유지
- 체계적인 파일 구조로 향후 개발 효율성 증대
