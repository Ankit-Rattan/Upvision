import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/GalleryPage.css";
import PropTypes from "prop-types";

function GalleryPage({ imageData }) {
  const images = Array.isArray(imageData) ? imageData.slice(0, 4) : [];

  const [showFullGallery, setShowFullGallery] = useState(false);

  return (
    <section className="gallery-page">
      <h2 className="gallery-page-title">Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-thumbnail">
            <img src={image.src} alt={image.alt} className="thumbnail-image" />
            <p className="thumbnail-title">{image.title}</p>
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
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GalleryPage;
