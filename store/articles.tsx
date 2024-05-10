import { createSlice } from "@reduxjs/toolkit";
import { Articles } from "@/util/interfaces";

const initialArticles: Articles[] = [];

const initialState = { articles: initialArticles };

const articlesSlice = createSlice({
  initialState: initialState,
  name: "articles",
  reducers: {
    setAllArticles(state, action) {
      const articles: Articles[] = action.payload;
      state.articles = articles;
    },
    getAllArticles(state) {
      state.articles;
    },
  },
});

export default articlesSlice.reducer;
export const articlesActions = articlesSlice.actions;
