import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/layouts/Navbar";

// Web3Modal Installation
import { Web3Modal } from "@web3modal/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";
import { fantomTestnet } from "wagmi/chains";

const chains = [fantomTestnet];
const projectId = "edb6828b8024fe4e9f28bfb372f4c88f";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  useEffect(() => {
    fetch("/api/endpoint") // Replace `endpoint` with the actual API endpoint in your Django app
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
    <div className="App h-[100vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </Router>
    </div>
  );
}

export default App;
