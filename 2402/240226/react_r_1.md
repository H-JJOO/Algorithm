리액트 복습 1일차

- 프로젝트 생성
  npx create-react-app first-react

- 프로젝트 열기
  code .

- SPA : Single Page Application
  웹사이트에 페이지 단 하나

- 하나의 태그로 묶어서 반환!

- 리액트 컴포넌트 자동생성
  rafce (React Arrow Functionexport ComponEnt)

- ES7 React-Native snippets 설치

- component (컴포넌트) :
  내가 필요한 태그를 만들어서 쓰는것 (원하는 태그들을 모아서 하나의 태그로) [재활용]
  관련있는 HTML 과 JS 를 함께 둔다

- props : 함수의 매개변수와 같은 역할

- state :

UI 에 보이는 값은 무조건 state 로 만들어야한다.

변수는 re rendder 될 때마다 초기화

state 값은 비 동기적으로 처리된다.

state 가 바뀌면 UI가 다시 렌더링 된다 (비동기)

- string 타입 빼고는 {} 를 사용한다 (string 은 ' ')

- react 는 state 에 반응한다 state 가 변하면 화면 번화

왠만한 값을 다 state 쓰지만 잠깐 담아둬야 하는 값은 변수를 쓴다.
