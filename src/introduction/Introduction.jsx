import React from "react";
import profile_image from "../assests/logos/profile-image.heic";
import "./Introduction.css";
import Typewriter from "../Typewriter";

const Introduction = () => {
  return (
    <div className="main">
      <p className="type">
        <Typewriter text="Welcome to My Portfolio   " delay={100} infinite />
      </p>
      <div className="intro">
        <div className="profile-image">
          <img src={profile_image} alt="" />
        </div>
        <div className="intro-text">
          <h1>Hi Everyone,</h1>
          <p>
            My name is Anurag Shrestha, and I am a Junior Computer Science
            student at the University of New Mexico. Currently, I am working as a Software
            Engineering Intern at Lasaria, an AI startup, where I work in the mobile
            application development. I have a solid foundation in building
            mobile applications with React Native and Swift, along with a strong
            background in full-stack development. Beyond coding, I enjoy going
            for drives, reading entrepreneurship books, and exploring investment
            opportunities in the stock market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
