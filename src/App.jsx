import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Footer from './components/Footer';
import Team from './components/Team';
import Home from './Home';
import AllTeam from './components/AllTeam';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },5000);
  }, []);

  return (
    <>
      {loading ? 
        <Loader />
       : 
        <div>
          <BrowserRouter> 
            <div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/allteam' element={<AllTeam />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      }
    </>
  );
}

export default App;
