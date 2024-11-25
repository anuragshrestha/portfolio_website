import React from "react";
import profile_image from "../assests/logos/profile-image.heic";
import "./Introduction.css";
import Typewriter from "../Typewriter";

const Introduction = () => {

  return (
    <div className="main">
      <p className="type"><Typewriter text="Welcome to My Portfolio" delay={100} infinite /></p>
      <div className="intro">
        <div className="profile-image">
          <img src={profile_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
