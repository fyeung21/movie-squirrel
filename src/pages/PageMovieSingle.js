import { Helmet } from 'react-helmet';
import SingleMovie from '../components/singleMovie/SingleMovie';

const PageMovieSingle = () => {
    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`${`movies.title`} | Movie Squirrel`}</title>
        </Helmet>
        <div className="pageMovieSingle">
          <h1>single movie page</h1>
          <SingleMovie />
        </div>
      </>
    );
  }
  
export default PageMovieSingle;