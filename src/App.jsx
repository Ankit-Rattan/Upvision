import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Home from "./Home";
import AllTeam from "./components/AllTeam";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Alumuni from "./components/Alumuni";
<<<<<<< HEAD
import FullGalleryPage from "./components/FullGalleryPage";
=======
>>>>>>> 5e952d39a66e42841b4eb1cdb42c8c5766b26b3c

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <BrowserRouter>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allteam" element={<AllTeam />} />
                <Route path="/Contact-Us" element={<Footer />} />
                <Route path="/allteam" element={<AllTeam />} />
<<<<<<< HEAD
                <Route path="/alumni" element={<Alumuni />} />
                <Route path="/fullgallery" element={<FullGalleryPage/>} />
=======
                <Route path="/alumuni" element={<Alumuni />} />
>>>>>>> 5e952d39a66e42841b4eb1cdb42c8c5766b26b3c
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
