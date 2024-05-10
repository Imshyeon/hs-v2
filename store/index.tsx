import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./schedules";
import profileReducer from "./user";
import articleReducer from "./articles";

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    profile: profileReducer,
    article: articleReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
