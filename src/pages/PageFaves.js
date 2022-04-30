import { Helmet } from 'react-helmet';
import MovieCard from '../components/MovieTiles/MovieCard';



const PageFaves = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favourites | Movie Squirrel</title>
      </Helmet>
      <h2>favourites page</h2>
      <section className="faves-page">
        {/* <MovieCard moviesData={moviesData}/>
        <MovieCard moviesData={moviesData}/>
        <MovieCard moviesData={moviesData}/>
        <MovieCard moviesData={moviesData}/>
        <MovieCard moviesData={moviesData}/> */}
      </section>
    </>
  );
};

export default PageFaves;