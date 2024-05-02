import React from "react";
import Logo from "../images/logo.png";
import CLogo from "../images/nitdelhi.jpeg";
import arrow from "../images/arrow.png";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import insta from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-bg">
        <div className="flex flex-wrap justify-around pt-5 m-auto p-3">
          {/* First Section */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <div className="text-center">
              <div>
                <Link to="/">
                  <img
                    className="shadow-emerald-600 shadow-md hover:shadow-lg hover:shadow-emerald-600 duration-500 h-[5rem] w-[5rem] rounded-full m-auto"
                    src={Logo}
                    alt="Logo"
                  />
                </Link>
              </div>

              <div className="mt-5">
                <p className="font-semibold">UpVision</p>
                <p className="text-sm">Technical Club of NIT Delhi</p>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-5 sm:mt-0">
            <div className="mr-[5rem]">
              <p className="text-center font-semibold"> Follow Us On</p>
              <div className="flex gap-[1rem] justify-center mt-1">
                <a href="https://www.instagram.com/upvision_nitdelhi?igsh=NXZiNTFoOWFyc3Jt" target="instagram">
                  <img className="h-[3rem] rounded-full hover:shadow-md hover:shadow-emerald-600 duration-500" src={insta} alt=" instagram" />
                </a>
                <a href="https://www.linkedin.com/company/upvision-nitd/" alt="linkedin">
                  <img className="h-[3rem] rounded-full hover:shadow-md hover:shadow-emerald-600 duration-500" src={linkedin} alt="linkedin" />
                </a>
                <a href="https://www.linkedin.com/company/upvision-nitd/" alt="linkedin">
                  <img className="h-[3rem] rounded-full hover:shadow-md hover:shadow-emerald-600 duration-500 bg-white" src={twitter} alt="linkedin" />
                </a>
              </div>
              <p className="mt-3">
                <a
                  href="mailto: techclub@nitdelhi.ac.in"
                  className="hover:text-emerald-300 font-thin"
                >
                  {" "}
                  📧techclub@nitdelhi.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Third Section */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <div className="">
              <a href="https://nitdelhi.ac.in/">
                <img
                  className="shadow-md shadow-blue-900 hover:shadow-lg hover:shadow-blue-900 duration-500 h-[6rem] w-[6rem] m-auto rounded-full"
                  src={CLogo}
                  alt="NITDelhi Logo"
                />
              </a>
            </div>
            <div className="w-auto text-center">
              <p className="text-center flex-wrap text-sm mt-5">
                National Institute of Technology Delhi, Plot No. FA7, Zone P1,
                GT Karnal Road, Delhi, 110036
              </p>
            </div>
          </div>
        </div>
        <div className="waves"></div>
      </div>
    </div>
  );
};

export default Footer;
