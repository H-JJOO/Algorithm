노드 2일차

DB

- 관계형 데이터 베이스

id 를 부여하고 다른 id 를 가져와서 관계를 부여한다.

- primary key (pk) 주키, 유니크, 모든 데이터

데이터를 특정하기 위해서 반드시 필요함!

- foreign key (fk) 외래키

- 정규화 (Normalization)

= 테이블 간에 중복된 데이터를 허용하지 않는다!
= 중복된 데이터를 허용하지 않음으로써 무결성을 유지할 수 있으며, DB의 저장 용량을 줄일 수 있다.

= 제1 정규화 (하나의 값)

테이블의 컬럼이 원자값(Atomic Value, 하나의 값)을 갖도록 테이블을 분해하는 것

= 제2 정규화 (기본키의 부분집합이 결장자가 되어서는 안됨)

제1 정규화를 진행한 테이블에 대해 완전 함수 종속을 만족하도록 테이블을 분해하는 것

? 완전 함수 종속 : 기본키의 부분집합이 결정자가 되어서는 안된다는 것

= 제3 정규화 (이행적 종속시 테이블 분해)

제 2정규화를 진행한 테이블에 대해 이행적 종속을 없애도록 테이블을 분해하는 것

? 이행적 종속 : A -> B, B - > C 가 성립할 때 A - > C 가 성립되는 것

? 이행적 종속을 제거하는 이유 : 이행적 종속이 성립이 될경우 B 의 값을 변경 할 경우 C 의 값도 변경해 줘야하지만, 이행적 종속이 성립이 안되게 A -> B A -> C 테이블 두개로 나누개 된다면 A 의 B 값만 변경하면 기존에 두번 데이터를 수정해야할 번거로움을 들이지 않아도 된다.

! 즉, A 를 통해서 B 를 참조하고, B 가 C를 참조하도록 테이블을 분해해야한다.

= BCNF 정규화

제3 정규화를 진행한 테이블에 대해 모든 결정자가 후보키가 되도록 테이블을 분해하는 것

- SQL : 무결성이 가장 중요 | 데이터가 굉장히 일정하고, 쉽게 예측 가능 | 테이블 구조를 바꾸는게 어려움, 데이터를 읽어오기 어려움 (여러개의 테이블을 봐야함)

- noSQL : 데이터를 읽어오는게 쉬움 | 테이블 구조 바꾸는게 쉬움 | 데이터 무결성이 깨짐, 예측 어려운 데이터 있을 수 있음

몽고DB(몽구스), Express, React, NodeJS 이렇게 보통 유명한 스텍

- mongodb 세팅

1. 폴더 생성 후 code . 해서 vs 열기

2. npm 다운
   npm init -y

3. mongodb 다운
   npm install mongodb

4. app.js 만들고 세팅

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(uri);

async function run() {
const database = client.db("firstDB");
const users = database.collection("users");

}
run();

※ MongoDB CRUD

1. 단일 추가 (insertOne)
   const userData = await users.insertOne({ name: "hj", age: 30 });
   console.log("userData : ", userData);

2. 다중 추가 (insertMany)
   const userList = [
   { name: "ym", age: 29 },
   { name: "ym2", age: 30 },
   ];
   const useListResult = await users.insertMany(userList);
   console.log("useListResult : ", useListResult);

3. 특정 데이터 조회 (findOne)
   const findUser = await users.findOne({ name: "ym" });
   console.log("findUser : ", findUser);

4. 특정 조건 데이터 조회 (find)
   const findUserList = await users.find({ age: { $gt: 29 } }).toArray();
   console.log("findUserList : ", findUserList);

5. 데이터 수정 (updateOne)
   const updateResult = await users.updateOne(
   { name: "hj" },
   { $set: { age: 31 } }
   );
   console.log("updateResult : ", updateResult);

6. 단일 데이터 삭제 (deleteOne)
   const deleteResult = await users.deleteOne({ name: "ym2" });
   console.log("deleteResult : ", deleteResult);

7. 다중 데이터 삭제 (deleteMany)
   const deleteResult = await users.deleteMany({ age: { $eq: 29 } });
   console.log("deleteResult : ", deleteResult);

8. 특정 데이터만 조회 (projection)
   const userData = await users
   .find({ name: "hj" })
   .project({ \_id: 0 })
   .toArray();
   console.log("userData : ", userData);

===

3-4 문제 풀기

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(uri);

async function run() {
const database = client.db("firstDB");
const homework = database.collection("homework");

// 문제1. inserttOne

// const userData = await homework.insertOne({
// item: "canvas",
// qty: 100,
// tags: ["cotton"],
// size: {
// h: 28,
// w: 35.5,
// uom: "canvas",
// qty: 100,
// tags: ["cotton"],
// size: { h: 28, w: 35.5, uom: "cm" },
// },
// });

// 문제2. insertMany

// const userList = [
// {
// item: "journal",
// qty: 25,
// tags: ["blank", "red"],
// size: { h: 14, w: 21, uom: "cm" },
// },
// {
// item: "mat",
// qty: 85,
// tags: ["gray"],
// size: { h: 27.9, w: 35.5, uom: "cm" },
// },
// {
// item: "mousepad",
// qty: 25,
// tags: ["gel", "blue"],
// size: { h: 19, w: 22.85, uom: "cm" },
// },
// ];

// const userListResult = await homework.insertMany(userList);
// console.log("userListResult : ", userListResult);

// 문제3. find

// userList 에 저장된 모든 데이터를 읽어오자

// const userList = await homework.find({}).toArray();
// console.log("userList : ", userList);

// 문제 4.userList 중 qty 가 25 인 데이터를 찾아라

// const userData = await homework
// .find({ qty: { $eq: 25 } })
// .project({ \_id: 0 })
// .toArray();

// console.log("userData : ", userData);

// 문제 5. 쿼리 $in 사용

// qty 가 25 또는 85 인 데이터를 찾아라

// const userData = await homework.find({ qty: { $in: [25, 85] } }).toArray();
// console.log("userData : ", userData);

// 문제 6. 쿼리 $lt 사용

// const userData = await homework.find({ qty: { $lt: 30 } }).toArray();
// console.log("userData : ", userData);

// 문제 7. 쿼리 $or 사용

// const userData = await homework.find({ $or: [{ qty: 25 }, { qty: 85 }] });
// console.log("userData : ", userData);
}

run();
