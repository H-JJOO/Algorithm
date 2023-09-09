리엑트 5일차

1. 라우터

react router

음... 일단 지금 공식페이지랑 강의 내용이랑 다른데, 강의 내용으로 간다

react 는 index 페이지 하나로만 이루어져있다. 때문에 여러 페이지를 만들기위해서는 react-router 기능을 사용해야한다.

react-router 사용 방법!

1. npm install react-router-dom@6
   // 설치

2. index.js 에서 {BrowerRouter} 를 import 한다.

3. <App/> 태그를 <BrowerRouter> 태그로 감싼다. (Router 기능 부여)

  <BrowserRouter>
    <App />
  </BrowserRouter>

4. App.js 에서 {Routes, Route} 를 import 해준다.

5. <Routes> 태그 안에 설정할 페이지를 <Route> 태그로 값을 입력해준다. path 는 url 주소 경로, element 는 page 이름이다.

<Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<Aboutpage />} />
</Routes>

6. Link : <a> 태그와 비슷한데, 라우터간에 이동할 수 있게 도와주는 태그이다.

사용하기 위해서는 사용하고자하는 page.js 에서 {Link} 를 import 해주고, <Link to=""> 형식으로 사용한다.
to 에는 이동하고자 하는 page를 입력한다.

- 버튼에 사용하기 위해서는 리엑트에 있는 기능인 (react-hook) useNavigate 가 있다.

사용하고자하는 js 파일에서 {useNavigate} 를 import 해준다.

그리고~

const navigate = useNavigate();
const goToHomepage = () => {
navigate("/");
};

---

      <button onClick={goToHomepage}></button>

---

요런식으로 사용해 준다.

이처럼 이동하는 방법으로는 Link 와 useNavigate 두가지 방법이 있는데,

어떤 함수안에서 써야한다면 useNavigate 를 사용하고,
함수호출 할 거 없이 바로 이동하면 되면 Link 를 사용한다.

7. 상품 품목

RESTful Routes (URL 디자인 패턴)

HTTP Verb :
GET - 지금까지 한 tetch 해서 데이터 가져올때 쓰는 명령어
POST - 새로운 게시물 생성할때 사용
PUT - 기존 데이터를 수정할때 사용
DELETE - 기존 데이터를 삭제할때 사용

쇼핑몰 기준 상품목록을 url 로 표현할때 RESTful Routes 디자인 패턴을 사용해서
/products/:id
이런 식으로 파라미터 값 (가변적) 을 활용한 url 주소를 작성한다.

- url 에 파라미터 값을 읽어오는 방법

react-hook 의 {useParams} 를 활용한다.

{useParams} 를 import 해준다음 const params = useParams(); 이런식으로 정의해준다.

- url 에서 ? 뒤, 즉 쿼리값을 읽어오는 방법

{useSearchParams} 를 improt 해준다.

===
react-hook 의 {useNavigate} 를 활용하는데, 이동할 페이지 뒤에 쿼리값을 "페이지?키값=벨류값" 이런식으로 주면,
url 주소에 쿼리값이 key, value 값이 찍힌다. (이때 ? 뒤 쿼리 값은 url 경로에 영향을 미치지 않는다. 선택적 정보)
/값/값 이런식으 파라미터 값은 url 경로에 영향을 미친다.
===

let [query, setQuery] = useSearchParams();
console.log('query.get("q") : ', query.get("q"));

이런식으로 쓰고, url 주소에 쿼리값을 입력해주면 쿼리값을 출력한다.

http://localhost:3000/products?q=skrit&page=3 이 경우

console.log('query.get("q") : ', query.get("q")); // skrit 출력

console.log('query.get("page") : ', query.get("page")); // 3 출력

- redirect

const [authenticate, setAuthenticate] = useState(false); // 로그아웃 상태
이런식으로 로그인 여부를 판단하는 state 를 만들어 주고

PrivateRoute 컴포넌트에서 authenticate 가 true 이면 UserPage 를 false 면 loginPage 로 리다이렉트 해준다.

이때 Navigate 라는 컴포넌트를 사용해서 리다이렉트 하게 도와준다.

import { Routes, Route, Navigate } from "react-router-dom";

const PrivateRoute = () => {
return authenticate ? <UserPage /> : <Navigate to="/login" />;
};

useState(false) // 로그아웃상태
이면 login 페이지로 리다이렉트

useState(true) // 로그인상태
이면 user 페이지로 이동
