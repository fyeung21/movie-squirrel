import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../globals/globals';
import SingleMovie from '../components/singleMovie/SingleMovie';

const PageMovieSingle = () => {

  // store single movie data here
  const [movieData, setMovieData] = useState(false);

  const {id} = useParams();

  // do query here

  useEffect(() => {
    
     // do query here
     const fetchMovieData = async () =>{
        // store the query here
        const query = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        // store result from query here
        const res = await query.json();

        // store the selected movie into the movie data const
        setMovieData(res);
        console.log(res);
     }

     fetchMovieData();
  },[])
  
    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`${`movies.title`} | Movie Squirrel`}</title>
        </Helmet>
        <div className="pageMovieSingle">
          <h1>single movie page</h1>
          {/* store the single movie data in a prop */}
          <SingleMovie movie={movieData}/>
        </div>
      </>
    );
  }
  
export default PageMovieSingle;