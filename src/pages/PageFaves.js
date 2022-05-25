import { Helmet } from 'react-helmet';
import FavesContainer from '../components/Faves/FavesContainer';

const PageFaves = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favourites | Movie Squirrel</title>
      </Helmet>
      <section className='faves-page'>
      <h1 className='favourites-title'>favourites</h1>
        <FavesContainer />
      </section>
    </>
  );
};

export default PageFaves;
