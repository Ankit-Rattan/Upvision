import React from "react";
import { Link } from "react-router-dom";
import "../Styles/GalleryPage.css";

// Use relative paths for images if they are inside the `public` folder
const techody = [
  { id: 10, src: "/images/tech010.jpg", alt: "Image 10" },
  { id: 12, src: "/images/tech012.jpg", alt: "Image 12" },
  { id: 13, src: "/images/tech013.jpg", alt: "Image 13" },
  { id: 14, src: "/images/tech014.jpg", alt: "Image 14" },
  { id: 15, src: "/images/tech015.jpg", alt: "Image 15" },
  { id: 16, src: "/images/tech016.jpg", alt: "Image 16" },
  { id: 19, src: "/images/tech019.jpg", alt: "Image 19" },
  { id: 20, src: "/images/tech020.jpg", alt: "Image 20" },
];

const techph = [
  { id: 25, src: "/images/techp4.png", alt: "Image 25" },
  { id: 26, src: "/images/techp5.png", alt: "Image 26" },
  { id: 28, src: "/images/techp7.jpg", alt: "Image 28" },
  { id: 33, src: "/images/techp12.jpg", alt: "Image 33" },
  { id: 34, src: "/images/techp13.jpg", alt: "Image 34" },
  { id: 35, src: "/images/techp14.jpg", alt: "Image 35" }, // Ensure this file exists
  { id: 36, src: "/images/techp15.jpg", alt: "Image 36" },
  { id: 37, src: "/images/techp16.jpg", alt: "Image 37" },
];

const resume = [
  { id: 38, src: "/images/resume1.jpg", alt: "Image 38" },
  { id: 39, src: "/images/resume2.jpg", alt: "Image 39" },
  { id: 40, src: "/images/resume3.jpg", alt: "Image 40" },
];

function FullGalleryPage() {
  return (
    <>
      <section className="gallery-page">
        <h2 className="gallery-page-title mb-[2rem]">Image Gallery</h2>
        <hr className="m-[1rem]" />

        <div className="techody">
          <h1 className="text-center text-3xl font-mono m-[1rem]">-Tech Odyssey-</h1>
          <div className="gallery-grid">
            {techody.map((image) => (
              <div key={image.id} className="gallery-thumbnail">
                <img src={image.src} alt={image.alt} className="thumbnail-image" />
              </div>
            ))}
          </div>
        </div>

        <hr className="m-[1rem]" />

        {/* <div className="techph bg-black">
          <h1 className="text-center text-3xl font-mono m-[1rem]">-Techphoria-</h1>
          <div className="gallery-grid">
            {techph.map((image) => (
              <div key={image.id} className="gallery-thumbnail">
                <img src={image.src} alt={image.alt} className="thumbnail-image" />
              </div>
            ))}
          </div>
        </div> */}

        <hr className="m-[1rem]" />

        <div className="resume bg-black">
          <h1 className="text-center text-3xl font-mono m-[1rem]">-Resume Workshop-</h1>
          <div className="gallery-grid">
            {resume.map((image) => (
              <div key={image.id} className="gallery-thumbnail">
                <img src={image.src} alt={image.alt} className="thumbnail-image" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="view-all-button">
            <Link to="/">Back to Homepage</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default FullGalleryPage;
