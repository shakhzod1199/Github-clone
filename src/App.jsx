import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import NotFound from './pages/Notfound';
import Repositories from './pages/Home/Repositories';
import Projects from './pages/Home/projects';
import Packages from './pages/Home/packages';
import Stars from './pages/Home/stars';
import Overview from './pages/Home/Overview';
import Following from './pages/Home/Following';
import Followers from './pages/Home/Followers';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='py-4'>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/' element={<Overview/>} />
            <Route path='/repositories' element={<Repositories />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/packages' element={<Packages />} />
            <Route path='/stars' element={<Stars />} />
            <Route path='/followers' element={<Followers />} />
            <Route path='/following' element={<Following />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;