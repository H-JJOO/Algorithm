노드 8일차

1. 회원가입
2. 로그인
3. 유저 권한확인 (TODO page 는 로그인한 유저만 들어갈 수 있다)
4. 내가 이미 로그인한 유저라면 추가 로그인 없이 바로 메인페이지로 돌아가기

// 1. 회원가입
// 유저가 이메일, 패스워드, 유저이름 입력해서 보냄
// 받은 정보를 저장 (DB 모델 필요)
// 패스워드를 암호화 시켜서 저장

// 1. 라우터 만들기
// 2. 모델 만들기
// 3. 데이터 저장 (이미 가입된 유저 유무, 패스워드 암호화)
// 4. 응답 보내기

패스워드 암호화!

- bcrypt

1. 설치
   npm install bcrypt

// 암호화 함수
const hashPassword = await bcrypt.hash(password, saltRounds);

// 2. 로그인
// 유저가 이메일, 패스워드 입력해서 보냄
// 받은 정보로 DB에서 유저 찾기
// 없으면 로그인 실패
// 있으면 패스워드 비교해서 로그인 성공/실패
// 로그인 성공하면 토큰 생성해서 보내기 + 유저 정보 보내기

// -1. 라우터 만들기
// -2. 이메일 패스워드 정보 읽어오기
// -3. 이메일로 유저 찾기
// -4. 패스워드 비교
// -5. 맞으면 토큰 발행
// -6. 틀리면 에러메세지
// -7. 응답으로 유저정보 + 토큰 보내기

- bcrypt

// 비교하는 함수
const isMatch = await bcrypt.compare(password, user.password);

// 토큰 발행 라이브러리 jwt (JsonWebToken)

1. 설치
   npm install jsonwebtoken

const jwt = require("jsonwebtoken");

const token = jwt.sign({ \_id: this.\_id }, JWT_SECRET_KEY, (expiresIn = "1d"));
------------------------ ! token 유효기간

! user 정보 필요한 것 만 보여주기

// 해당 데이터만
const { email, password, name } = req.body;
const user = await User.findOne({ email }, "-createdAt -updatedAt -\_\_v", {
sort: { createdAt: -1 },
});

// 모든 데이터
userSchema.methods.toJSON = function () {
const obj = this.\_doc;
delete obj.password;
return obj;
};

- 토큰 세션에 넣기

sessionStorage.setItem("token", response.data.token);

- 토큰을 header 에 넣기

api.defaults.headers.common["Authorization"] = "Bearer" + response.data.token;
