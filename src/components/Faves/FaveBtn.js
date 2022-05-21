import HeartEmpty from '../Icons/HeartEmpty';
import HeartFill from '../Icons/HeartFIll';
import { addFavourite, removeFavourite } from '../../features/favourites/favouritesSlice';


const FaveBtn = ({ movie, handleFaveClick, toggle }) => {

  // const dispatch = useDispatch();

  const handleAddFave = () => {
    handleFaveClick(true, movie);
  }

  const handleRemoveFave = () => {
    handleFaveClick(false, movie);
  }

  return (
    <div className="fave-btn">
      {/* TODO: insert toggle function if statement */}
      {/* <button onClick={() => dispatch(addFavourite(movie))}><HeartEmpty/></button>
      <button onClick={() => dispatch(removeFavourite(movie))}><HeartFill/></button> */}
      { toggle === false ?
        <button onClick={handleRemoveFave}><HeartFill/></button>
        :
        <button onClick={handleAddFave}><HeartEmpty/></button>
      }
    </div>
  );
};

FaveBtn.defaultProps = {
  remove: false
}

export default FaveBtn;
