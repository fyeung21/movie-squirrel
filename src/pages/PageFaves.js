import { Helmet } from 'react-helmet';

const PageFaves = () => {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Favourites | Movie Squirrel</title>
        </Helmet>
        <div className="pageFaves">
          <h1>favourites page</h1>
        </div>
      </>
    );
  }
  
export default PageFaves;