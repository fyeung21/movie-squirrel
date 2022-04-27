import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import PageHome from '../pages/PageHome';
import PageMovieSingle from '../pages/PageMovieSingle';
import PageFaves from '../pages/PageFaves';
import PageNotFound from '../pages/PageNotFound';
import PageAbout from '../pages/PageAbout';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/movies/:id" element={<PageMovieSingle />} />
          <Route path="/favourites" element={<PageFaves />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
