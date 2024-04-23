import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/GalleryPage.css'; 

function FullGalleryPage({ imageData }) {
    return (
        <section className="gallery-page">
            <h2 className="gallery-page-title">Full Image Gallery</h2>
            <div className="gallery-grid">
                {imageData.map(image => (
                    <div key={image.id} className="gallery-thumbnail">
                        <img src={image.src} alt={image.alt} className="thumbnail-image" />
                        <p className="thumbnail-title">{image.title}</p>
                    </div>
                ))}
            </div>

            <Link to="/" className="view-all-link">Go Back</Link>
        </section>
    );
}

export default FullGalleryPage;
