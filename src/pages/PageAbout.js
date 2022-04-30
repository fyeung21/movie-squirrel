import { Helmet } from 'react-helmet';

const PageAbout = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Movie Squirrel</title>
      </Helmet>

      <div className="page-about">
        <section className="about-container">
          <h2>About</h2>
          <p>
            Looking for your next movie? Movie Squirrel will always be here with an updated stash of
            movie info for you to browse and decide on your next flick! This simple no frills site
            will make you want to come back whenever you're looking for a quick glance at whats
            playing, most popular,top rated,and upcoming!
          </p>
          We're using TMDS's API <a href="https://www.themoviedb.org/documentation/api">(Click to the API Site)</a>
        </section>
      </div>
    </>
  );
};

export default PageAbout;
