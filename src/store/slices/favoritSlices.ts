import { IFavoriteState } from "../../interfaces";
import { createSlice } from "@reduxjs/toolkit";

const localFavoriteList = localStorage.getItem("favoritList");

const initialState: IFavoriteState = {
  loading: false,
  movies: localFavoriteList ? JSON.parse(localFavoriteList) : [],
  errorMessage: "",
};

const favoritSlice = createSlice({
  name: "favorit",
  initialState,
  reducers: {
    addFavorit: (state, action) => {
      state.movies.push(action.payload);
      localStorage.setItem("favoritList", JSON.stringify(state.movies));
    },
    removeFavorit: (state, action) => {
      state.movies = state.movies?.filter(
        (item) => item.imdbID !== action.payload.imdbID
      );
      localStorage.setItem("favoritList", JSON.stringify(state.movies));
    },
  },
});

export default favoritSlice.reducer;
export const { addFavorit, removeFavorit } = favoritSlice.actions;
