import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
      <nav className="nav">
          <ul>
              <li><NavLink to="/">home</NavLink></li>
              <li><NavLink to="/favourites">favourites</NavLink></li>
              <li><NavLink to="/about">about</NavLink></li>
          </ul>
      </nav>
    );
  }
  
  export default Nav;