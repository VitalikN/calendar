import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { calendarApi } from "./calendar/calendarApi";
import tasksReducer from "./tasks/tasksSlice";
import colorReducer from "./color/colorSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["tasks"],
};
const persistedReducer = persistReducer(persistConfig, tasksReducer);

const rootReducer = combineReducers({
  color: colorReducer,
  tasks: persistedReducer,
  [calendarApi.reducerPath]: calendarApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(calendarApi.middleware),
});

export const persistor = persistStore(store);

export default store;
