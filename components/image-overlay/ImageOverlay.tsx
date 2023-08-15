import React from "react";
import "./ImageOverlay.css";

type ImageOverlayPropType = {
  image: string;
  text: string;
};

const ImageOverlay = ({ image, text }: ImageOverlayPropType) => {
  return (
    <div className="box">
      <div className="box__right">{text}</div>
      <div className="box__left">{text}</div>
      <div className="box__top">{text}</div>
      <div className="box__bottom">{text}</div>
      <img className="box__center" src={image} alt="project" />
    </div>
  );
};

export default ImageOverlay;
