노드 13일차

쇼핑몰 3일차

9-5 회원가입

======================================

0. 구성 파악

=== 고객 페이지 ===

- 회원가입

- 로그인 (이메일, 구글)

- 쇼핑몰 랜딩 페이지 (검색, 로그아웃, 쇼핑백, 나의 주문 버튼)

- 상품 디테일 페이지

- 카트에 아이템 추가

- 장바구니 페이지 (아이템 개수 수정, 아이템 삭제)

- 결제 페이지 (상품의 재고가 부족하면 결제가 안됨)

- 예약 완료 페이지 (예약 번호)

- 나의 주문 페이지

=== 고객 페이지 ===

=== 관리자 페이지 ===

= 상품정보 리스트 페이지

- 상품 추가기능

- 상품 검색

- 상품 수정

- 상품 삭제

- 페이지네이션

= 주문 페이지

- 주문 디테일 확인 가능

- 주무 상태 수정 가능

- 주문번호로 검색 가능

=== 관리자 페이지 ===

1. 데이터베이스 디자인

2. 기본 설정

# npm init -y

# npm i express mongoose dotenv body-parser cors jsonwebtoken bcryptjs nodemon

- app.js 작업

기본 세팅 완료

===

9-1 ~ 9-3

TODO db 9-4 스키마 세팅 ~

- User

email: { type: String, required: true, unique: true },
password: { type: String, require: true },
name: { type: String, require: true },
level: { type: String, default: "customer" }, // 2types : customer, admin

- Product

sku: { type: String, required: true, unique: true },
name: { type: String, required: true },
image: { type: String, required: true },
category: { type: Array, required: true },
description: { type: String, required: true },
price: { type: Number, required: true },
stock: { type: Object, required: true },
status: { type: String, default: "active" },
isDeleted: { type: Boolean, default: false },

- Order

userId: { type: mongoose.ObjectId, ref: User },
status: { type: String, default: "pending" }, // 3types : pending, paid, shipped
shipTo: { type: Object, required: true },
contact: { type: Object, required: true },
items: [
{
productId: { type: mongoose.ObjectId, ref: "Product" },
size: { type: Number, required: true },
price: { type: Number, required: true },
qty: { type: Number, default: 1, required: true },
},
],

- Cart

userId: { type: mongoose.ObjectId, ref: User },
items: [
{
productId: { type: mongoose.ObjectId, ref: "Product" },
size: { type: String, required: true },
qty: { type: Number, default: 1, required: true },
},
],

===

TODO 회원가입, 9-5

- router

의존성이 낮은 순서대로 작업하는 것이 좋다.

User, Product => Cart ...

index.js 작업 후 추후 필요한 user.api.js 나 product.api.js 등을 작업한다.

app.js 에서 라우터를 가져온다

const indexRouter = require("./router/index")

user.api.js 에서 필요한 userContorller.createUser 작업 (계정 생성 코드, bcrypt)

Tommrow TODO 9-7
