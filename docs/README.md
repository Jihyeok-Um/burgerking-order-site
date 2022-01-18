### 리팩터링 요구사항
- [ ] 여러 개의 클래스를 분리한 후 서로 관계를 맺어 하나의 프로그램을 완성
- [ ] `import`문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다
- [ ] 하드코딩한 값들 상수로 변경
- [ ] 전역공간을 사용하지 않도록 변경
- [ ] 하나의 함수를 하나의 기능만을 하는 작은 단위로 구현 (15줄 이내)
- [ ] 중복된 코드 제거
- [ ] 불필요한 변수, 임시변수들을 제거
- [ ] 비즈니스 로직과 UI로직을 분리
- [ ] 기존 `CSS`로만 다뤘던 이벤트 `JavaScript`활용해서 다루기

### 구현 기능 코드 리팩터링 
- [ ] `Home`화면에서 화면을 드래그하면 섹션이 위 아래로 드래그 되는 기능
- [X] `header`와 `menuTree`의 상태를 toggle하는 기능
- [X] `resize`이벤트 발생 시, 화면사이즈에 맞게 배경사진 사이즈 바꿔주는 기능
    - 존재 가치를 모르겠어서 기능 제거함.
- [X] `새로고침`이벤트 발생 시, 섹션 페이지가 1번 페이지로 드래그 되는 기능