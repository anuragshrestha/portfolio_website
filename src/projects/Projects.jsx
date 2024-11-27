import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Money Pal -",
      github:'https://github.com/anuragshrestha/MoneyPal',
      demo:" UNM App Contest Finalist ",
      task: [
        "Design and developed a cross - platform mobile app that allows financially unstable students to borrow small amount of money with a minimal interest rate, to manage their day to day living expenses.",
        "Built the frontend of the app using React Native and TypeScript, developed the backend and APIs with Node.js and Express.js for interest rate calculations, and securely stored user data in Google Cloud Firestore.",
      ],
    },
    {
      name: "CloudMart - ",
      github:'https://github.com/anuragshrestha/CloudMart',
      demo:" Personal Project ",
      task: [
        "Built a full-stack e-commerce website enabling users to browse and purchase from a wide selection of products.",
        "Utilized React for a dynamic user interface, Node.js and Express.js for server side and API management, and MongoDB for scalable data storage to handle user accounts, product information",
      ],
    },
    {
      name: "Network Domino Game ",
      github:'https://github.com/anuragshrestha/Networked-Domino-Game',
      demo:"",
      task: [
        "Created a networked domino game that supports multiple human players on separate computers within the same network, providing real-time updates to ensure synchronization across all players, seamless game state transitions.",
        "Implemented Java for both client and server-side development, utilizing multithreading and socket programming to communicate with other player’s at real time, effciently manage game state, and robust server- client architecture.",
      ],
    },
  ];

  const navigetTo = (url) => {
    window.open(url, "_blank");
  }

  return (
    <div className="projects-main">
      <h1 className="project">Projects</h1>
      <div className="projects-innercontainer">
        <div className="projects-details">
          {projects.map((project, index) => (
            <>
              <div className="projectname" key={index}>
                <p className="proj-name">{project.name}</p>
                <p className="proj-demo" >{project.demo}</p>
                <p  className="github-link" onClick={() => navigetTo(project.github)}> | GitHub Link|</p>
              </div>
              <div className="proj-tasks">
                <ul>
                  {project.task.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
