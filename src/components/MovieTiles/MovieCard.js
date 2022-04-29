import React from 'react';
// import link 
import { Link } from 'react-router-dom';


function MovieCard({movie}) {
  return (
    <article className='movie-card'>
       { movie.poster_path !== null && 
       <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster for '${movie.title}'`}/>}

        <div>
            <h2>test</h2>
            <p><Link to="/">More info</Link></p>
        </div>
    </article>
  )
}

export default MovieCard