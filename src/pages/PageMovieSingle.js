import { Helmet } from 'react-helmet';

const PageMovieSingle = () => {
    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`${`movies.title`} | Movie Squirrel`}</title>
        </Helmet>
        <div className="pageMovieSingle">
          <h1>single movie page</h1>
        </div>
      </>
    );
  }
  
export default PageMovieSingle;