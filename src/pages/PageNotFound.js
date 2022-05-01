import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PageNotFound = () => {

    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>404 Page Not Found | Movie Squirrel</title>
        </Helmet>
        <section className="pageNotFound">
          <h2>404 page not found</h2>
          <p>Oops, you navigated to a strange place!</p>
			  	<p>Go back to <Link to="/">Home</Link></p>
        </section>
      </>
    );
  }
  
export default PageNotFound;