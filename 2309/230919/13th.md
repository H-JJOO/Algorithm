리엑트 7일차

=== 6일차 이어서

- Container 태그

: react bootstrap 의 기술로 유저가 보기 편하게 가운데 모아서 보여주는 기능이다.

- Form 태그는 서버에 데이터를 넘겨주는 역할을 하는데, 이때 onClick 기능을 쓰고 싶다면, Form 태그에서 onSubmit 속성을 사용해야한다.

일단 지금 당장 submit 버튼을 누르고 새로고침 될 필요 없기 대문에 그 기능을 막아둔다.

    event.preventDefault();

- App.js 에서 로그인 버튼을 누르면 useState(false) 를 true 로 바꿔주려면 로그인 버튼을 클릭했을 때 값을 바꿀수 있어야하는데 그걸위해선, Login.js 에서 App.js 의 setAuthenticate 함수를 써야하는데, 이때 방법은, props 로 보내버리면 된다.

<Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
----------------------------------------- 요런식으로

- 상품 클릭시, 로그인 되어있으면 디테일 창으로, 아니면 로그인 창으로

App.js 에서 suthenticate 를 props 로 PrivateRoute.js 로 넘겨주고, 받은 authenticate 가 ture 이면 상세상품 이지로, false 면 Login 페이지로 리다이렉트 해준다 (Navigate)

const PrivateRoute = ({ authenticate }) => {
return authenticate ? <ProductDetail /> : <Navigate to="/login" />;
};

- 템프럴 리터럴 : 동적인 값을 넣기위해 사용하는 문법 `${}`

- 주소창 리터럴값을 받아오기 위한 리엑트 함수 : useParams

let {id} = useParams();
let url = `http://localhost:5000/products/${id}`;

받은 id 값을 이용해서 db 데이터를 받아오고 fetch 하고 json 화 해서 데이터를 넘겨준다. 넘겨준 데이터를 state 에 저장한다.

- 검색기능

= onKeyPress : 키를 입력했을때 이벤트 발생

<input placeholder="제품검색" onKeyDown={(event) => search(event)} />

적용하고자하는 위치의 태그에서 onKeyDown 속성값을 사용하는데, 특정 키를 설정하기위해서 (event) 매개변수를 준다.

엔터를 쳤을때 반응하는 함수

const search = (event) => {
if (event.key === "Enter") {
console.log("click this key :", event.key);
}
};

const search = (event) => {
// 읽어 오고자하는 값이 event 에 있다.
let keyword = event.target.value;
console.log("keyword : ", keyword);

입력한 값을 읽어옴

if (event.key === "Enter") {
// 입력한 검색어를 읽어와서
let keyword = event.target.value;
// url 을 바꿔준다.
navigate(`/?q=${keyword}`);
}

===
http://localhost:3000/?q=와이드
===
라고 url 이 바뀐다.

= url 에 있는 쿼리값 읽어오는 방법 : useSearchParams

import { useSearchParams } from "react-router-dom";

const [query, setQuery] = useSearchParams();

= query 값이 변경될 때마다, 프로젝트 시작하고 딱 한번만 실행되던 함수를 재실행시켜준다.
useEffect(() => { // 프로젝트 시작하고 딱 한번만 실행
getProducts();
}, []);

useEffect(() => {
getProducts();
}, [query]); // query 값이 변경될 때마다 실행

json-server 에서 제공해주는 기능! ㅠㅠ url 에서 q 하고 쿼리를 보내주면 알아서 검색 해준다.
알고리즘은 json-server 가 알아서 해준단다...

- 배포!

my json server

1. 깃허브에 레파지토리 만들기.
2. db.json 만들기 (이미 완료)
3. url 주소 바꿔주기
   https://my-json-server.typicode.com/<your-username>/<your-repo> + 기존 local... 빼고 /뒷부분

4. 1번 작업 - Git 작업

1) 깃 초기화
   git init

2) 모든 깃 파일 보내기
   git add .

3) 커밋 메세지
   git commit -m "firstcommit"

4) 깃허브와 프로젝트 연결
   git remote add origin https://github.com/H-JJOO/noona-hnm.git

5) 보내기
   git push -u origin master

여기까지하면 db 를 my json server 가 사용할 수 있게 해준 상태

이제 배포

Netlify (유틉 내용 공부)

Build command 에서 살짝 수정

## CI=false npm run build
