import React from "react";
import "./About.css";
import Image from "next/image";
import downloadSvg from "../../../public/DownloadSvg.svg";
import AnimatedButton from "../../../components/animated-button/AnimatedButton";
import {
  educationData,
  experienceData,
  infoData,
  skillsData,
  statsData,
} from "./meta";
import CircleProgressBar from "../../../components/circle-progress-bar/CircleProgressBar";
import experienecSvg from "../../../public/ExperienceSvg.svg";
import Experience from "../../../components/experience/Experience";

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
            <div className="skills-wrapper">
              <h1 className="skills-heading">SKILLS</h1>
              <div className="skills">
                {Object.entries(skillsData).map(([key, value], index) => {
                  return (
                    <div key={index} className="skill">
                      <CircleProgressBar value={value} text={key} />
                      <h3>{key}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="experience-education-wrapper">
              <h1 className="experience-education-heading">
                Experience & Education
              </h1>
              <div className="education-experience-content">
                <div className="experience-content">
                  {experienceData.map((item, index) => {
                    return (
                      <Experience
                        key={index}
                        company={item.Company}
                        descripiton={item.desctiption}
                        position={item.position}
                        svgImage={experienecSvg}
                        timePeriod={item.TimePeriod}
                      />
                    );
                  })}
                </div>
                <div className="education-content">
                  {educationData.map((item, index) => {
                    return (
                      <Experience
                        key={index}
                        company={item.institute}
                        descripiton={item.description}
                        position={item.degreeName}
                        svgImage={experienecSvg}
                        timePeriod={item.date}
                      />
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
