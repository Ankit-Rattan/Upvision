import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DGS from "./DGS";

import DGS1 from "../images/Priya.jpg";  //line added for dgs
import DGS2 from "../images/Ankit.jpeg";  //line added for dgs
import DGS3 from "../images/arshpreet.jpg";  //line added for dgs
import "../Styles/Footer.css";
import Navbar from "./Navbar.jsx";
import ScrollReveal from "scrollreveal";

import myGif from "../images/robot_arm.gif";

const Team = () => {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "10px",
      duration: 1000,
      delay: 600,
    });
    ScrollReveal().reveal(".team-title", {
      delay: 600,
      origin: "left",
    });
    ScrollReveal().reveal(".team-gs", {
      delay: 600,
      origin: "left",
    });
    ScrollReveal().reveal(".team-dgs1", {
      delay: 600,
      origin: "left",
    });
    ScrollReveal().reveal(".team-dgs2", {
      delay: 600,
      origin: "left",
    });
  }, []);
  return (
    <>
      <div className="black pb-5 p-[5rem] max-w-[100%]" id="team">
        <div className="">
          <p className="team-title text-slate-200 text-center">
            <span>OUR TEAM</span>
          </p>
          <div className="team">
            <div className="">
              <div className="">
                <div className="flex justify-center flex-wrap">
                  <div className="team-gs mb-8">
                    <DGS
                      name="Priya Pandey"
                      desig="Deputy Secretary General"
                      img={DGS1}
                      linkedin="https://www.linkedin.com/in/priya-pandey-786b36259/"
                      email="mailto:techclub@nitdelhi.ac.in"
                    />
                  </div>
                  <div className="team-dgs1 mb-8">
                    <DGS
                      name="Ankit Rattan"
                      desig="Deputy Secretary General"
                      img={DGS2}
                      linkedin="https://www.linkedin.com/in/ankit-rattan-3a34b724a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP2f4wTTeRgKI2feQXvZb0g%3D%3D"
                      email="mailto:rattan0209@gmail.com"
                    />
                  </div>
                  <div className="team-dgs2 mb-8">
                    <DGS
                      name="Arshpreet Kaur"
                      desig="Deputy Secretary General"
                      img={DGS3}
                      linkedin="https://www.linkedin.com/in/arshpreet-kaur-4b3a621b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXQ5%2FLwb0Tf6QmrKnDnnxIA%3D%3D"
                      email="arshpreetkaur429@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center m-3 mt-[3rem]">
                <Link to="/allteam">
                  <button className="shadow-sm shadow-emerald-200 bg-[#16E6B4] hover:shadow-lg hover:shadow-emerald-400 duration-500 text-white font-semibold py-2 px-4 rounded">
                    Executives and Volunteers
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
