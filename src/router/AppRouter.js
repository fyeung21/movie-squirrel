import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import PageHome from '../pages/PageHome';
import PageMovieSingle from '../pages/PageMovieSingle';
import PageFaves from '../pages/PageFaves';
import PageNotFound from '../pages/PageNotFound';
import PageAbout from '../pages/PageAbout';
import Footer from '../components/Footer/Footer';
import MobileNav from '../components/Header/MobileNav';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome sort="popular" />} />
            {/* <Route path="/sort/popular" exact element={<PageHome />} />
            <Route path="/sort/top-rated" exact element={<PageHome  />} />
            <Route path="/sort/upcoming" exact element={<PageHome  />} />
            <Route path="/sort/now-playing" exact element={<PageHome  />} /> */}
            <Route path="/movies/:id" element={<PageMovieSingle />} />
            <Route path="/favourites" element={<PageFaves />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <MobileNav />
    </BrowserRouter>
  );
};

export default AppRouter;
