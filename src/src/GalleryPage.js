import React, { useState } from 'react';
import './GalleryPage.css'; 
function GalleryPage() {
    
    const imageData = [
        {
            id: 1,
            src: 'https://via.placeholder.com/300x200.png?text=Image+1',
            alt: 'Image 1',
            title: 'Image 1',
            description: 'This is the first image in the gallery.'
        },
        {
            id: 2,
            src: 'https://via.placeholder.com/300x200.png?text=Image+2',
            alt: 'Image 2',
            title: 'Image 2',
            description: 'This is the second image in the gallery.'
        },
        {
            id: 3,
            src: 'https://via.placeholder.com/300x200.png?text=Image+3',
            alt: 'Image 3',
            title: 'Image 3',
            description: 'This is the third image in the gallery.'
        },
        {
            id: 4,
            src: 'https://via.placeholder.com/300x200.png?text=Image+4',
            alt: 'Image 4',
            title: 'Image 4',
            description: 'This is the fourth image in the gallery.'
        }
    ];

    
    const [selectedImage, setSelectedImage] = useState(null);

    
    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };

   
    const closeLargerView = () => {
        setSelectedImage(null);
    };

    return (
        <section className="gallery-page">
            <h2 className="gallery-page-title">Image Gallery</h2>
            <div className="gallery-grid">
                {imageData.map(image => (
                    <div key={image.id} className="gallery-thumbnail" onClick={() => handleThumbnailClick(image)}>
                        <img src={image.src} alt={image.alt} className="thumbnail-image" />
                        <p className="thumbnail-title">{image.title}</p>
                    </div>
                ))}
            </div>

            {/* Larger view overlay */}
            {selectedImage && (
                <div className="overlay" onClick={closeLargerView}>
                    <div className="larger-view">
                        <img src={selectedImage.src} alt={selectedImage.alt} className="larger-image" />
                        <h3 className="larger-title">{selectedImage.title}</h3>
                        <p className="larger-description">{selectedImage.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default GalleryPage;
