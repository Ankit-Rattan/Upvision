import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/GalleryPage.css";
import PropTypes from "prop-types";
import image1 from "../images/tech01.jpg";
import image2 from "../images/tech02.jpg";
import image3 from "../images/tech013.jpg";
import image4 from "../images/tech015.jpg";

function GalleryPage() {
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
    <section className="gallery-page">
      <h2 className="gallery-page-title">Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-thumbnail">
            <img src={image.src} alt={image.alt} className="thumbnail-image" />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => setShowFullGallery(true)}
          className="view-all-button"
        >
          <Link to="/fullgallery" className="view-all-link">
            View All
          </Link>
        </button>
      </div>
    </section>
  );
}

GalleryPage.propTypes = {
  imageData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      // title: PropTypes.string.isRequired, // Remove or add title property to image data
    })
  ).isRequired,
};

export default GalleryPage;
