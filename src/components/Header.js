const Header = () => {
    return (
      <div className="header">
          <h1>{title}</h1>
      </div>
    );
  }

Header.defaultProps = {
    title: 'Movie Squirrel'
}
  
  export default Header;