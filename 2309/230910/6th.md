리엑트 6일차

라우터를 이용한 쇼핑몰 만들기

1. cmd 에서 위치 지정하고 프로젝트 생성

npx create-react-app 프로젝트 이름

2. 프로젝트 위치로 이동 후 vsCode 열기

code .

3. 필요없는 기본 세팅 지우기

4. 프로젝트 스텝바이 스텝 적어보기

5. 리엑트 라우터 설치

npm install react-router-dom@6

6. index.js 에서 BrowerRouter import 하기

import { BrowerRouter } from "react-router-dom";

7. App 태그를 BrowerRouter 태그로 감싸기

<BrowerRouter>
    <App />
</BrowerRouter>

8. App.js 에서 {Routes, Route} 를 import 해준다.

import { Routes, Route } from "react-router-dom";

9. App.js return 안에서 작업

<div>
  <Routes>
    <Route path="/" element={<ProductAll />} />
    <Route path="/login" element={<Login />} />
    <Route path="/product/:id" element={<ProductDetail />} />
  </Routes>
</div>

10. src 디렉토리에 page 디렉토리 만들기

필요한 페이지 rafce 해서 양식 만들기

11. 네비게이션 바 만들기

1) react-fontawesome 사용하기

npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

설치

2. 폰트 수정 하기위해 필요한 설치

npm install --save @fortawesome/free-regular-svg-icons

<FontAwesomeIcon icon={faUser} />
<FontAwesomeIcon icon={faSearch} />

이런식으로 쓴다...

===

클라이언트와 서버 통신 (json-server 패키지)

1. 다운
   npm install -g json-server

1-1. 어디서 작동하는지 포트번호를 알려주는 명령어 (포트번호 지정 해 줘야함)
json-server --watch db.json --port 3004

2. json-server 시작 명령어
   json-server --watch db.json

===

3. 메인 페이지 카드 불러오기 및 디자인

리엑트 부트스트랩 사용

<Container/> : 아이템이 가운데로 모이게 해줌

ProductAll.js 에서

const [productList, setProductList] = useState([]);
const getProducts = async () => {
let url = `http://localhost:5000/products`;
let response = await fetch(url);
let data = await response.json();
setProductList(data);

데이터를 받고

받은 데이터를 map 으로 반복해서 있는 개수만큼 뿌려준다.

    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>

====6일차 종료 7.From 과 Submit 부터 7일차 시작
