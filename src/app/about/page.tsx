import React from "react";
import "./About.css";
import Image from "next/image";
import downloadSvg from "../../../public/DownloadSvg.svg";
import AnimatedButton from "../../../components/animated-button/AnimatedButton";

const infoData: { [key: string]: string } = {
  "First Name": "Ahsan",
  Address: "Pakistan, Punjab, Lahore",
  "Last Name": "Farooq",
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
              <div className="info-stats-wrapper">
                <div className="info-wrapper">
                  <div className="info">
                    {Object.entries(infoData).map(([key, value], index) => {
                      return (
                        <p className="info-paragraph" key={index}>
                          {key} : <span>{value}</span>
                        </p>
                      );
                    })}
                  </div>
                  <div className="cv-button-container">
                    <AnimatedButton
                      buttonText="Download CV"
                      image={downloadSvg}
                    />
                  </div>
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
