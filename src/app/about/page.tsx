import React from "react";
import "./About.css";

const infoData: { [key: string]: string } = {
  "First Name": "Muhammad Ahsan Farooq",
  Address: "Pakistan, Punjab, Lahore",
  "Last Name": "Milner",
  Phone: "+21621184010",
  Age: "27 Years",
  Email: "you@mail.com",
  Nationality: "Tunisian",
  Skype: "steve.milner",
  Freelance: "Available",
  Langages: "French, English",
};

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <div className="about-main-heading">
          <h1 className="heading">
            ABOUT <span className="about-us-heading-span">ME</span>
          </h1>
          <h1 className="header-background">Resume</h1>
        </div>
        <div className="about-content-wrapper">
          <div className="about-coontent-content">
            <div className="personal-info-wrapper">
              <h1 className="personal-info-heading">PERSONAL INFOS</h1>
              <div className="info-wrapper">
                <div className="info">
                  
                </div>

                <div className="stats"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
