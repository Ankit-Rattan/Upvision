import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Team from './components/Team'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './src/Hero'
import EventPage from './src/EventPage'
import GalleryPage from './src/GalleryPage'


// import TeamCard from './components/GS'

function App() {

  return (
    <>
      <Hero />
      <EventPage />
      <GalleryPage />
      <Team />
    </>
  )
}

export default App
