import { addTask, deleteTask, allDeleteTask } from "../../store/task/taskSlice";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { useState } from "react";
import dayjs from "dayjs";

export default function Task() {
  const [todo, setTodo] = useState("");
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleChangeTodo = (event) => {
    setTodo(event.target.value);
  };
  //추가
  const handleClickSubmit = () => {
    const value = todo.trim();
    if (!value) {
      alert("입력된 정보가 없습니다.");
      return;
    }
    dispatch(
      addTask({
        todo: value,
        createdAt: dayjs().format("YYYY-M-D HH:mm:ss"),
      })
    );
    setTodo("");
  };
  //삭제
  const handleClickDelete = (id) => {
    console.log("deleteid", id);
    if (window.confirm("삭제 하시겠습니까?")) {
      dispatch(deleteTask(id));
    }
  };

  //전체삭제
  const handleClickAllDelete = () => {
    if (window.confirm("전체 리스트를 삭제 하시겠습니까?")) {
      dispatch(allDeleteTask(tasks));
    }
  };

  return (
    <Container>
      <WrapInput>
        <Input
          type="text"
          value={todo}
          placeholder="할 일을 입력하세요."
          onChange={handleChangeTodo}
        />
        <SubmitBtn onClick={handleClickSubmit}>추가</SubmitBtn>
      </WrapInput>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <span>{task.todo}</span>
            <ListItemTime>
              <span>{task.createdAt}</span>
              {task.id && (
                <button onClick={() => handleClickDelete(task.id)}>삭제</button>
              )}
            </ListItemTime>
          </ListItem>
        ))}
      </List>
      <WrapEventBtn>
        <AllDeleteBtn
          onClick={() => {
            handleClickAllDelete();
          }}
        >
          전체삭제
        </AllDeleteBtn>
      </WrapEventBtn>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 5px;
`;
const ListItem = styled.li`
  display: flex;
  height: 45px;
  border: solid 1px #eee;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
`;
const WrapInput = styled.div`
  display: flex;
  gap: 5px;
`;
const Input = styled.input`
  outline: none;
  width: 100%;
  text-indent: 10px;
`;
const SubmitBtn = styled.button`
  height: 45px;
  width: 10%;
  color: #fff;
  background-color: #222;
`;
const ListItemTime = styled.div`
  display: flex;
  gap: 0 5px;
  align-times: center;
`;
const WrapEventBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const AllDeleteBtn = styled.button`
  color: #222;
  background-color: #fff;
  border: solid 1px #222;
  height: 45px;
  box-sizing: border-box;
  padding: 0 10px;
  float: right;
`;
