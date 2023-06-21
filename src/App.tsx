import React, { FC } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';

import './App.css';
import Basket from './components/Home/Basket';
import Pick from './components/Home/Pick';
import Navbar from './components/NavBar';
import ShopDetail from './components/ShopDetail';

const App: FC = () => {
  const AppLayout = () => (
    <div>
      <Header />
      <Navbar />
      <Basket />
      <Pick/>
      <Footer />
    </div>
  );

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/' element={<AppLayout />} />
            <Route path='/detail' element={<ShopDetail />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
