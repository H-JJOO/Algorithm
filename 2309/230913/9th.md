리엑트 9일차

쇼핑몰 복습

! 라우터 사용하려면 설치해줘야함

npm install react-router-dom@6

! index.js 에서

import { BrowserRouter } from "react-router-dom";

해주고

<BrowserRouter>
    <App />
</BrowserRouter>

해줘야함.

! page 폴더를 만들고 필요한 페이지를 만들어주고,

App.js 에서

import { Routes, Route } from "react-router-dom";

해준다음, Routes 태그 안에 Route 태그로 페이지를 나눈다.

! 공통적으로 필요한 Navigate 만들기

! 리엑트 폰트어썸 쓰기

npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

// 수정하기 위해 필요
npm install --save @fortawesome/free-regular-svg-icons

페이지 구성, 공용 네비게이트까지 완료
