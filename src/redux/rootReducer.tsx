import { combineReducers } from "@reduxjs/toolkit";
import colorReducer from "./color/colorSlice";
import tasksReducer from "./tasks/tasksSlice";

const rootReducer = combineReducers({
  color: colorReducer,
  tasks: tasksReducer,
});

export default rootReducer;
