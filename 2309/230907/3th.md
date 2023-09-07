리엑트 3일차

1. 클래스 컴포넌트

App() 이나, 다른 컴포넌트는 function 컴포넌트 이다.

클래스로도 컴포넌트를 만들 수 있다. (조금 복잡)

펑션 컴포넌트보다 클래스 컴포넌트가 더 복잡하지만 더 많이 쓰인다. 이유는

첫번째, 많은 개발 문서들이 클래스 컴포넌트로 작성되어있다.
두번째, 리엑트에서 제공하는 lifecycle function 이라는게 있는데 class 컴포넌트에서 동작이 된다. (19년도 부터는 function 컴포넌트에서도 가능)

그래도 클래스 컴포넌트를 알아야 코드를 읽을 수 있으니까! 알아보자아아~

기존의 App.js 가 아닌 AppClass.js 를 만들고 작업해야하는데, 이때 index.html 에 App 을 AppClass 로 바꿔줘야한다.

function 컴포넌트와 class 컴포넌트의 차이점은 음... 일단 코드 생성 단축키가 다르다.

function = rafce
import React from 'react'

const test = () => {
return (
<div>test</div>
)
}

export default test

class = rcc
import React, { Component } from 'react'

export default class test extends Component {
render() {
return (
<div>test</div>
)
}
}

class 컴포넌트는 생성자(constructor)를 만들고 거기에 super(props), this.state 를 해서 this.state 오브젝트를 만들고 그 안에 변수를 만든다.

마찬가지로 기능함수를 만들 수 있는데, 이때 작업하고 있는 현재 클래스 위치를 나타내는 this 가 필수적이다.
return 하는 태그 쪽에서도 this 로 지정을 해 줘야한다. (왜? 그냥 그렇다고 알아두자, 공식!)

class 컴포넌트는 무조건 this 로 시작한다.

constructor 라는 생성자를 통해 컴포넌트를 생성할 때 state도 같이 생성한다.
setState 함수를 통해 값을 변경한다.

함수를 부르거나 state 를 부를때는 this. 가 항상 붙는다. props 를 만들 때도 반드시 this. 가 붙는다.

2. 라이프 사이클 (lifecycle)

- class 컴포넌트 버전 -

Mounting (컴포넌트가 시작될때)
Updating (state가 업데이트되고 UI 업데이트 될때)
Unmounting (컴포넌트가 종료될때)

constructor (첫번째로 실행되는 lifecycle 함수) 컴포넌트가 실행될 때 먼저 호출하고 들어간다.
-> 앱이 실행되자 마자 해줘야 하는 작업들을 넣는다.

getDrivedStateFromProps (state와 props를 동기화시켜주는 함수)

shoudComponentUpdate (컴포넌트가 render 를 할지말지 결정하는 함수)

render (UI 그려주는 함수)

--DOM 업데이트--

componentDidMount (UI 세팅이 완료되면 알려줌)

componentDidUpdate (컴포넌트 업데이트 이후 호출, 초기 렌더링 이후 렌더링에서만 작동, state가 업데이트 되었는지 알려줌)
-> 최신 업데이트된 state 값을 받아볼 수 있음

componentWillUnmount (컴포넌트 마운트가 해제되어 제거되기 직전에 호출, 컴포넌트 해제 전에 필요한 정리 작업들을 수행)

!!! 해야하는 작업들 !!!

constructor : state 를 만든다.
render : UI를 그린다.
componentDidMount : Api 호출 작업을 한다.
componentDidUpdate : 최신 업데이트된 값(state)을 가지고 하는 작업을 한다.
componentWillUnmount : 컴포넌트 종료 전 알고 싶을 때 사용한다.

**_ 자바스크립트랑 HTML 이랑 섞어서 작업하고 싶으면 {안에서 자바스크립트} _**

- function 컴포넌트 버전 -

useEffect : react hook (리엑트에서 유용한 함수) lifecycle 역할 해줌

매개변수를 두개받는다(콜백 함수, 배열)

useEffect(() => {}, [])

componentDidMount 역할 수행 (Api 호출 작업)

useEffect(() => {}, [state 값1, state 값2]) // 배열에 입력한 state 값을 주시하고 업데이트되면 값을 알려준다. 배열이니까, 여러개 넣을 수 있음, 배열의 값 중 하나라도 state 값이 변하면 useEffect 가 호출된다. 단, 한번만!

독립시킬 수 도 있음!

useEffect(() => {}, [state 값1] // state 값1 이 업데이트 되면 실행

useEffect(() => {}, [state 값2] // state 값2 가 업데이트 되면 실행

componentDidUpdate 역할 수행 (최신 업데이트 된 state 로 작업)

!정리

useEffect(() => {}, []); 에서
배열안에 아무것도 없으면 componentDidMount 역할
배열안에 값이 있으면 componentDidUpdate 역할
