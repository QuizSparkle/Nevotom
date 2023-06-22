import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/layouts/Navbar";

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
      </Router>
    </div>
  );
}

export default App;
