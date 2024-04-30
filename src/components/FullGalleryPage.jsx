import React from "react";
import { Link } from "react-router-dom";
import "../Styles/GalleryPage.css";
import image10 from "../images/tech010.jpg";
import image12 from "../images/tech012.jpg";
import image13 from "../images/tech013.jpg";
import image14 from "../images/tech014.jpg";
import image15 from "../images/tech015.jpg";
import image16 from "../images/tech016.jpg";
import image19 from "../images/tech019.jpg";
import image20 from "../images/tech020.jpg";
import image25 from "../images/techp4.png";
import image26 from "../images/techp5.png";
import image28 from "../images/techp7.jpg";
import image29 from "../images/techp8.jpg";

import image33 from "../images/techp12.jpg";
import image34 from "../images/techp13.jpg";
import image35 from "../images/techp14.jpg";
import image36 from "../images/techp15.jpg";
import image37 from "../images/techp16.jpg";
import image38 from "../images/resume1.jpg";
import image39 from "../images/resume2.jpg";
import image40 from "../images/resume3.jpg";
import Navbar1 from "./Navbar1";
import AnimatedCursor from "react-animated-cursor";

function FullGalleryPage() {
  const  resume = [
    {
          id: 38,
          src: image38,
          alt: 'Image 38',
      
      },
      {
            id: 39,
            src: image39,
            alt: 'Image 39',
        
        },
        {
         id: 40,
          src:image40,
          alt: 'Image 40',
      
      },
  ];
  
  const  techody = [





    {
      id: 10,
      src: image10,
      alt: "Image 10",
    },

    {
      id: 12,
      src: image12,
      alt: "Image 12",
    },
    {
      id: 13,
      src: image13,
      alt: "Image 13",
    },
    {
      id: 14,
      src: image14,
      alt: "Image 14",
    },
    {
      id: 15,
      src: image15,
      alt: "Image 15",
    },
    {
      id: 16,
      src: image16,
      alt: "Image 16",
    },
    {
      id: 19,
      src: image19,
      alt: "Image 19",
    },
    {
      id: 20,
      src: image20,
      alt: "Image 20",
    },   

  ];
  
  const techph = [
    
    {
      id: 25,
      src: image25,
      alt: "Image 25",
    },
    {
      id: 26,
      src: image26,
      alt: "Image 26",
    },
    
    {
      id: 28,
      src: image28,
      alt: "Image 28",
    },
    {
      id: 29,
      src: image29,
      alt: "Image 29",
    },
    
    {
      id: 33,
      src: image33,
      alt: "Image 33",
    },
    {
      id: 34,
      src: image34,
      alt: "Image 34",
    },
    {
      id: 35,
      src: image35,
      alt: "Image 35",
    },
    {
      id: 36,
      src: image36,
      alt: "Image 36",
    },
    {
      id: 37,
      src: image37,
      alt: "Image 37",
    },
  ];
  
  return (
    <>
    <AnimatedCursor/>
    <section className="gallery-page">
      <h2 className="gallery-page-title mb-[2rem]">Image Gallery</h2>
      <hr className="m-[1rem]"/>
      <div className="techody">
      <h1 className="text-center text-3xl font-mono m-[1rem]">-Tech Odyssey-</h1>
      <div className="gallery-grid">
      
        {techody.map((image) => (
          <div key={image.id} className="gallery-thumbnail">
            <img src={image.src} alt={image.alt} className="thumbnail-image" />
            <p className="thumbnail-description">{image.description}</p>
          </div>
        ))}
      </div>
      </div>
      <hr className="m-[1rem]"/>
      <div className="techph bg-black">
      <h1 className="text-center text-3xl font-mono m-[1rem]" >-Techphoria-</h1>
      <div className="gallery-grid">
      
        {techph.map((image) => (
          <div key={image.id} className="gallery-thumbnail">
            <img src={image.src} alt={image.alt} className="thumbnail-image" />
            <p className="thumbnail-description">{image.description}</p>
          </div>
        ))}
      </div>
      </div>
      <hr className="m-[1rem]"/>
      <div className="resume bg-black">
      <h1 className="text-center text-3xl font-mono m-[1rem]">-Resume Workshop-</h1>
      <div className="gallery-grid">
      
        {resume.map((image) => (
          <div key={image.id} className="gallery-thumbnail">
            <img src={image.src} alt={image.alt} className="thumbnail-image" />
            <p className="thumbnail-description">{image.description}</p>
          </div>
        ))}
      </div>
      </div>
      <div className='text-center mt-5'>

<button className='view-all-button'> 
                  <Link to="/">

                      Back to Homepage
                  </Link>
                  </button>
              </div>
    </section>
    </>
  );
}

export default FullGalleryPage;
