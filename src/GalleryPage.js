import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GalleryPage.css'; 


function GalleryPage({ imageData }) {
    const images = Array.isArray(imageData) ? imageData.slice(0, 4) : [];

    const [showFullGallery, setShowFullGallery] = useState(false);

    return (
        <section className="gallery-page">
            <h2 className="gallery-page-title">Image Gallery</h2>
            <div className="gallery-grid">
                {images.map(image => (
                    <div key={image.id} className="gallery-thumbnail">
                        <img src={image.src} alt={image.alt} className="thumbnail-image" />
                        <p className="thumbnail-title">{image.title}</p>
                    </div>
                ))}
            </div>

            <button onClick={() => setShowFullGallery(true)} className="view-all-button">
                View All
            </button>

            {showFullGallery && <Link to="/full-gallery" className="view-all-link">See Full Gallery</Link>}
        </section>
    );

}

export default GalleryPage;
