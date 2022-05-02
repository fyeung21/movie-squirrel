import React from 'react';
import { Link } from 'react-router-dom';
import FaveBtn from '../Faves/FaveBtn';


const MovieCard = ({movie}) => {

  return (    
      <article className='movie-card'>
        
        <div>
          { movie.poster_path !== null && 
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster for '${movie.title}'`}/>}

          <div className='desc hover'>
            <p>{movie.overview}</p>
            <Link to="/">More info</Link>
          </div>
        </div>

          <div>
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
              <p>{movie.vote_average}/10</p>
          </div>
          <FaveBtn movie={movie} />
      </article>
  )
}

export default MovieCard