리엑트 2일차

1. 프로젝트 생성
   npx create react-app rockpapperscissor

2. 생성한 프로젝트로 이동
   cd rockpapperscissor

3. vsCode 실행
   code .

4. 기본 골조 쓸데없는 내용 지우기
   App.css, index.html (div 아래내용) 등등

5. component 디렉토리 생성 후 필요한 js 생성

6. App.js 에는 골조를, component 에서는 디테일한 값을 지정

과정 중 props 를 사용하여 컴포넌트 간 데이터를 전달

! React 는 UI를 그려줄때 함수를 바로 실행시켜버린다. 자동 실행을 방지하기 위해 콜백함수 형태로 해줘야한다.

Ex.

    <button onClick={play("scissors")}>가위</button>
    <button onClick={play("rock")}>바위</button>
    <button onClick={play("papper")}>보</button>

    		↓

    <button onClick={() => play("scissors")}>가위</button>
    <button onClick={() => play("rock")}>바위</button>
    <button onClick={() => play("papper")}>보</button>

7. UI 를 바뀌게 하려면 state 에 만들어라!

[X] userSelect = choice[userChoice]; //이런식으로 변수다루듯이 하면 안된다!
[O] setUserSelect(choice[userChoice]); // set 함수를 써줘야한다!

8. 처음부터 명확하게 값을 줄 경우 (다이나믹하지 않을 경우) 가드값 (null 로 인한 에러 방지) 이 없어도 괜찮지만,
   처음부터 명확한 값이 없을 경우 가드값이 필요하다.
   Ex. title = "You" 와 같이 명시가 되어있으면 가드값 필요 없음
   item = {userSelect} 와 같이 다이나믹한 경우 (최초 null) 가드값이 필요

가드 값 (props.item)
{props.item && props.item.img}

9. Math.random();
   랜덤값을 뽑는 함수

10. Object.keys()
    객체에 키값만 뽑아서 배열로 만들어주는 함수

11. Math.floor()
    버림 함수

- 가위 바위 보 로직?

user == 컴퓨터 비김

user : 가위 && com : 바위 === user 승
user : 가위 && com : 보 === com 승

user : 바위 && com : 가위 === user 승
user : 바위 && com : 보 === com 승

user : 보 && com : 가위 === com 승
user : 보 && com : 바위 === user 승
