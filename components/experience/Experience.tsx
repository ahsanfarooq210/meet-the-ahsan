import React from "react";
import "./Experience.css";
import Image from "next/image";

const Experience = ({
  svgImage,
  position,
  company,
  timePeriod,
  descripiton,
}: {
  svgImage: any;
  position: string;
  company: string;
  timePeriod: string;
  descripiton: string;
}) => {
  return (
    <div className="experience">
      <div style={{ height: "100%" }}>
        <span className="icon">
          <Image
            src={svgImage}
            alt="Experience"
            className="experience-icon"
          />
        </span>
      </div>

      <div className="info">
        <p className="time-period">{timePeriod}</p>
        <p className="position">
          <span>{position}</span> - {company}
        </p>
        <p className="description">
          {descripiton}
        </p>
      </div>
    </div>
  );
};

export default Experience;
