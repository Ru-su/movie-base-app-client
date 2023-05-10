import { IMovie } from "./movie";

export interface IMovieState {
  loading: boolean;
  movies: IMovie[];
  errorMessage: string;
}
