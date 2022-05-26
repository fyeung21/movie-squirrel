import { NavLink } from 'react-router-dom';
import SquirrelIcon from '../Icons/SquirrelIcon';

const Logo = ({title}) => {
    return (
      <div className="logo">
            <h1><NavLink to="/">{title}<SquirrelIcon/></NavLink></h1>
      </div>
    );
  }
  
  export default Logo;