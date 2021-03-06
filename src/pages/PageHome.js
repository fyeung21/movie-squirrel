import { useState, useEffect } from "react";
import { API_KEY } from "../globals/globals";
import MoviesContainer from "../components/Movies/MoviesContainer";
import SortNav from "../components/SortNav/SortNav";
import { Helmet } from 'react-helmet';


const PageHome = ({ sort }) => {

  // store the 12 tiles here
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

    }
    fetchMovies();

}, [sort])  
    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Movies Home | Movie Squirrel</title>
        </Helmet>
        <section className="pageHome">
          <SortNav />
          {/* movies data is where the information from the query will be stored in the prop */}
          {moviesData !== false && <MoviesContainer moviesData={moviesData}/>}
        </section>
      </>
    );
  }
  
export default PageHome;