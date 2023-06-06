import { createSlice } from "@reduxjs/toolkit"; //

const initialState = {
  tasks: [
    {
      todo: "할 일을 입력해주세요",
      createdAt: "2023-06-06 00:00:00",
    },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, id: state.tasks.length + 1 });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    allDeletTask: (state, action) => {},
  },
});

export const { addTask, deleteTask, allDeleteTask } = taskSlice.actions;
export default taskSlice.reducer;

//할일 추가, 삭제
