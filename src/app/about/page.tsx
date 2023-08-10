import React from "react";
import "./About.css";
import Image from "next/image";
import downloadSvg from "../../../public/DownloadSvg.svg";
import AnimatedButton from "../../../components/animated-button/AnimatedButton";
import { infoData, statsData } from "./meta";



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
                <div className="stats">
                  {Object.entries(statsData).map(([key, value], index) => {
                    return (
                      <div key={index} className="stats-wrapper">
                        <h1 className="stat-numbers">{key}</h1>
                        <p className="stat-description">{value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
