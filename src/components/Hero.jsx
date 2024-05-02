import React, { useState, useEffect } from "react";
import "../Styles/Hero.css";
import vid from "../images/Hero_vid.mp4";
import myGif from "../images/Code01.gif";
// import NET from "vanta/src/vanta.net";
import myGif2 from "../images/logo3d1.gif";
function Hero() {
  const initialTitle1 = "We Don't Sleep, We Code (NIT Delhi)";
  const initialTitle2 = "Launch Your Tech Career at NIT Delhi";

  const [currentTitle, setCurrentTitle] = useState(initialTitle1);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstTitle, setIsFirstTitle] = useState(true);

  // useEffect(() => {
  //   NET({
  //     el: "#hero",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.0,
  //     minWidth: 200.0,
  //     scale: 1.0,
  //     scaleMobile: 1.0,
  //     color: "#16E6B4",
  //     backgroundColor: 0x0,
  //   });
  // }, []);
  useEffect(() => {
    let intervalId;

    const handleTitle = () => {
      if (!isTyping) {
        if (currentTitle.length > 0) {
          setCurrentTitle((prevTitle) => prevTitle.slice(0, -1));
        } else {
          setIsTyping(true);
          setCurrentIndex(0);
          setCurrentTitle("");
        }
      } else {
        const titleToType = isFirstTitle ? initialTitle1 : initialTitle2;

        if (currentIndex < titleToType.length) {
          setCurrentTitle((prevTitle) => prevTitle + titleToType[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setTimeout(() => {
            setIsFirstTitle((prev) => !prev);
            setIsTyping(false);
            setCurrentIndex(0);
          }, 2000);

          clearInterval(intervalId);
        }
      }
    };

    intervalId = setInterval(handleTitle, 100);

    return () => clearInterval(intervalId);
  }, [
    currentTitle,
    isTyping,
    currentIndex,
    isFirstTitle,
    initialTitle1,
    initialTitle2,
  ]);

  return (
    <div className="hero_outer">
      <div id="hero" className="m-auto mx-[20%]" >
        <section className="hero">
          {/* <div className="Hero_vid">
            <video id="background-video" src={vid} autoPlay loop muted />
          </div> */}
          {/* <h1 className={isTyping ? "second-title" : "title"}>
            <span className="upvision-text text-[#16E6B4]">UpVision:</span>{" "}
            {currentTitle}
          </h1> */}

          {/* <div className="Code_gif">
            <img src={myGif} alt="my-gif" className="h-[200px]" />
          </div> */}
          <div className="upvision_logo_gif mx-[15rem]">
            <img
              src={myGif2}
              alt="my-gif"
              className="robot_hand "
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
