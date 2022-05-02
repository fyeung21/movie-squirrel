import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from '../../features/favourites/favouritesSlice';


const MovieCard = ({movie}) => {

  const dispatch = useDispatch();

  return (    
      <article className='movie-card'>
        
        <div>
          { movie.poster_path !== null && 
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster for '${movie.title}'`}/>}

          <div className='desc hover'>
            <p>{movie.overview}</p>
            <Link to={`/movies/${movie.id}`}>More info</Link>
          </div>
        </div>

          <div>
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
              <p>{movie.vote_average}/10</p>
          </div>
          {/* temp html tags but need to keep buttons with onClick, later use toggle heart function */}
          <div className="favourite-btn">
            <button onClick={() => dispatch(addFavourite(movie))}>Add To Favs</button>
            <button onClick={() => dispatch(removeFavourite(movie))}>Remove From Favs</button>
          </div>
      </article>
  )
}

export default MovieCard