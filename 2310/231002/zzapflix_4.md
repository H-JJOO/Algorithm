리엑트 19일차

(reducer 만들기 부터 시작)

(종합) 넷플릭스 jjap_flix

1. API

https://www.themoviedb.org/

2. 프로젝트 생성

3. 라이브러리 다운

-1. 리엑트 부트스트랩, 부트스트랩

npm install react-bootstrap bootstrap

-2. 리엑트 라우터

npm install react-router-dom localforage match-sorter sort-by

-3. 리덕스

npm install redux react-redux

-4. 리덕스 미들웨어 (redux-thunk)

npm install redux-thunk

-5. 리덕스 데브툴 (redux-devtools)

npm install --save redux-devtools-extension

4. 개발 계획 짜기

5-1. 라우터 설정

필요한 page 를 pages 폴더에 만들고 (rafce),

index.js 에서 라우터 설정

<BrowserRouter>
  <App />
</BrowserRouter>

5-2. App.js 에서 라우터 설정

필요한 태그들과 라우터들 import 해줘야함

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/movies" element={<Movies />} />
  <Route path="/movies/:id" element={<MovieDetail />} />
</Routes>

6-1. 리덕스 세팅

index.js 에서 리덕스 세팅

import { Provider } from "react-redux";

<Provider>
<BrowserRouter store={store}>
  <App />
</BrowserRouter>
</Provider>

Provider : store 를 넣어주기 위해 존재

6-2.store 만들어 주기

redux 폴더를 만들고 store.js 를 만든다.

(일단) import { createStore } from "redux"; (추후 업데이트)

6-3. reducer 설정

redux 폴더에서 reducers 폴더 만들기, 안에 index.js 만들기 (combineReducer)

import { combineReducers } from "redux";

export default combineReducers({});

# store.js

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

let store = createStore(
rootReducer,
composeWithDevTools(applyMiddleware(thunk))
);

# export default store;

index.js 에서 사용

---

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

---

7. 네비게이션 바 (모든 페이지 공통)

리엑트 부트스트랩에서 Navbar 참고 (App.js 에 반드시 css import 해야함)

필요한 태그들만 import 해준다.

부트스트랩은 기존 설정에서 벗어나게되면 적용이 안되기때문에, 기존 설정을 벗어날 경우 App.css 에서 직접 디자인 해줘야 한다.

8-1. 홈페이지

웹페이지가 나타나자 마자 데이터를 불러와야하니까!

useEffect() 에서 불러와야한다!

리덕스에서 API 를 처리하려면 리덕스 미들웨어(thunk) 이용해야한다.

redux 폴더 아래에 actions 폴더에 action 할 .js 파일을 만든다.

8-2. Axios

설치

npm install axios

사용법

# GET

import axios from 'axios';
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
.then(function (response) {
// handle success
console.log(response);
})
.catch(function (error) {
// handle error
console.log(error);
})
.finally(function () {
// always executed
});
===

# POST : 데이터 전송

axios.post('/user', {
firstName: 'Fred',
lastName: 'Flintstone'
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
===

Creating an instance (인스턴스 만들기)
사용자 정의 구성을 사용하여 새로운 axios 인스턴스를 생성할 수 있습니다.

===
const instance = axios.create({
baseURL: 'https://some-domain.com/api/',
timeout: 1000,
headers: {'X-Custom-Header': 'foobar'}
});
===

Interceptors

then 또는 catch 에서 처리하기 전에 요청이나 응답을 가로챌 수 있습니다

===
// 요청 인터셉터
axios.interceptors.request.use(function (config) {
// 요청이 전송되기 전에 작업을 수행합니다
return config;
}, function (error) {
// 요청 오류가 있는 작업을 수행합니다 (디버깅 수월)
return Promise.reject(error);
});

// 응답 인터셉터
axios.interceptors.response.use(function (response) { // (받을 response 데이터를 확인 가능)
// 2xx 범위 내에 있는 모든 상태 코드로 인해 이 함수가 트리거됩니다.
// 응답 데이터로 작업을 수행합니다.
return response;
}, function (error) { // (알아서 에러를 프린트)
// 범위를 벗어나는 모든 상태 코드 2xx 중 이 함수가 트리거되도록 합니다
// 응답 오류가 있는 작업을 수행 합니다 .  
 return Promise.reject(error);
});
===

8-3. 환경변수

.env

"API_KEY 왜 안되는거냐 Fxxx"

"ACCESS_TOKEN" 으로 일단 변경

REACT_APP_ACCESS_TOKEN=abcd1234

이런 개인정보는 배포해서는 안되기때문에 .gitignore 에 잘 추가해둔다.

API 문서에 있는대로 하면 데이터 나옴, 단 유효한 KEY, TOKEN 인지 잘 확인할 것!

---

9. Promise : API 여러개 동시에 부르는 방법

API 를 부를때 하나하나 async await 해주면 하나하나 실행하는 동안 대기가 발생한다. 이러면 퍼포먼스가 떨어지때문에, 데이터가 서로 연관성이 없다면 한번의 async await 를 통해서 한번에 데이터를 불러온다.

===
function getMovies() {
return async (dispatch) => {
const popularMoviesApi = api.get(`/movie/popular?language=en-US&page=1`);
const top_ratedApi = api.get(`/movie/top_rated?language=en-US&page=1`);
const upcomingApi = api.get(`/movie/upcoming?language=en-US&page=1`);

    // 동시에 여러개의 api를 호출하고 싶을 때
    let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      popularMoviesApi,
      top_ratedApi,
      upcomingApi,
    ]);
    console.log(popularMovies);
    console.log(topRatedMovies);
    console.log(upcomingMovies);

};
}
=== 10. reducer 만들기

reducers 폴더 안에 movieReducer.js 만들기

# action - dispatch

dispatch({
type: "GET_MOVIES_SUCCESS",
payload: {
popularMovies: popularMovies.data,
topRatedMovies: topRatedMovies.data,
upcomingMovies: upcomingMovies.data,
},
});
===

# reducer

let initalState = {
popularMovies: {},
topRatedMovies: {},
upcomingMovies: {},
};

function movieReducer(state = initalState, action) {
let { type, payload } = action;
switch (type) {
case "GET_MOVIES_SUCCESS":
return {
...state,
popularMovies: payload.popularMovies,
topRatedMovies: payload.topRatedMovies,
upcomingMovies: payload.upcomingMovies,
};
default:
return { ...state };
}
}

# export default movieReducer;

action 에서 dispatch 를 통해 받아온 payload 데이터를 reducer 에서 state 에 담아준다.

reducer 사용준비 완료 --> store 에 전달

reducers 의 index.js 에 combineReducers 에 movieReducer 를 import 해서 store 에 reducer 를 전달한다.

# reducers/index.js

import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

export default combineReducers({
movie: movieReducer,
});
===

home 페이지에서 조건부 랜더링을 활용해서 최초 화면이 나올때 store 에 값이 없기 때문에, 값이 없으면 Banner 를 보여주지 않고 값이 있다면 Banner 를 보여주게 해서 오류를 방지한다.

# Home.js 중

useEffect(() => {
dispatch(movieAction.getMovies());
}, []);
return (
// 조건부 랜더링 : popularMovies.result가 있을 때만 Banner 컴포넌트를 랜더링
<div>
{popularMovies.result && <Banner movie={popularMovies.result[0]} />}
</div>
);
};
===

Banner.js 컴포넌트에는 Home.js 에서 props 로 받아온 값을 매개변수로 준다.

===
import React from "react";

const Banner = ({ movie }) => {
return <div>Banner</div>;
};

# export default Banner;

(231003 배너 만들기 진행)
