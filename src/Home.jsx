import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Team from "./components/Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import EventPage from "./components/EventPage";
import GalleryPage from "./components/GalleryPage";
import Navbar from "./components/Navbar";
import Message from "./components/Message";
import AnimatedCursor from "react-animated-cursor";
import About from "./components/About";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import TeamCard from './components/GS'
// import ImageTrack from "./components/Project";
import Vanta from "./components/Vanta";
// import ProjectCard from "./components/Project";

function App() {
  return (
    <>
      <AnimatedCursor color="193, 11, 111" />
      <Navbar />
      <Hero />
      <About />
      {/* <ProjectCard /> */}
      <Message />
      <EventPage />
      <GalleryPage />
      <Team />
    </>
  );
}

export default App;
