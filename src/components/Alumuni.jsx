import React from "react";
import { Link } from "react-router-dom";
import DGS from "./DGS";
import GS from "../images/GS.jpg";
import "../Styles/Footer.css";
import Navbar from "./Navbar.jsx";

const Team = () => {
  return (
    <>
      <div className="bg-zinc-800 pb-5  px-[3rem] max-w-[100%] ">
        <div className="" >
          <p className="text-slate-200 text-center typing2 mb-3">Our Alumuni</p>
          <div className="allteam">
            <div className="">
              <div className="">
                <div className="card flex justify-evenly flex-wrap mx-[5rem]">
                  <div>
                    <DGS
                      name="Navneet Singh"
                      desig="General Secretary (2022-2023)"
                      img="https://media.licdn.com/dms/image/D4D03AQGbWZbg7-DjVg/profile-displayphoto-shrink_400_400/0/1669055975082?e=1719446400&v=beta&t=HlIhpcl-TBBIo7tXws4FKCnWcH926EZQWebibW3wov4"
                      linkedin="https://www.linkedin.com/in/navneetsingh123/"
                      email="mailto:linkedin.com/in/navneetsingh123"
                    />
                  </div>
                  <div>
                    <DGS
                      name="Rahul Sinha"
                      desig="General Secretary (2021-2022)"
                      img="https://media.licdn.com/dms/image/D4D03AQFM5Hf0qzvOMw/profile-displayphoto-shrink_400_400/0/1694754193166?e=1719446400&v=beta&t=kLVZmuIisoArINBdPdgmA5EUpMwl0rkKIHAbIY3A1Q4"
                      linkedin="https://www.linkedin.com/in/rahulsinha19/"
                      email="mailto:#"
                    />
                  </div>

                </div>
                <hr className="my-[3rem]" />
                <div className="flex justify-evenly flex-wrap mx-[5rem]">
                  <div>
                  <DGS
                      name="Vaishnv Raju"
                      desig="General Secretary (2022-2023)"
                      img={GS}
                      linkedin="#"
                      email="mailto:techclub@nitdelhi.ac.in"
                    />
                  </div>
                  <div>
                    <DGS
                      name="Aryan shrivastava"
                      desig="Deputy Secretary General (2022-2023)"
                      img="https://media.licdn.com/dms/image/C4E03AQHnxbnWlra-Bw/profile-displayphoto-shrink_400_400/0/1617206667667?e=1719446400&v=beta&t=ekat9--hYJ3gPubIvNuMsjNaD7ctSNN3DVNoFRIu72s"
                      linkedin="https://www.linkedin.com/in/aryan-srivastava-17787b201/"
                      email="mailto:srivaryan2@gmail.com"
                    />
                    </div>
                    <div>

                    <DGS
                      name="Abhishek Kumar Suman"
                      desig="Deputy Secretary General (2021-2022)"
                      img="https://media.licdn.com/dms/image/D4D03AQHMprxBOHeMRg/profile-displayphoto-shrink_400_400/0/1686179263863?e=1719446400&v=beta&t=q50YpIagDWvW8Mlo2ncvCj3Ju6ETXxOeBQ10RwgZDiA"
                      linkedin="https://www.linkedin.com/in/aksuman055/"
                      email="mailto:#"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
