노드 10일차

작성자 정보 같이 task 에 저장!

Task
\_id
task
isComplete
author (ref : User, \_id)

User
\_id
name
email
password

// 1. 테이블(컬렉션)의 컬럼을 추가한다 author
// 1-2. 현재 로그인한 유저가 누구인지 로그인 유저정보를 알아야한다.

// 2. 할일 생성시 author 값을 추가한다.

// 3. FE 작성자 이름 함께 보여준다.

[join 효과]

BE 에서 \_id 값을 다른 값으로 바꿔주는 함수

const taskList = await Task.find({}).populate("author");

.populate("author")

https://mongoosejs.com/docs/populate.html

lets you reference documents in other collections.(다른 컬렉션의 문서를 참조할 수 있습니다.
)

=> join 효과

로그아웃은 그냥 sessionStroage 에 저장되어있는 token 값을 없애주면 된다.
