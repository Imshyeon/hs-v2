import { Schedule } from "@/util/interfaces";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const date = new Date();
const initialSchedules: Schedule[] = [
  {
    _id: "",
    category: "",
    created_date: date.toLocaleDateString(),
    date: {
      start: {
        day: date.getDay(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      },
      end: {
        day: date.getDay(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      },
    },
    hashtags: "",
    isMarked: false,
    place: "",
    slug: "",
    title: "",
    contents: [
      {
        _id: "",
        content_title: "",
        content_place: "",
        content: [
          {
            _id: "",
            detail: "",
            image: "",
            reference: "",
          },
        ],
      },
    ],
  },
];

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
