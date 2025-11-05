import './App.css';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Home from './components/Pages/Home/Home';
import "./components/style/Base.css";
import "./components/style/Responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router';
import Menu from './components/Pages/Menu/Menu';
import Team from './components/Pages/Team/Team';
import PageNotFound from './components/Pages/404-Page/PageNottFound';
import Blog from './components/Pages/Blog/Blog';

function App() {

  return (
    <>
      <Header />
      <main className="main-section dark:bg-slate-700">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
