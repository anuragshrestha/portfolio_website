import React from "react";
import "./Headers.css";
import linkedin_logo from "../assests/logos/linkedin.png";
import github_logo from "../assests/logos/github.png";
import instagram_logo from "../assests/logos/instagram.png";
import { Link } from "react-scroll";

const Headers = () => {
  const navigateTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="headers">
      <div className="headers-left">
        <nav>
          <ul>
            <li>
              <Link to="about" smooth={true} duration={300}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={300}>
                Skills
              </Link>
            </li>
            <li>
              {" "}
              <Link to="experience" smooth={true} duration={300}>
                Experience
              </Link>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
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
