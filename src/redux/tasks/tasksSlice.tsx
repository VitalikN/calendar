import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  date: string;
  colors: string[];
}
export interface TasksState {
  tasks: Task[];
  searchText: string;
}

export const initialState: TasksState = {
  tasks: [],
  searchText: "",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const { id, ...updatedTask } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        Object.assign(existingTask, updatedTask);
      }
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { addTask, deleteTask, updateTask, setSearchText } =
  tasksSlice.actions;
export default tasksSlice.reducer;

export const filterTasks = (
  tasks: any[],
  searchText: string,
  selectedColors: string[]
) => {
  return tasks?.filter((task) => {
    const titleMatch = task.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const colorMatch =
      selectedColors.length > 0
        ? task.colors &&
          task.colors.some((color: string) => selectedColors.includes(color))
        : true;
    return titleMatch && colorMatch;
  });
};
