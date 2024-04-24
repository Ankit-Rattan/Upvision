import React from "react";
import { Link } from "react-router-dom";
import DGS from "./DGS";
import GS from "../images/GS.jpg";
import "../Styles/Footer.css";
import Navbar from "./Navbar.jsx";

const Team = () => {
  return (
    <>
      <div className="black pb-5  p-[5rem] max-w-[100%] ">
        <div className="">
          <p className=" team-title text-slate-200 text-center ">
            <span>Our Team</span>
          </p>
          <div className="team">
            <div className="">
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
                      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXkuNt1iZEOYd_mFuikHhiWW1tlrpZvhWkpANzH9NAw&s"
                      linkedin="https://www.linkedin.com/in/sajalsahu8/"
                      email="mailto:211210056@nitdelhi.ac.in"
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
