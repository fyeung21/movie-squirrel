import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { appTitle } from '../globals/globalVariables';
import { Helmet } from 'react-helmet';

const PageNotFound = () => {

    useEffect(() => {
      document.title = `hi - Page Not Found`;
    }, []);

    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>404 Page Not Found | Movie Squirrel</title>
        </Helmet>
        <div className="pageNotFound">
          <h1>404 page</h1>
          <p>Page not found.</p>
			  	<p>Go to <Link to="/">Home</Link> page.</p>
        </div>
      </>
    );
  }
  
export default PageNotFound;