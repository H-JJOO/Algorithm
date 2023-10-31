노드 4일차

Express

NodeJS 프레임워크

- 라우팅 : (웹서버의 입구) 애플리케이션 엔드 포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식

두개의 argument 1. 어떤 주소(URL), 2. 어떤행동(ACTION)

1.            2.
               ----- --------------------

    app.get('/', function(req, res) {
    res.send('hello world');
    });

2.  어떤행동 Action 은 함수가들어가고 3개의 argument 인 req, res, next 를 받는다. (next 는 옵션, 미들웨어)

req : 프론트엔드에서 오는 데이터

res : 프론트엔드에서 요청한 데이터를 백엔드에서 보내는 응답값

1. npm init -y

2. npm install express

# app.js

const express = require("express"); // Import express
const app = express(); // Create express app

app.get("/", (req, res) => {
// 기본 경로로 접속했을 때
res.send("Hello World!");
});

app.get("/about", (req, res) => {
// /about 경로로 접속했을 때
res.send("This is all about express");
});

app.listen(5000, () => {
// 5000번 포트로 서버를 열었을 때
console.log(`\n║░█░█░║░█░█░█░║░█░█░║
║░█░█░║░█░█░█░║░█░█░║
║░║░║░║░║░║░║░║░║░║░║
╚═╩═╩═╩═╩═╩═╩═╩═╩═╩═╝ ♬ Server listening on port 5000 ♬
`);
});
===

- 미들웨어 : 요청 오브젝트(req), 응답 오브젝트 (res), 그리고 애플리케이션의 요청-응답 주기 중 그 다음의 미들웨어 함수 대한 액세스 권한을 갖는 함수 (중간에서 뭔가 처리)

권한 확인 할때 유용

미들웨어는 반드시 next 가 있어야함, 없으면 응답값을 받지못해서 클라이언트는 무한대기 상태가 된다(주의!).

# app.js

const express = require("express"); // Import express
const app = express(); // Create express app

const token = "abcd";

const checkAuth = (req, res, next) => { // 미들웨어
console.log("Checking authentication");
next();
};

const checkToken = (req, res, next) => { // 미들웨어
if (token) {
next();
} else {
res.send("No token");
}
};

const getUser = (req, res) => {
console.log("Getting user");
res.send("User Info");
};

app.get("/users", checkAuth, checkToken, getUser); // getUser 로 가기전 checkAuth (미들웨어) 를 거친다.

app.listen(5000, () => {
// 5000번 포트로 서버를 열었을 때
console.log(`\n║░█░█░║░█░█░█░║░█░█░║
║░█░█░║░█░█░█░║░█░█░║
║░║░║░║░║░║░║░║░║░║░║
╚═╩═╩═╩═╩═╩═╩═╩═╩═╩═╝ ♬ Server listening on port 5000 ♬
`);
});

===
