import React from "react";
import "./Headers.css";
import linkedin_logo from "../assests/logos/linkedin.png";
import github_logo from "../assests/logos/github.png";
import instagram_logo from "../assests/logos/instagram.png";

const Headers = () => {
  const navigateTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="headers">
      <div className="headers-left">
        <h1>About</h1>
        <h1>Skills</h1>
        <h1>Experience</h1>
        <h1>Projects</h1>
      </div>
      <img
        src={linkedin_logo}
        alt=""
        onClick={() =>
          navigateTo("https://www.linkedin.com/in/anuragshrestha19/")
        }
      />
      <img
        src={github_logo}
        alt=""
        onClick={() => navigateTo("https://github.com/anuragshrestha")}
      />
      <img
        src={instagram_logo}
        alt=""
        onClick={() =>
          navigateTo("https://www.instagram.com/_anurag_shrestha_/")
        }
      />
    </div>
  );
};

export default Headers;
