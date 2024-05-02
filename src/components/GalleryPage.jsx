import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/GalleryPage.css";
import PropTypes from "prop-types";
import image1 from "../images/tech020.jpg";
import image2 from "../images/tech015.jpg";
import image3 from "../images/Screenshot 2.jpg";
import image4 from "../images/techp15.jpg";
import ScrollReveal from "scrollreveal";

function GalleryPage() {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "10px",
      duration: 800,
      delay: 600,
    });
    ScrollReveal().reveal(".techody", {
      delay: 600,
      origin: "right",
    });
    ScrollReveal().reveal(".techp", {
      delay: 600,
      origin: "left",
    });
    ScrollReveal().reveal(".resume", {
      delay: 600,
      origin: "right",
    });
  }, []);
  const imageData = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
    },
    {
      id: 4,
      src: image4,
      alt: "Image 4",
    },
  ];

  const images = Array.isArray(imageData) ? imageData.slice(0, 4) : [];

  const [showFullGallery, setShowFullGallery] = useState(false);

  return (
    <>
    
      <div>
        <p className="text-center text-4xl text-gray-200 font-bold mb-5">
          {" "}
          Image Gallery
        </p>
      </div>
      <ul>
        <li>
          <Link to="/fullgallery">
            <figure className="techody">
              <img src={image1} alt="" />
              <figcaption>Tech Odyssey</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="/fullgallery">
            <figure className="techp">
              <img src={image2} alt="" />
              <figcaption>Techphoria</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="/fullgallery">
            <figure className="resume">
              <img src={image3} alt="" />
              <figcaption>Resume workshop</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="/fullgallery">
            <figure className="techp">
              <img src={image4} alt="" />
              <figcaption>Techphoria</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
      <div className="text-center">
        <button className="view-all-button">
          <Link to="/fullgallery">Veiw All Captures</Link>
        </button>
      </div>
    </>
  );
}

export default GalleryPage;
