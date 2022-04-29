import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faFilm, faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const MobileNav = () => {
    return (
      <nav className="mobile-nav">
          <ul>
              <li><NavLink to="/"><FontAwesomeIcon icon={faFilm} /></NavLink></li>
              <li><NavLink to="/favourites"><FontAwesomeIcon icon={faHeart} /></NavLink></li>
              <li><NavLink to="/about"><FontAwesomeIcon icon={faCircleInfo} /></NavLink></li>
              <li><NavLink to="/user"><FontAwesomeIcon icon={faUser} /></NavLink></li>
          </ul>
      </nav>
    );
  }
  
  export default MobileNav;