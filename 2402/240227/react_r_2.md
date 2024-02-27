리액트 복습 2일차

- 프로젝트 생성
npx create-react-app ***

- onClick 사용 시 주의할 점

 <button onClick={() => play("scissors")}>가위</button>  
			   -------------------------                            
콜백함수 형태로 함수를 전달해 줘야 바로 실행시키지 않는다.

- UI 를 바뀌가 하고 싶으면 state 에 만든다

- react 로 FE 개발 중 주의할 점

<img className="item-img" src={props.item && props.item.img}></img> 
					       ------------

props.item이 있을 때만 props.item.img를 참조하도록 (가드)

위의 예시 처럼 props.item 이 있을 경우 그러니까 사용자가 선택을 했을 경우에 만 props.item.img 를 불러오도록 해서 선택하지 않았을 경우 발생하는 에러를 사전에 방지해야한다. (가드값!)

- 랜덤한 값 뽑는 함수

const randomChoice = () => {

    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 배열로 만들어주는 함수 [가위, 바위, 보]

    let randomItem = Math.floor(Math.random() * itemArray.length); // Ex) 0.1231 x 3, 0.5323 x 3, 0.8424 x 3  [0, 1, 2]

    let fin = itemArray[randomItem]; [가위 or 바위 or 보]

    return choice[fin];
  };

랜덤한 소숫점 숫자 x 배열의 길이 한 후 floor 함수로 소숫점 뒤자리를 버리면 배열의 index 가 랜덤으로 부여될 수 있다.