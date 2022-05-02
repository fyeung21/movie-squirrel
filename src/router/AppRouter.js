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
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome sort="popular"/>} />
            <Route path="/sort/popular" exact element={<PageHome sort="popular"/>} />
            <Route path="/sort/top-rated" exact element={<PageHome sort="top_rated"/>} />
            <Route path="/sort/upcoming" exact element={<PageHome sort="upcoming"/>} />
            <Route path="/sort/now-playing" exact element={<PageHome sort="now_playing"/>} />
            <Route path="/movies/:id" element={<PageMovieSingle />} />
            <Route path="/favourites" element={<PageFaves />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileNav/>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
