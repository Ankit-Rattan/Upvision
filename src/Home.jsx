import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Team from './components/Team'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// import TeamCard from './components/GS'

function App() {
  
  return (
    <>
      <Team/>
    </>
  )
}

export default App
