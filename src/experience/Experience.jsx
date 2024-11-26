import React from "react";
import "./Experience.css";

const Experience = () => {
  const Experiences = [
    {
      name: "Lasaria, Inc",
      title: "Software Engineering Intern",
      date: "Sep 2024 - Present",
      location: "Washington, D.C.",
      tasks: [
        "Developed a high-performance streaming API architecture, boosting streaming efficiency from 91% to 97%.",
        "Optimized artist workflows by reducing track and album upload time from 20 seconds to 8 seconds.",
        "Wrote thousands of lines of code using React Native to build and optimize the tracks and albums user interface, greatly enhancing app performance.",
      ],
    },
    {
      name: "UNM Information Technology",
      title: "IT Technical Student Specialist",
      date: "Feb 2023 - Present",
      location: "Albuquerque, NM",
      tasks: [
        "Monitoring university network issues such as glitches and firewall requests, while overseeing software related tasks to ensure the seamless operation of IT services across the campus.",
        "Streamlining network transitions at the University of New Mexico, improving performance, security, and managing VLANs and static IPs across multiple networks.",
      ],
    },
    {
      name: "Lobo Motorsports",
      title: "Software Engineering Intern",
      date: "Sep 2023 - Dec 2023",
      location: "Albuquerque, NM",
      tasks: [
        "Collaborated with a team of 15 software engineers to design and develop high-performance software for the electric powertrain control system of a Formula-1 style electric vehicle, enhancing system efficiency and reliability for global competition against top universities.",
      ],
    },
  ];

  return (
    <div className="experience-main">
      <h1 className="experience">Experiences</h1>
      <div className="experience-innercontainer">
        <div className="experience-details">
          {Experiences.map((experience, index) => (
            <>
              <div className="companyname" key={index}>
                <p className="exp-name">{experience.name}</p>
                <p className="exp-date">{experience.date}</p>
              </div>
              <div className="exp-title" key={index}>
                <p className="exp-position">{experience.title}</p>
                <p className="exp-location">{experience.location}</p>
              </div>
              <div className="exp-tasks">
                <ul>
                  {experience.tasks.map((task, index) => (
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

export default Experience;
