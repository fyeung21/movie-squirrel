import { Link } from 'react-router-dom';
import FaveBtn from '../Faves/FaveBtn';
import { addFavourite, removeFavourite } from '../../features/favourites/favouritesSlice';
import { useDispatch } from 'react-redux';

const MovieCard = ({ movie, isFavourite }) => {
  // this cuts the description so that it isnt too long in the card divs!
  const shortDesc = movie.overview.substring(0, 200) + ' ...';

  // this converts the rating from a x/10 to a percentage :)
  const rating = Math.round((movie.vote_average / 10) * 100);

  const dispatch = useDispatch();

  const handleFaveClick = (addToFave, obj) => {
    if (addToFave === true) {
          dispatch(addFavourite(obj));
    } else {
          dispatch(removeFavourite(obj));
    }
  }
  
  // convert the date here
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // raw release date
  const rDate = new Date(movie.release_date);
  // convert it to the mm/dd/yyyy
  const releaseDate = months[rDate.getMonth()] + ' ' + rDate.getDate() + ', ' + rDate.getFullYear();


  return (
    <article className="movie-card">
      <div className="img-container">
        {movie.poster_path !== null && (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={`Poster for '${movie.title}'`}
          />
        )}

        <article className="hover-card">
            <p>{movie.overview.length > 200 ? shortDesc : movie.overview}</p>
            <div className="more-info">
              <Link to={`/movies/${movie.id}`}>More info</Link>
            </div>
        </article>
      </div>

      <div className="titles">
        <h2>{movie.title}</h2>
        <p>{releaseDate}</p>
        <p>{!movie.vote_average ? 'N/A' : rating + '%'}</p>
        <article>
          { isFavourite ?
            <FaveBtn movie={movie} isFav={true} handleFaveClick={handleFaveClick}/>
            :
            <FaveBtn movie={movie} isFav={false} handleFaveClick={handleFaveClick}/>
          }
        </article>
      </div>
    </article>
  );
};

export default MovieCard;
