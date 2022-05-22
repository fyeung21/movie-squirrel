import React from 'react';
import { Link } from 'react-router-dom';
import FaveBtn from '../Faves/FaveBtn';

const MovieCard = ({ movie }) => {
  // this cuts the description so that it isnt too long in the card divs!
  const desc = movie.overview.substring(0, 200) + ' ...';

  // this converts the rating from a x/10 to a percentage :)
  const rating = Math.round((movie.vote_average / 10) * 100);

  // convert the date here
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // raw release date
  const rDate = new Date(movie.release_date);
  // convert it to the mm/dd/yyyy
  const releaseDate = months[rDate.getMonth()] + ' ' + rDate.getDate() + ', ' + rDate.getFullYear();

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
        <Link to ={`/movies/${movie.id}`}>
          <h2>{movie.title}</h2>
          <p>{releaseDate}</p>
          <p>{!movie.vote_average ? 'N/A' : rating + '%'}</p>
        </Link>
        <FaveBtn movie={movie} />
      </div>
    </article>
  );
};

export default MovieCard;
