노드 9일차

권한

1. 로그인 상태 : 로그인페이지 못 들어감
 -0. 로그인상태이면 토큰을 저장 
 -1. 토큰값 읽음
 -2. 토큰이 사용 가능한 토큰인지 확인(토큰 만료X, 토큰 해독시 유저 id 있다 -> BE)
 -2-1. 토큰이 사용 가능하면, 토큰을 바탕으로 유저객체를 보내준다.
 -3. 유저값을 저장
  -4. 유저가 있다면 TODO page 를 보여준다.

2. 로그아웃 상태 : TODO page 못 들어감

리액트 예약어

children : 자식 태그 (리액트에서 지원)



jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new Error("토큰이 유효하지 않습니다.");
      }
      req.user = decoded;
    });


// 미들웨어

비동기 처리 잘하자! async ! await