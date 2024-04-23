import React from "react";
import TeamCard from "./TeamCard";
import sadiq from "../images/Sadiq Ahmed.jpg";
import antriksha from "../images/Antriksha Sharma.png";
import rupashi from "../images/Rupashi Sharma.jpg";
import ishita from "../images/ishitagupta.jpg";
import saachi from "../images/Saachi.png";
import tanishq from "../images/tanishq.jpg";
import sharanya from "../images/Sharanya Singhal.jpg";

const Volunteers = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <TeamCard
          name="Sadiq Ahmed"
          desig="Volunteer"
          img={sadiq}
          linkedin=""
          insta=""
        />
        <TeamCard
          name="Antriksha Sharma"
          desig="Volunteer"
          img={antriksha}
          linkedin="https://www.linkedin.com/in/dgs-g/"
          insta="https://www.instagram.com/dgs_g/"
        />
        <TeamCard
          name="Rupashi Sharma"
          desig="Volunteer"
          img={rupashi}
          linkedin="https://www.linkedin.com/in/dgs-g/"
          insta="https://www.instagram.com/dgs_g/"
        />
        <TeamCard
          name="Ishita Gupta"
          desig="Volunteer"
          img={ishita}
          linkedin="https://www.linkedin.com/in/dgs-g/"
          insta="https://www.instagram.com/dgs_g/"
        />
        <TeamCard
          name="Saachi"
          desig="Volunteer"
          img={saachi}
          linkedin="https://www.linkedin.com/in/dgs-g/"
          insta="https://www.instagram.com/dgs_g/"
        />
        <TeamCard
          name="Tanishq Deendayal"
          desig="Volunteer"
          img={tanishq}
          linkedin="https://www.linkedin.com/in/dgs-g/"
          insta="https://www.instagram.com/dgs_g/"
        />
        <TeamCard
          name="Sharanya Singhal"
          desig="Volunteer"
          img={sharanya}
          linkedin="https://www.linkedin.com/in/dgs-g/"
          insta="https://www.instagram.com/dgs_g/"
        />
      </div>
    </div>
  );
};

export default Volunteers;
