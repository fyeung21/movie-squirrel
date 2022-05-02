import { useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from '../../features/favourites/favouritesSlice';
import HeartFill from '../Icons/HeartFIll';

const FaveBtn = ({ movie }) => {
    
  const dispatch = useDispatch();

  return (
    <div className="fave-btn">
      {/* TODO: insert toggle function if statement */}
      <button onClick={() => dispatch(addFavourite(movie))}>add to fave</button>
      <button onClick={() => dispatch(removeFavourite(movie))}><HeartFill/></button>
    </div>
  );
};

export default FaveBtn;
