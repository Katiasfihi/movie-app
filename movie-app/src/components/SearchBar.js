import React from 'react'


const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=530c61dca46ff0409bad2510f4edf1ba&query='

function SearchBar({getMovies, search, setSearch}) {


    const getSearch = (e) => {
        e.preventDefault();
        getMovies(SEARCH_API + search)
     }
     

    const typing = (e) => {
        setSearch(e.target.value)
     }

    return (

        <div>
            <form onSubmit={getSearch}>
            <input type='text' placeholder='Search...' className='input' onChange={typing} ></input>
            </form>
        </div>
    )
}

export default SearchBar