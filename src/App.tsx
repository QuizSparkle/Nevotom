import React, { useEffect, FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/layouts/Navbar";
import { DAppProvider } from "@usedapp/core"
import { config } from "./SupportedChains"

// Web3Modal Installation
import { Web3Modal } from "@web3modal/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";
import { fantomTestnet } from "wagmi/chains";
import Checkout from "./components/checkout/Checkout";
import ProductDetails from "./components/productDetails/ProductDetails";
import ShoppingCartModal from "./components/cart/ShoppingCartModal";
import Footer from "./components/layouts/Footer";

const chains = [fantomTestnet];
const projectId = "edb6828b8024fe4e9f28bfb372f4c88f";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const App: FC = () => {
  useEffect(() => {
    fetch("http://localhost:8000/api/endpoint") // Replace `endpoint` with the actual API endpoint in your Django app
      .then((response) => response.json())
      .then((data) => {
        // Handle the received data
        console.log("data : ", data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  });

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
          <Route
            path="/cartmodal"
            element={
              <ShoppingCartModal
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

export default App;
