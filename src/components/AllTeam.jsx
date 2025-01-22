import React, { useEffect } from "react";
import DGS1 from "../images/Priya.jpg";
import DGS2 from "../images/Ankit.jpeg";
import DGS3 from "../images/arshpreet.jpg";
import TeamCard from "./TeamCard";
import DGS from "./DGS";
import Executive from "./Executive";
import Volunteers from "./Volunteers";
import "../Styles/Team.css";
import Navbar from "./Navbar";
import AnimatedCursor from "react-animated-cursor";
import ScrollReveal from "scrollreveal";

const AllTeam = () => {

  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "100px",
      duration: 700,
      delay: 600,
    });
    ScrollReveal().reveal(".team-title", {
      delay: 800,
      origin: "top",
    });
    ScrollReveal().reveal(".first", {
      delay: 800,
      origin: "bottom",
    });
    ScrollReveal().reveal(".second", {
      delay: 800,
      origin: "top",
    });
    ScrollReveal().reveal(".third", {
      delay: 800,
      origin: "bottom",
    });
  }, []);


  return (
    <>
      <Navbar />
      <AnimatedCursor/>
      <div className=" pb-5 p-[3rem] bg-black max-w-[100%]">
        <div>
          <p className=" team-title text-slate-200  text-center text-4xl mb-[3rem] font-semiboldch">Our Team</p>
          <div className="items-center shadow-md my-5">
            <div className="team">
              {/* DGS */}
              <div className="">
                <div className="first flex justify-around flex-wrap ">
                  <div>
                    <DGS
                      name="Priya Pandey"
                      desig="Deputy Secretary General"
                      img={DGS1}
                      linkedin="https://www.linkedin.com/in/priya-pandey-786b36259"
                      email="mailto:pandeymona336@gmail.com"
                    />
                  </div>
                  <div>
                    <DGS
                      name="Ankit Rattan"
                      desig="Deputy Secretary General"
                      img={DGS2}
                      linkedin="https://www.linkedin.com/in/ankit-rattan-3a34b724a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP2f4wTTeRgKI2feQXvZb0g%3D%3D"
                      email="mailto:rattan0209@gmail.com"
                    />
                  </div>
                  <div>
                    <DGS
                      name="Arshpreet Kaur"
                      desig="Deputy Secretary General"
                      img={DGS3}
                      linkedin="https://www.linkedin.com/in/arshpreet-kaur-4b3a621b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXQ5%2FLwb0Tf6QmrKnDnnxIA%3D%3D"
                      email="mailto:arshpreetkaur429@gmail.com"
                    />
                  </div>
                </div>
              </div>
              {/* Exec */}
              <div className="allteam">
              <div className="second">
                <Executive />
              </div>
                <hr className=" my-[1rem] w-full" />
                {/* Volunteer */}
                <div className="third">
                {/* <Volunteers /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTeam;
