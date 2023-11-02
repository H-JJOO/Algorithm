노드 5일차

할일앱

restful API : API 주소를 정하는 패턴의 이름 중 하나

주소 + http 명령어


1. 할일 추가하기 C /tasks post
2. 할일 리스트 가져오기 R /tasks get
3. 할일 끝남 안끝남 표시 하기 U /tasks/:id put
4. 할일 삭제하기 D / tasks/:id delete

BE
1. 기본세팅 : npm세팅, express, mongoose, app 리스너
2. 라우터 주소 정의
3. 데이터베이스 스키마 정의
4. 기능 정의 (CRUD)
5. 테스트 : 포스트맨

FE
1. 깃 클론 (UI)
2. 기능만들기 : CRUD
3. 테스트


1. npm 설치
# npm init -y

2. express, mongoose 설치
# npm i express mongoose

3. body-parser 설치
# npm i body-parser

! body-parser

: body 의 json 형태의 데이터를 읽기 쉽게 object 형태로 바로 바꿔주는 역할

1. 기본세팅
===
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const mongoURI = "mongodb://localhost:27017/yourdb";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB connection fail", err));

app.listen(5000, () => {
  console.log(`\n║░█░█░║░█░█░█░║░█░█░║
║░█░█░║░█░█░█░║░█░█░║
║░║░║░║░║░║░║░║░║░║░║
╚═╩═╩═╩═╩═╩═╩═╩═╩═╩═╝ ♬ Server listening on port 5000 ♬
`);
});

===

2. 라우터 주소 정의

app.js
===
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

const app = express();
app.use(bodyParser.json()); // json 형태의 데이터를 받기 위해 사용
app.use("/api", indexRouter); // /api로 시작하는 요청은 indexRouter로 처리하겠다는 의미

const mongoURI = "mongodb://127.0.0.1:27017/yourdb";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB connection fail", err));

app.listen(5000, () => {
  console.log(`\n║░█░█░║░█░█░█░║░█░█░║
║░█░█░║░█░█░█░║░█░█░║
║░║░║░║░║░║░║░║░║░║░║
╚═╩═╩═╩═╩═╩═╩═╩═╩═╩═╝ ♬ Server listening on port 5000 ♬
`);
});

===

index.js
===
const express = require("express");
const router = express.Router();
const taskApi = require("./task.api");

router.use("/tasks", taskApi); // /task로 시작하는 요청은 taskApi로 처리하겠다는 의미

module.exports = router; // 이 파일을 모듈로 만들어서 내보내겠다는 의미
===

task.api.js
===
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // TODO 쓰기
  res.send("create task");
});

router.get("/", (req, res) => {
  // TODO 읽기
  res.send("get all tasks");
});

router.put("/:id", (req, res) => {
  // TODO 수정
  res.send("update task");
});

router.delete("/:id", (req, res) => {
  // TODO 삭제
  res.send("delete task");
});

module.exports = router; // 이 파일을 모듈로 만들어서 내보내겠다는 의미
===

3. 데이터베이스 스키마 정의

Task.js
===
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String, required: true },
  isCompleate: { type: Boolean, required: true },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
===

4. 기능 정의

task.controller.js
===
const Task = require("../model/Task");

const taskContoroller = {};

taskContoroller.createTask = async (req, res) => {
  // TODO 추가
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });
    await newTask.save();
    res.status(200).json({ status: "ok", data: newTask });
  } catch (err) {
    res.status(400).json({ status: "fail", err: err.message });
  }
};

taskContoroller.getTasks = async (req, res) => {
  // TODO 목록 조회
  try {
    const taskList = await Task.find().select("-__v");
    res.status(200).json({ status: "ok", data: taskList });
  } catch (err) {
    res.status(400).json({ status: "fail", err: err.message });
  }
};

taskContoroller.updateTask = async (req, res) => {
  // TODO 수정
  try {
    const { id } = req.params;
    const { task, isComplete } = req.body;
    const updateTask = await Task.findByIdAndUpdate(
      id,
      { task, isComplete },
      { new: true }
    );
    res.status(200).json({ status: "ok", data: updateTask });
  } catch (err) {
    res.status(400).json({ status: "fail", err: err.message });
  }
};

taskContoroller.deleteTask = async (req, res) => {
  // TODO 삭제
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.status(400).json({ status: "fail", err: err.message });
  }
};

module.exports = taskContoroller;

===




