import { useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from '../../features/favourites/favouritesSlice';

const FaveBtn = ({ movie }) => {
    
  const dispatch = useDispatch();

  return (
    <div className="fave-btn">
      {/* TODO: insert toggle function if statement */}
      <button onClick={() => dispatch(addFavourite(movie))}>Add To Favs</button>
      <button onClick={() => dispatch(removeFavourite(movie))}>Remove From Favs</button>
    </div>
  );
};

export default FaveBtn;
