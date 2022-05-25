import HeartEmpty from '../Icons/HeartEmpty';
import HeartFill from '../Icons/HeartFIll';

const FaveBtn = ({ movie, handleFaveClick, isFave }) => {


  const handleAddFave = () => {
    handleFaveClick(true, movie);
  }

  const handleRemoveFave = () => {
    handleFaveClick(false, movie);
  }

  return (
    <div className="fave-btn">
      { isFave === true ?
        <div title="Remove from favourites">
          <button onClick={handleRemoveFave}><HeartFill/></button>
        </div>
        :
        <div title="Add to favourites">
          <button onClick={handleAddFave}><HeartEmpty/></button>
        </div>
      }
    </div>
  );
};

FaveBtn.defaultProps = {
  remove: false
}

export default FaveBtn;
