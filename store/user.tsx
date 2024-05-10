import { UserProfileInfos } from "@/util/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserProfileInfos = {
  image: "",
  name: "",
  email: "",
  password: "",
  password_confirm: "",
};

const profileSlice = createSlice({
  initialState: initialState,
  name: "profile",
  reducers: {
    updateUserImage(state, action) {
      const imageURL = action.payload;
      state.image = imageURL;
    },
    updateUserInfos(state, action) {
      const userInfos = action.payload;
      Object.assign(state, userInfos);
    },
  },
});

export default profileSlice.reducer;
export const profileActions = profileSlice.actions;
