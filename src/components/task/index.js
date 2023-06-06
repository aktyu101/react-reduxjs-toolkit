import { addTask, deleteTask } from "../../store/task/taskSlice";
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

    // const payload = {
    //   todo: value,
    //   createAt: dayjs().format("yyyy-M-D HH:mm:ss"),
    // };
    // console.log("submit payload", payload, dayjs);

    dispatch(
      addTask({
        todo: value,
        createdAt: dayjs().format("YYYY-M-D HH:mm:ss"),
      })
    );
  };

  const handleClickDelete = (id) => {
    console.log("deleteid", id);
    if (window.confirm("삭제 하시겠습니까?")) {
      dispatch(deleteTask(id));
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
        <SubBtn onClick={handleClickSubmit}>추가</SubBtn>
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
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
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
`;
const SubBtn = styled.button`
  height: 45px;
`;
const ListItemTime = styled.div`
  display: flex;
  gap: 0 5px;
  align-times: center;
`;
