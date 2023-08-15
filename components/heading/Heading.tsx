import React from "react";
import './Heading.css'

type HeadingPropTypes={
  heading:string,
  headingSpan:string,
  backgroundText:string
}

const Heading = ({heading,headingSpan,backgroundText}:HeadingPropTypes) => {
  return (
    <div className="main-heading">
      <h1 className="heading">
        {heading} <span className="heading-span">{headingSpan}</span>
      </h1>
      <h1 className="header-background">{backgroundText}</h1>
    </div>
  );
};

export default Heading;
