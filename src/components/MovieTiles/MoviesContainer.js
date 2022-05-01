import React from 'react';
import MovieCard from './MovieCard';

const MoviesContainer = ( {moviesData}) => {
  return (
    <div className='movies-container'>
      {moviesData.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
  )
}

export default MoviesContainer