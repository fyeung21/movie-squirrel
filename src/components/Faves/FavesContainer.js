import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFaves } from '../../features/favourites/favouritesSlice';
import MovieCard from '../MovieTiles/MovieCard';

const FavesContainer = () => {
  // TO DO: see how redux plays into this, maybe has to do with app auto refresh when user removes a fave.
  // const faves = useSelector((state) => state.faves.value);
  // Get faves Array from local storage
  const faves = getFaves();
  console.log(faves);

  // If faves array has items, map out individual movies
  return (
    <div className="faves-container">
      {faves.length < 1 ? (
        <p>
          Your movie stash is empty! Go back to <Link to="/">home</Link> to start adding to your
          stash!
        </p>
      ) : (
        <section>
          <p>You have {faves.length} favourites!</p>
          <div className="faves-grid">
            {faves.map((singleFave) => (
              <MovieCard key={singleFave.id} movie={singleFave} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default FavesContainer;