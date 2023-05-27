import { createSlice } from "@reduxjs/toolkit"; //
const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = push({ ...action.payload, id: state.tasks.length + 1 });
    },
    deleteTask: (state) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

//할일 추가, 삭제
