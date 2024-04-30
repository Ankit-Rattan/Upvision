import React, { useEffect } from "react";
import GS from "../images/GS.jpg";
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
      <div className=" pb-5 p-[3rem]  max-w-[100%]">
        <div>
          <p className=" team-title text-slate-200  text-center text-4xl mb-[3rem] font-semiboldch">Our Team</p>
          <div className="items-center shadow-md my-5">
            <div className="team">
              {/* DGS, GS */}
              <div className="">
                <div className="first flex justify-around flex-wrap ">
                  <div>
                    <DGS
                      name="Vaishnv Raju"
                      desig="General Secretary"
                      img={GS}
                      linkedin="https://www.linkedin.com/in/vaishnv-raju-9j/"
                      email="mailto:techclub@nitdelhi.ac.in"
                    />
                  </div>
                  <div>
                    <DGS
                      name="Sudhanshu Shrivastava"
                      desig="Deputy Secretary General"
                      img="https://media.licdn.com/dms/image/D4D03AQHMoy3N2oynsw/profile-displayphoto-shrink_400_400/0/1699277096118?e=1718841600&v=beta&t=oDm4RCTlYin07oYKUP9zo1WVxuFxIODLGHovQQOQDmI"
                      linkedin="https://www.linkedin.com/in/sudhanshu-shrivastava-88853b246/"
                      email="mailto:sudhanshushrivastava004@gmail.com"
                    />
                  </div>
                  <div>
                    <DGS
                      name="Sajal Sahu"
                      desig="Deputy Secretary General"
                      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXkuNt1iZEOYd_mFuikHhiWW1tlrpZvhWkpANzH9NAw&s"
                      linkedin="https://www.linkedin.com/in/sajalsahu8/"
                      email="mailto:211210056@nitdelhi.ac.in"
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
                <Volunteers />
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
