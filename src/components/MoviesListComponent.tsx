import React from "react";
import { Movie } from './MovieComponent'
import { IMovie } from "../interfaces";

interface MoviesList {
  moviesList: IMovie[]
}

export const MoviesList: React.FC<MoviesList> = ({ moviesList }) => {
  return (
    <>
      { moviesList.map((movie: IMovie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))
      }
    </>
  );
};

