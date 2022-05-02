import React from 'react';
// add the place holder no movieposter here
import noPoster from '../../images/no-movie-poster.jpg';

function SingleMovie({movie}) {
  return (
    <section>
    <div className='single-movie-poster'>
    {movie.poster_path !== null ?
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster for ${movie.title}`}/> : 
        <img src={noPoster} alt="no poster uwu"/>}
    </div>

    <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
    </div>
    </section>
  )
}

export default SingleMovie