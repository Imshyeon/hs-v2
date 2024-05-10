import { Schedule } from "@/util/interfaces";
import { createSlice } from "@reduxjs/toolkit";

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
      state.schedule = schedules;
    },
    getAllSchedules(state) {
      state.schedule;
    },
  },
});

export default scheduleSlice.reducer;
export const scheduleActions = scheduleSlice.actions;
