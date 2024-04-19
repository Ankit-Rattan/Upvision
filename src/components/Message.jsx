import React from "react";
import { useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import director from "../images/director-img.png";
import coordinator from "../images/Manoj_Kumawat.jpg";
import "../Styles/Message.css";
import { text } from "@fortawesome/fontawesome-svg-core";

function Message() {
  const navigate = useNavigate();
  const messageClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <div className="ba-section ">
            <div className="ba-image-content ">
              <img src={director} alt="Director" className="ba-image1" />
            </div>
            <div className="ba-text-content" id="director-msg">
              {/* <span>#NITDAlumni</span> */}
              <h1 className="ba-title">
                <span>Director&apos;s Message</span>
              </h1>
              <p className="ba-description">
                <br />
                Our club stands as a beacon of innovation, collaboration, and
                learning in the ever-evolving landscape of technology. At
                Upvision, we believe in harnessing the power of technology to
                inspire, educate, and empower individuals to shape a better
                tomorrow. Whether you are a seasoned professional, an aspiring
                enthusiast, or simply curious about the latest trends in tech,
                our club offers a vibrant platform for exploration and growth.
                Our mission is simple yet profound: to cultivate a dynamic
                community where ideas flourish, skills are honed, and
                connections are forged. Through a diverse range of events,
                workshops, and projects, we aim to foster creativity, critical
                thinking, and camaraderie among our members. As we embark on
                this exciting journey together, I encourage each and every one
                of you to actively participate, contribute your unique insights,
                and seize every opportunity to expand your horizons. Together,
                let's push the boundaries of what's possible and pave the way
                for a future driven by innovation and excellence.
              </p>
            </div>
            {/* <button
              className="ba-appointment-btn"
              type="button"
              onClick={messageClick}
              >
              <FontAwesomeIcon /> Read More
            </button> */}
          </div>
        </div>
      </div>

      <div>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="ba-section manoj-section">
            <div className="ba-text-content" id="manoj_msg">
              {/* <span>#NITDAlumni</span> */}
              <h1 className="ba-title">
                <span>Coordinator&apos;s Message</span>
              </h1>
              <p className="ba-description">
                <br />
                It is my privilege to foster an environment where curiosity
                thrives, knowledge is shared, and connections are made. We're
                all about exploring cool tech stuff together. Whether you're a
                pro or just starting out, there's something here for you. We've
                got workshops, talks, and events that cover everything from
                coding to gadgets. From hands-on workshops to engaging
                discussions, we offer a diverse array of events tailored to suit
                every interest and skill level. My goal is to ensure that every
                member feels supported, valued, and inspired to explore the
                endless possibilities that technology has to offer. Together,
                let's harness the power of collaboration and innovation to push
                the boundaries of what's possible and shape the future of
                technology. I invite you to dive in, get involved, and embark on
                this exciting journey with us.
              </p>

              {/* <button
              className="ba-appointment-btn"
              type="button"
              onClick={messageClick}
              >
              <FontAwesomeIcon /> Read More
            </button> */}
            </div>
            <div className="ba-image-content" id="manoj_msg">
              <img src={coordinator} alt="Director" className="ba-image1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Message;
