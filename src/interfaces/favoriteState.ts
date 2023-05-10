import { IMovie } from "./";

export interface IFavoriteState {
  loading: boolean;
  movies: IMovie[];
  errorMessage: string;
}
