import { Helmet } from 'react-helmet';
import { API_KEY } from "../globals/globals";
import FavesContainer from '../components/Faves/FavesContainer';
import MovieCard from '../components/MovieTiles/MovieCard';
import { useState, useEffect } from "react";

const PageFaves = ({sort}) => {




    const [moviesData, setMoviesData] = useState(false);


    useEffect(()=> {
      const fetchMovies = async () => {
        // make a php-esque query here
          const query = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
          // res is the result
          const res = await query.json();
          
          // get the first 12 movies here, then set them as the data
          const firstTwelve = res.results.splice(0, 12);
          setMoviesData(firstTwelve);
  
          // console.log(res);
      }
      fetchMovies();
  

}, [sort])  

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favourites | Movie Squirrel</title>
      </Helmet>
      <section className='faves-page'>
      <h2 className='favourites-title'>favourites</h2>
        <FavesContainer />
      </section>
    </>
  );
};

export default PageFaves;
