import React, { FC } from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';

import './App.css';
import Basket from './components/Home/Basket';
import Pick from './components/Home/Pick';
import Navbar from './components/NavBar';
import ShopDetail from './components/ShopDetail';
// import ShoppingCartModal from './components/ShoppingCartModal';

const App: FC = () => {
  const AppLayout = () => (
    <>
      <Header />
      <Navbar />
      <Basket />
      <Pick />
      <Footer />
    </>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/' element={<AppLayout />} />
            <Route path='/detail' element={<ShopDetail />} />
            {/* <Route path='/shoppingCartModal' element={<ShoppingCartModal handleClose='sdfsdf' isShow={true} goodsCount={12} />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App;
