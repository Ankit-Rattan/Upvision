import React from "react";
import { Link } from "react-router-dom";
import "../Styles/GalleryPage.css";
import image1 from "../images/tech01.jpg";
import image2 from "../images/tech02.jpg";
import image3 from "../images/tech03.jpg";
import image4 from "../images/tech04.jpg";
import image5 from "../images/tech05.jpg";
import image6 from "../images/tech06.jpg";
import image7 from "../images/tech07.jpg";
import image8 from "../images/tech08.jpg";
import image9 from "../images/tech09.jpg";
import image10 from "../images/tech010.jpg";
import image11 from "../images/tech011.jpg";
import image12 from "../images/tech012.jpg";
import image13 from "../images/tech013.jpg";
import image14 from "../images/tech014.jpg";
import image15 from "../images/tech015.jpg";
import image16 from "../images/tech016.jpg";
import image17 from "../images/tech017.jpg";
import image18 from "../images/tech018.jpg";
import image19 from "../images/tech019.jpg";
import image20 from "../images/tech020.jpg";
import image21 from "../images/tech021.jpg";
import image22 from "../images/techp1.jpg";
import image23 from "../images/techp2.jpg";
import image24 from "../images/techp3.jpg";
import image25 from "../images/techp4.png";
import image26 from "../images/techp5.png";
import image27 from "../images/techp6.jpg";
import image28 from "../images/techp7.jpg";
import image29 from "../images/techp8.jpg";
import image30 from "../images/techp9.jpg";
import image31 from "../images/techp10.jpg";
import image32 from "../images/techp11.jpg";
import image33 from "../images/techp12.jpg";
import image34 from "../images/techp13.jpg";
import image35 from "../images/techp14.jpg";
import image36 from "../images/techp15.jpg";
import image37 from "../images/techp16.jpg";

function FullGalleryPage() {
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
    {
      id: 5,
      src: image5,
      alt: "Image 5",
    },
    {
      id: 6,
      src: image6,
      alt: "Image 6",
    },
    {
      id: 7,
      src: image7,
      alt: "Image 7",
    },
    {
      id: 8,
      src: image8,
      alt: "Image 8",
    },
    {
      id: 9,
      src: image9,
      alt: "Image 9",
    },
    {
      id: 10,
      src: image10,
      alt: "Image 10",
    },
    {
      id: 11,
      src: image11,
      alt: "Image 11",
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
      id: 17,
      src: image17,
      alt: "Image 17",
    },
    {
      id: 18,
      src: image18,
      alt: "Image 18",
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
    {
      id: 21,
      src: image21,
      alt: "Image 21",
    },
    {
      id: 22,
      src: image22,
      alt: "Image 22",
    },
    {
      id: 23,
      src: image23,
      alt: "Image 23",
    },
    {
      id: 24,
      src: image24,
      alt: "Image 24",
    },
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
      id: 27,
      src: image27,
      alt: "Image 27",
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
      id: 30,
      src: image30,
      alt: "Image 30",
    },
    {
      id: 31,
      src: image31,
      alt: "Image 31",
    },
    {
      id: 32,
      src: image32,
      alt: "Image 32",
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
    // {
    //     id: 38,
    //     src: require('../images/resume.jpg'),
    //     alt: 'Image 38',

    //     description: 'This is the thirty-eighth image in the gallery.'
    // },
    // {
    //     id: 39,
    //     src: require('../images/Screenshot 2.jpg'),
    //     alt: 'Image 39',

    //     description: 'This is the thirty-ninth image in the gallery.'
    // },
    // {
    //     id: 40,
    //     src: require('../images/Screenshot 3.jpg'),
    //     alt: 'Image 40',

    //     description: 'This is the fortieth image in the gallery.'
    // },
    // {
    //     id: 41,
    //     src: require('../images/Screenshot 4.jpg'),
    //     alt: 'Image 41',

    //     description: 'This is the forty-first image in the gallery.'
    // },
    // {
    //     id: 42,
    //     src: require('../images/Screenshot 5.jpg'),
    //     alt: 'Image 42',

    //     description: 'This is the forty-second image in the gallery.'
    // }
  ];

  return (
    <section className="gallery-page">
      <h2 className="gallery-page-title">Full Image Gallery</h2>
      <div className="gallery-grid">
        {imageData.map((image) => (
          <div key={image.id} className="gallery-thumbnail">
            <img src={image.src} alt={image.alt} className="thumbnail-image" />
            <p className="thumbnail-description">{image.description}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="view-all-link">
        Go Back
      </Link>
    </section>
  );
}

export default FullGalleryPage;
