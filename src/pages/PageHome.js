import MoviesContainer from "../components/MovieTiles/MoviesContainer";
import { Helmet } from 'react-helmet';

const PageHome = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Movies Home | Movie Squirrel</title>
        </Helmet>
        <div className="pageHome">
          {/* <h1>home page</h1> */}
          <MoviesContainer />
      </div>
      </>
    );
  }
  
export default PageHome;