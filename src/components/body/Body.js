import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import About from "./about/About";
import "./body.css";
import Certifications from "./certification/Certifications";
import Education from "./education/Education";
import WorkExperience from "./experience/WorkExperience";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

export default function Body() {
  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="wrapper">
      {/************ SIDEBAR CONTENT **********/}
      <div className="sidebar">
        <div className="sidebar-top">
          <img className="dp" src="dp2.jpg" alt="dp" />
        </div>
        <div className="sidebar-content">
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            <a className="sidebar-link" href="#about" onClick={handleClick}>
              About
            </a>
            <a className="sidebar-link" href="#ex" onClick={handleClick}>
              Experience
            </a>
            <a className="sidebar-link" href="#edu" onClick={handleClick}>
              Education
            </a>
            <a className="sidebar-link" href="#proj" onClick={handleClick}>
              Projects
            </a>
            <a className="sidebar-link" href="#skills" onClick={handleClick}>
              Skills
            </a>
            <a className="sidebar-link" href="#cert" onClick={handleClick}>
              Certifications
            </a>
          </nav>
        </div>
      </div>
      <div className="right-wrapper">
        <About />
        <WorkExperience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
      </div>
    </div>
  );
}
