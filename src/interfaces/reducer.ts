import { IFavoriteState, IMovieState } from "./";

export interface IReducer {
  movies: IMovieState;
  favorits: IFavoriteState;
}
