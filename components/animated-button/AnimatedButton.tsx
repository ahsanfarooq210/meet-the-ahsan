import React from "react";
import "./AnimatedButton.css";
import Image from "next/image";

const AnimatedButton = ({buttonText,image}:{buttonText:string,image:any}) => {
  return (
    <button className="cv-button">
      <div className="cv-button-content">
        <p className="paragraph">{buttonText}</p>
        <div className="image-container">
          <Image width={20} height={20} src={image} alt="Download" />
        </div>
      </div>
    </button>
  );
};

export default AnimatedButton;
