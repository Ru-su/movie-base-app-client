import { configureStore } from "@reduxjs/toolkit";
import movieReduser from "./slices/movieSlices";
import favoritReducer from "./slices/favoritSlices";

const reducer = {
  reducer: {
    movies: movieReduser,
    favorits: favoritReducer,
  },
};

const store = configureStore(reducer);

export default store;
