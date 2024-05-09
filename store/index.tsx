import { Schedule } from "@/util/interfaces";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const date = new Date();
const initialSchedules: Schedule[] = [];

const initialState = { schedule: initialSchedules };

const scheduleSlice = createSlice({
  initialState: initialState,
  name: "schedule",
  reducers: {
    addMarkedSchedule(state, action) {
      const slug = action.payload;
      const schedule: Schedule = state.schedule.find(
        (schedule) => schedule.slug === slug
      )!;
      schedule.isMarked = !schedule.isMarked;

      fetch(`/api/schedules/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...schedule }),
      });
    },
    setAllSchedules(state, action) {
      const schedules: Schedule[] = action.payload.allSchedules;
      console.log("schedules=>", schedules);
      state.schedule = schedules;
    },
    getAllSchedules(state) {
      state.schedule;
    },
  },
});

const store = configureStore({
  reducer: {
    schedule: scheduleSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const scheduleActions = scheduleSlice.actions;
export default store;
