import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./schedules";
import profileReducer from "./user";

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    profile: profileReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
