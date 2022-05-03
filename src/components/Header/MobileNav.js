import { NavLink } from 'react-router-dom';
import AboutIcon from '../Icons/AboutIcon';
import HeartFill from '../Icons/HeartFIll';
import FilmIcon from '../Icons/FilmIcon';

const MobileNav = () => {
  return (
    <section className="mobile-nav">
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <FilmIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourites">
              <HeartFill />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <AboutIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MobileNav;
