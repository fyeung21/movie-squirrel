import { Helmet } from 'react-helmet';

const PageAbout = () => {
    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>About | Movie Squirrel</title>
        </Helmet>
        <div className="pagePageAbout">
            <h1>about page</h1>
        </div>
      </>
    );
  }
  
export default PageAbout;