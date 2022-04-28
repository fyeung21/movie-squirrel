import Logo from "./Logo";
import Nav from "./Nav";

const Header = ({title}) => {
    return (
      <div className="header">
          <Logo title={title}/>
          <Nav/>
      </div>
    );
  }

Header.defaultProps = {
    title: 'Movie Squirrel'
}
  
  export default Header;