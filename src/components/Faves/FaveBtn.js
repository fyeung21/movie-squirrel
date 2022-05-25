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
