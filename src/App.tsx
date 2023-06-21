<<<<<<< HEAD
import React, { FC } from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
=======
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/layouts/Navbar";
>>>>>>> dca658870fabad592a8290b346feb6eafe632eae

import './App.css';
import Basket from './components/Home/Basket';
import Pick from './components/Home/Pick';
import Navbar from './components/NavBar';
import ShopDetail from './components/ShopDetail';

const App: FC = () => {
  const AppLayout = () => (
    <>
      <Header />
      <Navbar />
      <Basket />
      <Pick/>
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
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App;
