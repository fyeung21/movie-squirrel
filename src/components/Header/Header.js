import Logo from './Logo';
import Nav from './Nav';

const Header = ({ title }) => {
  return (
    <header className="header">
      <section className="header-bkg">
        <div className="header-wrap">
          <Logo title={title} />
          <Nav />
        </div>
      </section>
    </header>
  );
};

Header.defaultProps = {
  title: 'Movie Squirrel',
};

export default Header;
