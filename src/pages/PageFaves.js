import { Helmet } from 'react-helmet';
import FavesContainer from '../components/Faves/FavesContainer';
import MovieCard from '../components/MovieTiles/MovieCard';

const PageFaves = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favourites | Movie Squirrel</title>
      </Helmet>
      <section className='faves-page'>
      <h2>favourites</h2>
        <FavesContainer />
      </section>
    </>
  );
};

export default PageFaves;
