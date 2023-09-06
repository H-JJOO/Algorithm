1. 리엑트 1일차

npx cretae-react-app
// 리엑트를 시작하는데 필요한 패키지들을 불러온다.

Ex. // npx create-react-app first-react
'first-react ' 리엑트 파일을 만든다

이후

cd first-react // 'first-react'로 이동

code . // 현재 위치한 곧의 파일을 vsCode 로 연다

2. 리엑트란?

- SPA : Single Page Application
  // 리엑트는 html 파일이 index.html 단 하나로 작동한다.

- src 디렉토리 안에 있는 index.js 가 index.html 과 App.js 를 연결해준다.

- App.js 에서 작업을 한다.

- rafce : 태그화 (컴포넌트)

- props : properties 의 줄임말, 컴포넌트 간에 데이터를 전달하는 방법이다.

- state :

react 의 이름이 왜 react (반응) 이냐면, 말 그대로 반응하기 때문이다! state ! 에 state 가 변하면 UI 가 업데이트 된다.

state 작업은 비용이 많이 발생하기 때문에 비동기로 작동한다.
변수는 코스트 발생이 없기때문에 동기적으로 바로 적용되지만, state 는 비동기로 작동하기때문에, 함수가 끝나면 적용된다.

대부분의 경우에 state 를 사용하고,
잠깐동안 사용할 경우 일반 변수를 사용한다.
