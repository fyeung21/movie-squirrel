import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { appTitle } from '../globals/globalVariables';

const PageNotFound = () => {

    useEffect(() => {
      document.title = `hi - Page Not Found`;
    }, []);

    return (
      <div className="pageNotFound">
          <h1>404 page</h1>
          <p>Page not found.</p>
			  	<p>Go to <Link to="/">Home</Link> page.</p>
      </div>
    );
  }
  
export default PageNotFound;