import React from 'react';
// import link 
import { Link } from 'react-router-dom';


function MovieCard() {
  return (
    <article className='movie-card'>
        <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg"} alt="no poster available"/>

        <div>
            <h2>test</h2>
            <p><Link to="/">More info</Link></p>
        </div>
    </article>
  )
}

export default MovieCard