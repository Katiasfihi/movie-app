import React from 'react'



const IMG_API= 'https://image.tmdb.org/t/p/w1280'
//'https://api.themoviedb.org/3/configuration?api_key=530c61dca46ff0409bad2510f4edf1ba'

const Movie = ({title, poster_path, overview, vote_average}) => {

    const ranking = (vote) => {
        if (vote >= 7.5) {
            return 'green'
        } else if (vote < 7.5 ) {
            return 'orange'
        } else {
            return 'red'
        } }
    

    return (
    <div className='movie'>      
        <img src={IMG_API + poster_path} alt={title} />
        <div className='movie-info'> 
            <h3>{title}</h3>
            <div className={`tag ${ranking(vote_average)}`}>{vote_average}</div>
        </div>
        <div className='movie-overview'>
            <h2>Overview</h2>
            <div>{overview}</div>
        </div>
    </div>
    )
}

export default Movie