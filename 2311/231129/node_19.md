노드 19일차

9-16 상품 검색하기
9-17 페이지네이션

상품 검색

URLSearchParams

: 객체가 쿼리형태로 변경되도록 하는 역할

searchQuery : {page: 1, name: 'hood'}

=>

query : page=1&name=hood

// 검색조건 추가 경우 복잡해 질 수 있음

if (name) {
const products = await Product.find({
name: { $regex: name, $options: "i" },
}); // i = insensitive (소대문자 구분 x)
res.status(200).json({ status: "success", products });
} else {
const products = await Product.find({});
res.status(200).json({ status: "success", products });
}

페이지네이션

skip() : 스킵하고자 하는 데이터를 스킵해줌

limit() : 최대 몇개까지 데이터를 보낼지

query.skip((page - 1) \* 5).limit(5);

3번째 페이지를 보여줘야할 경우 2 \* 5 총 10개의 데이터를 스킵한다

2번째 페이지를 보여줘야할 경우 1 \* 5 총 5개의 데이터를 스킵한다

limit(5) 의 5는 pageSize 를 의미한다.

({}) {} 구분 잘하자!
