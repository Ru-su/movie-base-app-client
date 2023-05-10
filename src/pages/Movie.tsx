import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IReducer } from "../interfaces";
import { useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";


export const Movie = () => {
  
  const globSstate = useSelector((state: IReducer) => state)
  const { id } = useParams()
  const navigate = useNavigate();

  const movies = [...globSstate.favorits.movies, ...globSstate.movies.movies]
  const movie = movies.find(item => item.imdbID === id)

  useEffect(() => {
    if(!movie) {
      navigate('/', { replace: true });
    }
  })
  
  return (
    <>
      <div>
        <Link to={'/'}><AiOutlineArrowLeft size="3rem"/></Link>
      </div>
      <h1>{movie!.Title}</h1>
      <img 
        src={movie!.Poster}
        alt={`The movie titled: ${movie!.Title}`}
      />
      <p className="read-the-docs">
        {movie!.Plot}
      </p>
    </>
  );
};


  
