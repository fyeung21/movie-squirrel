import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageFaves from '../pages/PageFaves';
import PageNotFound from '../pages/PageNotFound';
import PageAbout from '../pages/PageAbout';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/:id" element={<PageSingleMovie />} />
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
