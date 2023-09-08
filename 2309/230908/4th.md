리엑트 4일차

1. 리엑트 부트스트랩

npm install react-bootstrap bootstrap

2. state 값은 비동기적이기 때문에~

조건부를 걸어 줘야 에러가 나지 않는다.

<div>{weather.name}</div>

↓

<div>{weather && weather.name}</div>

OR

<div>{weather.name}</div>

↓

<div>{weather?.name}</div> // weather 가 참이면 .name 을 보여줘라

3. App (부모) 아래에 weatherInfo, weatherButton 이 자식으로 있는데, react 는 자식이 부모에게 자식과 자식간에는 props를 통한 데이터 전송이 불가능하기 때문에, App 에 모든 state 를 두고 그 App 을 통해서 자식에게 데이터를 전달한다. (함수도 가능)

4. 데이터가 비어있을 경우가 발생할 수 있을 경우, 조건문을 줘서 데이터가 없을경우 출력되는 데이터 및 화면을 구성하고, 데이터가 있을경우 출력되는 데이터 및 화면을 구성해야 에러가 발생하지 않는다.
