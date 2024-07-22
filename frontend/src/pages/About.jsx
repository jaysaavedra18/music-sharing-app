import React from "react";

export const About = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Me</h1>
      <div style={{ marginTop: "20px" }}>
        <p>
          Hello! I'm Jason Saavedra, a passionate software developer with a
          focus on creating innovative solutions and enhancing user experiences.
          With a degree in Computer Science from Purdue University, my
          background spans various programming languages and technologies,
          including JavaScript, Python, React, Django, and AWS.
        </p>
        <h2 style={{ margin: "20px 0 20px 0" }}>What I Do</h2>
        <p>
          I specialize in full-stack development and have experience working on
          diverse projects, from building social media platforms like Weallison
          to designing intuitive user interfaces for university housing
          applications. My technical skills are complemented by a strong
          problem-solving ability and a commitment to continuous learning.
        </p>
        <h2 style={{ margin: "20px 0 20px 0" }}>My Projects</h2>
        <ul>
          <li>
            <strong>Weallison</strong>: Developed a full-stack social media
            platform for music sharing with custom React components and a secure
            Django backend.
          </li>
          <li>
            <strong>Java Database</strong>: Contributed to a simplified database
            management system with robust functionalities in Java.
          </li>
          <li>
            <strong>LivIn</strong>: Designed a university housing finder with a
            responsive frontend and secure backend using Vue.js and Google
            Firebase.
          </li>
          <li>
            <strong>XINU</strong>: Enhanced an operating system with new
            functionalities and optimized performance using C and assembly.
          </li>
        </ul>
        <h2 style={{ margin: "20px 0 20px 0" }}>Connect with Me</h2>
        <p>Feel free to reach out or follow my work on these platforms:</p>
        <ul>
          <li>
            <a
              href="https://github.com/jaysaavedra18"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jason-saavedra-software-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jasonsaavedra_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
