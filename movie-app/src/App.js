
import React, { useEffect, useState } from 'react'
import Movie  from './components/Movie'
import SearchBar from './components/SearchBar'
import './App.css'


const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=530c61dca46ff0409bad2510f4edf1ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page'


function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('carol')

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

  console.log(search, 'katia')



  return (
      <div>    
          <header className='header'>
          <SearchBar getMovies={getMovies} search={search} setSearch={setSearch}/>
          </header>   
          <div className='movie-container'>
            {movies && movies.map((movie) => (
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
