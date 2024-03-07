import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  date: string;
}
export interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const { id, ...updatedTask } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        Object.assign(existingTask, updatedTask);
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
