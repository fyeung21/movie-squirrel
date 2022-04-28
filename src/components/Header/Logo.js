import { NavLink } from 'react-router-dom';

const Logo = ({title}) => {
    return (
      <div className="logo">
            <h1><NavLink to="/">{title}</NavLink></h1>
      </div>
    );
  }
  
  export default Logo;