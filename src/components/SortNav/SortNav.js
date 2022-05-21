import { NavLink } from "react-router-dom";

import React, { useState } from 'react'

const SortNav = ({setSort}) => {

    const [selectedValue, setSelectedValue] = useState('popular');

    const handleOption = (e) => {
        setSelectedValue(e.target.value);
        setSort(selectedValue);
        console.log(selectedValue)
    }

  return (
    // <nav>
    //     <ul>
    //         <li>
    //             <NavLink to="/sort/popular">Popular</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/sort/top-rated">Top Rated</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/sort/upcoming">Upcoming</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/sort/now-playing">Now Playing</NavLink>
    //         </li>
    //     </ul>
    // </nav>

    <select onChange={handleOption} value={selectedValue}>
        <option value="popular">popular</option>
        <option value="top-rated">top rated</option>
        <option value="upcoming">upcoming</option>
        <option value="now-playing">now playing</option>
    </select>
  )
}

export default SortNav