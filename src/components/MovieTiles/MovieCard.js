import React from 'react';
import { Link } from 'react-router-dom';
import FaveBtn from '../Faves/FaveBtn';

const MovieCard = ({ movie }) => {
  // this cuts the description so that it isnt too long in the card divs!
  const desc = movie.overview.substring(0, 200) + ' ...';

  // this converts the rating from a x/10 to a percentage :)
  const rating = Math.round((movie.vote_average / 10) * 100);

  return (
    <article className="movie-card">
      <div>
        {movie.poster_path !== null && (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={`Poster for '${movie.title}'`}
          />
        )}

        <div className="desc hover">
          <p>{movie.overview.length > 200 ? desc : movie.overview}</p>
          <Link to={`/movies/${movie.id}`}>More info</Link>
        </div>
      </div>

      <div className="titles">
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>{!movie.vote_average ? 'N/A' : rating + '%'}</p>
        <FaveBtn movie={movie} />
      </div>
    </article>
  );
};

export default MovieCard;
