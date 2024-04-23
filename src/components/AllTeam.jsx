import React from "react";
import exec from "../images/test.jpg";
import GS from "../images/GS.jpg";
import TeamCard from "./TeamCard";
import DGS from "./DGS";
import Executive from "./Executive";
import Volunteers from "./Volunteers";
import Navbar from "./Navbar";
import AnimatedCursor from "react-animated-cursor";

const Team = () => {
  return (
    <div>
      <AnimatedCursor />
      <Navbar />
      <div>
        <p className="text-slate-200 typing">Our Team</p>
        <div className="  mx-[0vh] items-center sm:mx-[10rem] shadow-md my-10 ">
          <div className="">
            {/* DGS, GS */}
            <div className="">
              <div className="flex justify-between flex-wrap">
                <div>
                  <DGS
                    name="Vaishnv Raju"
                    desig="General Secretary"
                    img={GS}
                    linkedin="#"
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
                    img="https://media.licdn.com/dms/image/D5603AQG81N8ShmXdrg/profile-displayphoto-shrink_400_400/0/1672950265619?e=1718841600&v=beta&t=Vui9hO2ZUUJn6wACfp4ff0KMQEcAOComQkDVDXfBjJo"
                    linkedin="https://www.linkedin.com/in/sajalsahu8/"
                    email="mailto:211210056@nitdelhi.ac.in"
                  />
                </div>
              </div>
            </div>
            {/* Exec */}
            <Executive />
            <hr className="my-[1rem] w-full" />
            {/* Volunteer */}
            <Volunteers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
