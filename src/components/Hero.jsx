// import React, { useState, useEffect } from "react";
// import "../Styles/Hero.css";
// import bgvid from "../images/herovid.mp4";

// function Hero() {
//   const initialTitle1 = "We Don't Sleep, We Code (NIT Delhi)";
//   const initialTitle2 = "Launch Your Tech Career at NIT Delhi";

//   const [currentTitle, setCurrentTitle] = useState(initialTitle1);
//   const [isTyping, setIsTyping] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFirstTitle, setIsFirstTitle] = useState(true);

//   useEffect(() => {
//     let intervalId;

//     const handleTitle = () => {
//       if (!isTyping) {
//         if (currentTitle.length > 0) {
//           setCurrentTitle((prevTitle) => prevTitle.slice(0, -1));
//         } else {
//           setIsTyping(true);
//           setCurrentIndex(0);
//           setCurrentTitle("");
//         }
//       } else {
//         const titleToType = isFirstTitle ? initialTitle1 : initialTitle2;

//         if (currentIndex < titleToType.length) {
//           setCurrentTitle((prevTitle) => prevTitle + titleToType[currentIndex]);
//           setCurrentIndex((prevIndex) => prevIndex + 1);
//         } else {
//           setTimeout(() => {
//             setIsFirstTitle((prev) => !prev);
//             setIsTyping(false);
//             setCurrentIndex(0);
//           }, 2000);

//           clearInterval(intervalId);
//         }
//       }
//     };

//     intervalId = setInterval(handleTitle, 100);

//     return () => clearInterval(intervalId);
//   }, [
//     currentTitle,
//     isTyping,
//     currentIndex,
//     isFirstTitle,
//     initialTitle1,
//     initialTitle2,
//   ]);

//   return (
//     <section className="hero">
//       <video autoplay muted loop id="background-video">

//       <source src={bgvid} type="video/mp4"/>
// {/* 
//       <h1 className={isTyping ? "second-title" : "title"}>
//         <span className="upvision-text">UpVision:</span> {currentTitle}
//       </h1> */}
//       </video>
//     </section>
//   );
// }

// export default Hero;



import React from 'react';
import vid from '../images/herovid.mp4';

const Loader = () => {
  return (
    <div>
      <video id='background-video' src={vid} autoPlay loop muted className='w-full h-[100vh] object-cover' />
    </div>
  );
};

export default Loader;
