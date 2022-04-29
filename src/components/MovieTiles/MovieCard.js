import React from 'react';
// import link 
import { Link } from 'react-router-dom';


function MovieCard({movie}) {
  return (    
      <article className='movie-card'>
        <div>
          <div className='desc hover'>
            <p>{movie.overview}</p>
            <Link to="/">More info</Link>
          </div>

          { movie.poster_path !== null && 
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster for '${movie.title}'`}/>}
        </div>

          <div>
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
              <p>{movie.vote_average}/10</p>
          </div>
      </article>
  )
}

export default MovieCard