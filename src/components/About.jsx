import React from "react";
import "../Styles/About.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "100px",
      duration: 1000,
      delay: 600,
    });
    ScrollReveal().reveal(".about-description", {
      delay: 1000,
      origin: "right",
    });
  }, []);
  return (
    <>
      <div className="about-section" id="about">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <div className="about-text-content">
          <div className="left_about">
            <h2>
              🟢
              <strong>
                UPVISION IS THE TECHNICAL CLUB OF NIT, DELHI. ITS BASIC AIM IS
                TO IMPROVE THE TECH SKILLS OF THE STUDENTS AND IMPART PRACTICAL
                TECHNICAL KNOWLEDGE. UPVISION ORGANIZES VARIOUS INTER AND INTRA
                COLLEGE CODING EVENTS, WORKSHOPS, GUEST LECTURES,HACKATHONS AND
                CODAGES.
              </strong>
            </h2>
          </div>
          <div className="right_about">
            <p className="about-description text-xl">
              At <strong>UPVISION</strong>, we're a community driven by
              innovation, collaboration, and a shared passion for exploring the
              ever-evolving world of tech. Our club is a vibrant hub where
              students from all backgrounds come together to learn, create, and
              inspire. Through hands-on workshops, exciting projects, and
              engaging events, we aim to empower our members with the skills and
              knowledge needed to thrive in today's digital age. But beyond
              technical skills, NIT Delhi Tech Club is also about building
              lasting connections and fostering a sense of community. We believe
              in the power of collaboration and support each other's journey
              towards success. We invite you to join us and be part of something
              extraordinary. Together, let's innovate, create, and make a
              difference. Join us at UPVISION and embark on an exciting journey
              of discovery and growth!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
