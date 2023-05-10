import React, { useState } from "react";
import { IMovie } from "../interfaces/movie";
import { useSelector } from 'react-redux'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IconContext } from "react-icons";


import store from '../store/store'
import { addFavorit, removeFavorit } from '../store/slices/favoritSlices'
import { IReducer } from "../interfaces";
import { Link } from "react-router-dom";
import { Button } from '@mantine/core';

interface Movie {
  movie: IMovie,
}

export const Movie: React.FC<Movie> = ({ movie }) => {
  const stateFavorits = useSelector((state: IReducer) => state.favorits.movies)
  const isFavorit = stateFavorits.some( (item: IMovie) => item.imdbID === movie.imdbID)

  const [favorit, setFavorit] = useState(isFavorit)

  function handleFavorit() {
    if(favorit) {
      store.dispatch(removeFavorit(movie))
    } else {
      store.dispatch(addFavorit(movie))
    }
    setFavorit((favorit: boolean) => !favorit)
  }

  return (
    <figure className="card">
      <div className="poster">
        <img 
          src={movie.Poster}
          alt={`The movie titled: ${movie.Title}`}
        >
        </img>
        <span
          className="favorit">
          <IconContext.Provider value={{size: '2rem', color: '#e91e63'}} >
            {favorit ? <AiFillHeart onClick={handleFavorit}/> : <AiOutlineHeart onClick={handleFavorit}/>}
          </IconContext.Provider>
        </span>
      </div>
      <Link to={`/movies/${movie.imdbID}`}><Button>{movie.Title}</Button></Link>
    </figure> 
  );
};