import React from "react";
import './ImageOverlay.css'

const ImageOverlay = () => {
  return (
    <div className="box">
      <div className="box__right">Right → Left</div>
      <div className="box__left">Left → Right</div>
      <div className="box__top">Top → Bottom</div>
      <div className="box__bottom">Bottom → Top</div>
      <div className="box__center">Hover from any side</div>
    </div>
  );
};

export default ImageOverlay;
