import { IMovieState } from "../../interfaces";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const URL = import.meta.env.VITE_OMDB_URL;
const KEY = import.meta.env.VITE_OMDB_API_KEY;

const initialState: IMovieState = {
  loading: false,
  movies: [],
  errorMessage: "",
};

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

export const fetchMovie = createAsyncThunk(
  "movies/fetchMovie",
  async (inp: string, { rejectWithValue }) => {
    try {
      const resp = await axios.get(URL, { params: { apikey: KEY, t: inp } });
      if (resp.data?.Error) {
        throw resp;
      }
      return resp.data;
    } catch (err: any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw new Error(err.data.Error);
      }
      return rejectWithValue(error.response);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action: any) => {
      state.loading = false;
      state.movies[0] = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(fetchMovie.rejected, (state, action: any) => {
      state.loading = false;
      state.movies = [];
      state.errorMessage = action.error.message;
    });
  },
});

export default movieSlice.reducer;
