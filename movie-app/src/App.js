
import React, { useEffect, useState } from 'react'
import Movie  from './components/Movie'
import './App.css'


const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=530c61dca46ff0409bad2510f4edf1ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=530c61dca46ff0409bad2510f4edf1ba&query='

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then ((data) => {
        setMovies(data.results)
      })
  }

  const getSearch = (e) => {
    e.preventDefault();
    getMovies(SEARCH_API + search)
    }

  const typing = (e) => {
    setSearch(e.target.value)
}


  return (
      <div>    
          <header className='header'>
          <form onSubmit={getSearch}>
            <input type='text' placeholder='Search...' className='input' onChange={typing} ></input>
            </form>
          </header>   
          <div className='movie-container'>
            {movies.map((movie) => (
          <Movie 
            key={movie.id}           
            {...movie}
          />
         ))}
      </div>
      </div>
  );
}

export default App;
