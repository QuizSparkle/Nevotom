import React, { useEffect, FC } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/layouts/Navbar'
import tire from './assets/products/tire1.png'
import { DAppProvider } from "@usedapp/core"
import { config } from "./SupportedChains"

// Web3Modal Installation
import { Web3Modal } from '@web3modal/react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig } from 'wagmi'
import { fantomTestnet } from 'wagmi/chains'
import Checkout from './components/checkout/Checkout'
import ProductDetails from './components/productDetails/ProductDetails'
import CartPopup from './components/productDetails/CartPopup'
import Footer from './components/layouts/Footer'
import AllProducts from './components/allProducts/AllProducts'
import SellProduct from './components/sellProduct/SellProduct'
import Cart from './components/cart/Cart'

const chains = [fantomTestnet]
const projectId = 'edb6828b8024fe4e9f28bfb372f4c88f'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

// sampleOrderedProducts

const orderProducts = [
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 3,
    subtotal: 90393,
    rewards: 3,
    status: 'Paid',
    img: tire,
  },
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 2,
    subtotal: 60262,
    rewards: 2,
    status: 'Processing',
    img: tire,
  },
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 1,
    subtotal: 30131,
    rewards: 1,
    status: 'Dispatched',
    img: tire,
  },
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 4,
    subtotal: 120524,
    rewards: 4,
    status: 'Paid',
    img: tire,
  },
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 2,
    subtotal: 60262,
    rewards: 2,
    status: 'Processing',
    img: tire,
  },
  {
    name: 'MIRAGE MR',
    price: 60000,
    quantity: 1,
    subtotal: 30131,
    rewards: 1,
    status: 'Dispatched',
    img: tire,
  },
]

const App: FC = () => {
  useEffect(() => {
    fetch('http://localhost:8000/api/endpoint') // Replace `endpoint` with the actual API endpoint in your Django app
      .then((response) => response.json())
      .then((data) => {
        // Handle the received data
        console.log('data : ', data)
      })
      .catch((error) => {
        // Handle errors
        console.error(error)
      })
  })

  return (
    <DAppProvider config={config}>
    <div className="App h-[100vh]">
      <Router>
        <Navbar connected={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                productName="product1"
                productPrice={40}
                subtotal={20}
                total={60}
              />
            }
          />
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/sell" element={<SellProduct />} />
          <Route
            path="/cart"
            element={<Cart ordered={orderProducts} listed={orderProducts} />}
          />
          <Route
            path="/cartmodal"
            element={
              <CartPopup
                handleClose={() => false}
                // handleClose="sdfsdf"
                isShow={true}
                // goodsCount={12}
              />
            }
          />
        </Routes>
        <Footer />
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </Router>
    </div>
    </DAppProvider>
  );
};

export default App
