import React from 'react';
// add the place holder no movieposter here
import noPoster from '../../images/no-movie-poster.jpg';
// import buttons here !
import FaveBtn from '../Faves/FaveBtn';

const MovieSingle = ({movie}) => {

  // store the last item in a variable
  const lastItem = movie.genres[movie.genres.length - 1];

  return (
    <section className='single-movie-style'>
    <div className='single-movie-poster'>
    {movie.poster_path !== null ?
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster for ${movie.title}`}/> : 
        <img src={noPoster} alt="no poster uwu"/>}
    </div>

    <div className='single-movie-text'>
        <h1>{movie.title}</h1>
        <FaveBtn movie={movie}/>
        <p>{movie.vote_average}/10</p>
        <p>{movie.overview}</p>
        <p>{movie.runtime} minutes</p>
         {/* if there are multiple genres, output using this loop */}
         <h2>{movie.genres.length > 1 ? 'Genres' : 'Genre' }</h2>
        <p>{movie.genres.map(genre =>  <span key={genre.id}>{ genre.id === lastItem.id ? genre.name : genre.name + ', '}</span>)}</p>
    </div>
    </section>
  )
}

export default MovieSingle