노드 6일차

git clone

cors 보안 문제 be 프로젝트에 cors 를 npm i cors 해줘야함

app.use(cors());

fe 리엑트 작업

# App.js

import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoBoard from "./components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import api from "./utils/api";

function App() {
const [todoList, setTodoList] = useState([]);
const [todoValue, setTodoValue] = useState("");

// C
const getTasks = async () => {
const response = await api.get("/tasks");
setTodoList(response.data.data);
};

// R
const addTask = async () => {
try {
const response = await api.post("/tasks", {
task: todoValue,
isComplete: false,
});
if (response.status === 200) {
console.log("success");
// 1. 입력한 값 사라지게하기
setTodoValue(""); // 초기화
// 2. 추가한 값 안보임
getTasks(); // 추가한 값 불러오기
} else {
throw new Error("task can not be added");
}
} catch (err) {
console.log("err :>> ", err);
}
};

// D
const deleteItem = async (id) => {
try {
const response = await api.delete(`/tasks/${id}`);
if (response.status === 200) {
getTasks();
}
} catch (err) {
console.log("err : ", err);
}
};

// U
const toggleComplete = async (id) => {
try {
const task = todoList.find((item) => item.\_id === id);
const response = await api.put(`/tasks/${id}`, {
isComplete: !task.isComplete,
});
if (response.status === 200) {
getTasks();
}
} catch (err) {
console.log("err : ", err);
}
};

useEffect(() => {
getTasks();
}, []);

return (
<Container>
<Row className="add-item-row">
<Col xs={12} sm={10}>
<input
type="text"
placeholder="할일을 입력하세요"
className="input-box"
value={todoValue}
onChange={(e) => setTodoValue(e.target.value)}
/>
</Col>
<Col xs={12} sm={2}>
<button className="button-add" onClick={addTask}>
추가
</button>
</Col>
</Row>

      <TodoBoard
        todoList={todoList}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
      />
    </Container>

);
}

export default App;

===

배포 다음에
