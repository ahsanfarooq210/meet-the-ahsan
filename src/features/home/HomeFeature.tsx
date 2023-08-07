import React from "react";
import "./HomeFeature.css";
import Menu from "./components/menu/Menu";

const HomeFeature = () => {
  return (
    <div className="home">
      <div className="div1">
        <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW4lMjBzdWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" />
      </div>

      <div className="div2">
        <div className="description-content">
          <h3 className="greetings">Hi There</h3>
          <h1>
            I am <span className="name">Muhammad Ahsan Farooq</span>
          </h1>
          <p className="description">
            I'm a Freelance Web Designer & Developer based in Tunisia with 5+
            years experience, I'm Highly experienced in designing & developing
            custom web & mobile apps with multiple technologies.
          </p>
        </div>
      </div>
      <div className="menu" >
        <Menu/>
      </div>
    </div>
  );
};

export default HomeFeature;
