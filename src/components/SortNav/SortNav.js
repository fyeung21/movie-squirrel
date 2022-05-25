import { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";

const SortNav = () => {

    const [selectedValue, setSelectedValue] = useState('popular');

    const navigate = useNavigate();

    const handleOption = (e) => {
        setSelectedValue(e.target.value);
        navigate(`/sort/${e.target.value}`);
    }

  return (
    <>
      <nav className=''>
          <ul>
              <li>
                  <NavLink to="/sort/popular">popular</NavLink>
              </li>
              <li>
                  <NavLink to="/sort/now-playing">now playing</NavLink>
              </li>
              <li>
                  <NavLink to="/sort/upcoming">upcoming</NavLink>
              </li>
              <li>
                  <NavLink to="/sort/top-rated">top rated</NavLink>
              </li>
          </ul>
      </nav>

      <select onChange={handleOption} value={selectedValue}>
          <option value="popular">popular</option>
          <option value="now-playing">now playing</option>
          <option value="upcoming">upcoming</option>
          <option value="top-rated">top rated</option>
      </select>
    </>
  )
}

export default SortNav