import React from "react";
import { useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import director from "../images/director-img.png";
import coordinator from "../images/Manoj_Kumawat.jpg";
import DSW from "../images/DSW.jpg";
import "../Styles/Message.css";
import { text } from "@fortawesome/fontawesome-svg-core";
import myGif from "../images/Robot1.gif";
import ScrollReveal from "scrollreveal";
function Message() {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "4rem",
      duration: 1000,
      delay: 500,
    });
    ScrollReveal().reveal(".director-msg", {
      delay: 400,
      origin: "right",
    });
    ScrollReveal().reveal(".director-img", {
      delay: 400,
      origin: "left",
    });
    ScrollReveal().reveal(".dsw-msg", {
      delay: 400,
      origin: "right",
    });
    ScrollReveal().reveal(".dsw-img", {
      delay: 400,
      origin: "right",
    });
    ScrollReveal().reveal(".coor-msg", {
      delay: 400,
      origin: "left",
    });
    ScrollReveal().reveal(".coor-img", {
      delay: 400,
      origin: "left",
    });
  }, []);

  const navigate = useNavigate();
  const messageClick = () => {
    navigate("/");
  };

  return (
    <div id="message">
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
          <div className="Robot_gif">
            <img src={myGif} alt="my-gif" className="robot_vid " />
          </div>
          <div className="ba-section ">
            <div className="ba-image-content director-img ">
              <div className="image">
                <img src={director} alt="Director" className="ba-image1" />
                <h2 className="p-5">
                  <strong>Prof.(Dr.) Ajay K. Sharma</strong>
                </h2>
              </div>
            </div>
            <div className="ba-text-content director-msg" id="director-msg">
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
          <div className="ba-section " id="dsw_msg">
            <div className="ba-text-content dsw-msg" id="director-msg">
              {/* <span>#NITDAlumni</span> */}
              <h1 className="ba-title">
                <span>Dean Student Welfare&apos;s Message</span>
              </h1>
              <p className="ba-description">
                <br />
                As the Dean of Student Welfare, I'm thrilled to witness the
                boundless creativity and passion for technology within our
                community. In this ever-evolving digital landscape, our tech
                club serves as your playground for exploration, collaboration,
                and growth. From coding marathons to futuristic workshops,
                there's something here for every curious mind and inventive
                spirit. But beyond the ones and zeros, our club is a vibrant
                tapestry of personalities, united by a shared love for all
                things tech. Together, we'll break barriers, forge friendships,
                and pave the way for a brighter, more connected future.
              </p>
            </div>
            <div className="ba-image-content ">
              <div className="image dsw-img">
                <img
                  src={DSW}
                  alt="Director"
                  className="ba-image1 h-[400px] w-[330px]"
                />
                <h2 className="p-5">
                  <strong>Prof. (Dr.) Jyoteesh Malhotra</strong>
                </h2>
              </div>
            </div>
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
          <div className="ba-section coor-section">
            <div className="ba-image-content" id="coor_msg">
              <div className="image coor-img">
                <img src={coordinator} alt="Director" className="ba-image1" />
                <h2 className="p-5">
                  <strong>Dr. Manoj Kumawat</strong>
                </h2>
              </div>
            </div>
            <div className="ba-text-content coor-msg" id="coor_msg">
              {/* <span>#NITDAlumni</span> */}
              <h1 className="ba-title">
                <span>Faculty Coordinator&apos;s Message</span>
              </h1>
              <p className="ba-description">
                <br />
                It is my privilege to foster an environment where curiosity
                thrives, knowledge is shared, and connections are made.
                We&apos;re all about exploring cool tech stuff together. Whether
                you&apos;re a pro or just starting out, there&apos;s something
                here for you. We&apos;ve got workshops, talks, and events that
                cover everything from coding to gadgets. From hands-on workshops
                to engaging discussions, we offer a diverse array of events
                tailored to suit every interest and skill level. My goal is to
                ensure that every member feels supported, valued, and inspired
                to explore the endless possibilities that technology has to
                offer. Together, let&apos;s harness the power of collaboration
                and innovation to push the boundaries of what&apos;s possible
                and shape the future of technology. I invite you to dive in, get
                involved, and embark on this exciting journey with us.
              </p>

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
      </div>
    </div>
  );
}
export default Message;
