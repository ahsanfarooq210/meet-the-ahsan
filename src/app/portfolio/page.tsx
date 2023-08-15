import React from "react";
import ImageOverlay from "../../../components/image-overlay/ImageOverlay";
import "./Portfolio.css";
import Heading from "../../../components/heading/Heading";
import { projectsMeta } from "./meta";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-content">
        <Heading heading="MY" headingSpan="PORTFOLIO" backgroundText="WORK" />
        <div className="project-showcase">
            {projectsMeta.map((item,index)=>{
                return <ImageOverlay key={index} image={item.image} text={item.name} />
            })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
