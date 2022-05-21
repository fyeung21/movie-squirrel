import { NavLink } from "react-router-dom";
import React from 'react';


const SortNav = () => {
  return (
    <nav>
        <select>
            <option>
                <NavLink to="/sort/popular">Popular</NavLink>
            </option>
            <option>
                <NavLink to="/sort/top-rated">Top Rated</NavLink>
            </option>
            <option>
                <NavLink to="/sort/upcoming">Upcoming</NavLink>
            </option>
            <option>
                <NavLink to="/sort/now-playing">Now Playing</NavLink>
            </option>
        
        </select>
    </nav>
  )
}

export default SortNav