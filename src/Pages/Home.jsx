import React from "react";
import Navbar from "../components/Navbar.jsx";
import Message from "../components/Message.jsx";
import director from "../images/director-img.png";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Message img={director} />
    </div>
  );
}

export default Home;
