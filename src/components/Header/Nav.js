import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
      <div className="nav">
          <ul>
              <li><NavLink to="/">home</NavLink></li>
              <li><NavLink to="/favourites">favourites</NavLink></li>
              <li><NavLink to="/about">about</NavLink></li>
              <li><NavLink to="/user">user</NavLink></li>
          </ul>
      </div>
    );
  }
  
  export default Nav;