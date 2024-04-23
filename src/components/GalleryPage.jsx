import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/GalleryPage.css'; 


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
                <Link to="/fullgallery" className="view-all-link">View All</Link>
            </button>

           
        </section>
    );

}

export default GalleryPage;
