import React from "react";
import './CircleProgressBar.css'

type CircleProgressBarPropType = {
  value: number;
  text: string;
};

const CircleProgressBar = ({ value, text }: CircleProgressBarPropType) => {
  return (
    <div className={`progress-circle over50 p${value}`}>
      <span>{value}%</span>
      <div className="left-half-clipper">
        <div className="first50-bar" />
        <div className="value-bar" />
      </div>
    </div>
  );
};

export default CircleProgressBar;
