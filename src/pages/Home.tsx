import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import '../App.css'

import { fetchMovie } from '../store/slices/movieSlices'
import { MoviesList } from '../components/MoviesListComponent'
import { IReducer } from '../interfaces'
import store from '../store/store'

export const Home = () => {

  const globSstate = useSelector((state: IReducer) => state)
  const { movies, errorMessage, loading } = useSelector((state: IReducer) => state.movies);

  const [search, setSearch] = useState("")
  const [movieName, setMovieName] = useState("")

  useEffect(() => {
    if(movieName.length > 0) {
      store.dispatch(fetchMovie(movieName))
      }
    }, [movieName])

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function startSearch (){
    setMovieName(search)
  }

  return (
    <>
      <div className="wrapper">
      <h2><strong>OMDb API Interface</strong></h2>
      {/* <Search/> */}
      <>
        <label htmlFor="movieName">Movie title </label>
        <input type="text" onChange={handleName} name="movieName" placeholder="The Godfather" value={search}/>
        <button onClick={startSearch}>Serch</button>
      </>

      <div className="cards">

        {loading &&
          <span>loading...</span>
        }

        {errorMessage &&
          <span>{errorMessage}</span>
        }

        {!!movies.length &&
            <MoviesList moviesList={movies}/>
        }

        </div>
      </div>
      <div className="wrapper-favorit">
      <MoviesList moviesList={globSstate.favorits.movies}/>
      </div>
    </>
  )
}

