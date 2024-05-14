import { createSlice } from "@reduxjs/toolkit";

type Status = "success" | "pending" | "failure";

const initialAlert: Status | null = null;

const initialState = { status: initialAlert, message: "" };

const AlertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    setAlertState(state, action) {
      const { status, message } = action.payload;
      state.status = status;
      state.message = message;
    },
  },
});

export const alertActions = AlertSlice.actions;
export default AlertSlice.reducer;
