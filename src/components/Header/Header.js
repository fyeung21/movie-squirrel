import Nav from "./Nav";

const Header = ({title}) => {
    return (
      <div className="header">
          <h1>{title}</h1>
          <Nav/>
      </div>
    );
  }

Header.defaultProps = {
    title: 'Movie Squirrel'
}
  
  export default Header;