import Logo from "./Logo";
import Nav from "./Nav";

const Header = ({title}) => {
    return (
      <header className="header">
          <Logo title={title}/>
          <Nav/>
      </header>
    );
  }

Header.defaultProps = {
    title: 'Movie Squirrel'
}
  
  export default Header;