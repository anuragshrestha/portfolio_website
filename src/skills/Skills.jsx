import React from "react";
import "./Skills.css";
import java_logo from "../assests/logos/java-logo.png";
import python_logo from "../assests/logos/python-logo.png";
import javascript_logo from "../assests/logos/javascript-logo.png";
import typescript_logo from "../assests/logos/typescript-logo.png";
import swift_logo from "../assests/logos/swift-logo.png";
import c_logo from "../assests/logos/c-logo.png";
import react_logo from "../assests/logos/react-logo.png";
import reactnative_logo from "../assests/logos/reactnative-logo.png";
import swiftui_logo from "../assests/logos/swiftui-logo.png";
import uikit_logo from "../assests/logos/uikit-logo.png";
import nodejs_logo from "../assests/logos/nodejs_logo.png";
import expressjs_logo from "../assests/logos/expressjs_logo.png";
import mongodb_logo from "../assests/logos/mongodb_logo.png";
import aws_logo from "../assests/logos/aws_logo.png";
import firebase_logo from "../assests/logos/firebase_logo.png";

const Skills = () => {
  const languages = [
    { name: "Java", logo: java_logo },
    { name: "Python", logo: python_logo },
    { name: "JavaScript", logo: javascript_logo },
    { name: "TypeScript", logo: typescript_logo },
    { name: "Swift", logo: swift_logo },
    { name: "C", logo: c_logo },
  ];

  const frameworks = [
    { name: "React", logo: react_logo },
    { name: "ReactNative", logo: reactnative_logo },
    { name: "Swift UI", logo: swiftui_logo },
    { name: "UI Kit", logo: uikit_logo },
    { name: "Node JS", logo: nodejs_logo },
    { name: "Express JS", logo: expressjs_logo },
    { name: "MongoDB", logo: mongodb_logo },
    { name: "AWS", logo: aws_logo },
    { name: "Google Cloud FireStore", logo: firebase_logo },
  ];

  return (
    <div className="main">
      <h1 className="skills">Skills</h1>
      <div className="innercontainer">
        <div className="languages">
          <h1>Programming Languages</h1>
          <div className="language-grid">
            {languages.map((language, index) => (
              <div className="language-item" key={index}>
                <img src={language.logo} className="language-logo" alt="" />
                <p>{language.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="framewroks">
          <h1>Frameworks and Libraries</h1>
          <div className="frameworks-grid">
            {frameworks.map((framework, index) => (
              <div className="framework-item" key={index}>
                <img src={framework.logo} className="framework-logo" alt=""/>
                <p>{framework.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
