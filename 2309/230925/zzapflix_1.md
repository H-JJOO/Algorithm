리엑트 16일차

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

store.js
===
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
===

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
