import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
