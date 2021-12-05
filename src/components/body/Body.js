import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import "./body.css";

export default function Body() {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   const target = e.target.getAttribute("href");
  //   const location = document.querySelector(target).offsetTop;

  //   console.log(location);
  //   window.scroll({
  //     left: 0,
  //     top: location,
  //     behavior: 'smooth'
  //   });
  // };

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
          </nav>
          {/* <ul className="sidebar-list">
            <li className="sidebar-item">
              <a
                style={{ textDecoration: "none" }}
                href="#about"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li className="sidebar-item">
              <a
                style={{ textDecoration: "none" }}
                href="#ex"
                onClick={handleClick}
              >
                Experience
              </a>
            </li>

            <li className="sidebar-item">
              <a
                style={{ textDecoration: "none" }}
                href="#edu"
                onClick={handleClick}
              >
                Education
              </a>
            </li>

            <li className="sidebar-item">
              <a
                style={{ textDecoration: "none" }}
                href="#proj"
                onClick={handleClick}
              >
                Projects
              </a>
            </li>

            <li className="sidebar-item">
              <a
                style={{ textDecoration: "none" }}
                href="#skills"
                onClick={handleClick}
              >
                Skills
              </a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="right-wrapper">
        <section id="about" className="about-section">
          <div className="right-wrapper-top">
            <h1 className="title text-secondary">
              SNEHASHIS <span className="text-primary">LENKA</span>
            </h1>
          </div>
          <div className="short-bio-wrapper">
            <h3 className="short-bio">
              MERN STACK DEVELOPER | JAVASCRIPT | REACT JS | NODE JS{" "}
            </h3>
          </div>
          <div className="bio-wrapper">
            <p id="bio">
              A Developer with strong passion for self-improvement. I have
              strong Problem Solving skills & bring energy, patience, positivity
              and cultural values to the team.
              <br></br>
              <br></br>
            </p>
            {/* <div className="skills-list-body">
              <h2>SKILLS</h2>
              <ul className="skills-list">
                <li>
                  <h3>React JS</h3>
                </li>
                <li>
                  <h3>Node JS</h3>
                </li>
                <li>
                  <h3>Mongo DB</h3>
                </li>
                <li>
                  <h3>Express JS</h3>
                </li>
                <li>
                  <h3>MySQL</h3>
                </li>
              </ul>
            </div> */}
            <ul className="links">
              <li className="link-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/snehashislenka321/"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="link-item">
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/SnehashisWalk"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="img-container">
            <img className="img" src="design2.svg" alt="img" />
          </div> */}
          {/* <div className="img-container2">
            <img className="img2" src="design2.svg" alt="img" />
          </div> */}
          {/* <div className="img-container3">
            <img className="img3" src="gold-design1.svg" alt="img" />
          </div> */}
        </section>
        <section id="ex" className="experience-section">
          <div className="section-heading">
            <h1 className="work-ex-heading">WORK EXPERIENCE</h1>
          </div>
          <div className="experience-content-block">
            <div className="experience-content-left">
              <div className="experience-heading">
                <h1 style={{ textTransform: "uppercase" }}>System Engineer</h1>
              </div>
              <div className="experience-sub-heading">
                <h2>Infosys</h2>
              </div>
              <div className="experience-info">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li className="list-item">Worked as a PL/SQL developer.</li>
                  <li className="list-item">
                    Deployment and Environment support, raised ServiceNow change
                    requests for deployment.
                  </li>
                  <li className="list-item">
                    Created Control-M jobs to automate the transfer of daily
                    reports to downstream team.
                  </li>
                  <li className="list-item">
                    Worked with a team of 3 developers to create a Knowledge
                    Transfer portal for the new joinees in the team using React.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-content-right">
              <div className="experience-dates">
                <h3>May 2019 - Sept 2021</h3>
              </div>
              <div className="experience-company-img">
                <img src="infosys.svg" alt="img" />
              </div>
            </div>
          </div>
          {/* <div className="img-container4">
            <img className="img4" src="exp-design2.svg" alt="img" />
          </div> */}
        </section>
        {/*******************************************/
        /************** EDUCATION SECTION ***********/
        /********************************************/}
        <section id="edu" className="education-section">
          <div className="section-heading">
            <h1 className="work-ex-heading">EDUCATION</h1>
          </div>
          <div className="experience-content-block">
            <div className="experience-content-left">
              <div>
                <h1 className="education-heading">
                  Silicon Institute of Technology, Bhubaneswar
                </h1>
              </div>
              <div>
                <h2 className="education-sub-heading">
                  Bachelor of Technology in Applied Electronics and
                  Instrumentation Engineering
                </h2>
              </div>
            </div>
            <div className="experience-content-right">
              <div className="experience-dates">
                <h3>Aug 2015 - April 2019</h3>
              </div>
              {/* <div className="experience-company-img">
                <img src="infosys.svg" alt="img" />
              </div> */}
            </div>
          </div>
          {/* <div className="img-container4">
            <img className="img4" src="exp-design2.svg" alt="img" />
          </div> */}
        </section>
        <section id="proj" className="projects-section">
          <div className="section-heading">
            <h1 className="work-ex-heading">PROJECTS</h1>
          </div>
          <div className="experience-content-block">
            <div className="experience-content-left">
              <div className="experience-heading">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://objective-bhabha-04b53e.netlify.app/"
                >
                  <h1 style={{ textTransform: "uppercase" }}>
                    MERN E-commerce App: Music Store
                  </h1>
                </a>
              </div>
              <div className="experience-sub-heading"></div>
              <div className="experience-info">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li className="list-item">
                    E-commerce application made on MERN stack.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-content-right">
              <div className="experience-company-img">
                <img src="music_store.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="experience-content-block">
            <div className="experience-content-left">
              <div className="experience-heading">
                <a href="#6">
                  <h1 style={{ textTransform: "uppercase" }}>
                    Movie Booking App: BookMyTicket
                  </h1>
                </a>
              </div>
              <div className="experience-sub-heading"></div>
              <div className="experience-info">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li className="list-item">
                    Movie ticket booking application made on MERN stack.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-content-right">
              <div className="experience-company-img">
                <img src="bookmyticket.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="experience-content-block">
            <div className="experience-content-left">
              <div className="experience-heading">
                <a href="#4">
                  <h1 style={{ textTransform: "uppercase" }}>
                    Social Media App: FriendsBay
                  </h1>
                </a>
              </div>
              <div className="experience-sub-heading"></div>
              <div className="experience-info">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li className="list-item">
                    Social media application made on MERN stack.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-content-right">
              <div className="experience-company-img">
                <img src="friendsbay.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="experience-content-block">
            <div className="experience-content-left">
              <div className="experience-heading">
                <a href="#1">
                  <h1 style={{ textTransform: "uppercase" }}>
                    Music Visualizer App
                  </h1>
                </a>
              </div>
              <div className="experience-sub-heading"></div>
              <div className="experience-info">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li className="list-item">
                    Music Visualizer application made on MERN stack, using Web
                    Audio API for beautiful visualizations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-content-right">
              <div className="experience-company-img">
                <img src="animemusic.png" alt="img" />
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="skills-section">
          <div className="section-heading">
            <h1 className="work-ex-heading">SKILLS</h1>
          </div>
          <div className="skills-heading">
            <h1 style={{ textTransform: "uppercase" }}>
              Programming Languages
            </h1>
          </div>
          <ul className="skills-subheading">
            <li className="list-item">
              <img className="item-img" src="js.svg" alt="js" />
              JavaScript
            </li>
            <li className="list-item">
              <img className="item-img" src="java.svg" alt="java" />
              Java
            </li>
            <li className="list-item">
              <img className="item-img" src="python.svg" alt="python" />
              Python
            </li>
          </ul>
          <div className="skills-heading">
            <h1 style={{ textTransform: "uppercase" }}>
              Database Technologies
            </h1>
          </div>
          <ul className="skills-subheading">
            <li className="list-item">
              <img className="item-img" src="mysql.svg" alt="mysql" />
              MySQL
            </li>
            <li className="list-item">
              <img className="item-img" src="mongodb.svg" alt="mongodb" />
              MongoDB
            </li>
            <li className="list-item">
              <img className="item-img" src="oracle.svg" alt="oracle" />
              Oracle
            </li>
          </ul>
          <div className="skills-heading">
            <h1 style={{ textTransform: "uppercase" }}>
              Web Development and Frameworks
            </h1>
          </div>
          <ul className="skills-subheading web">
            <li className="list-item">
              <img className="item-img" src="html.svg" alt="html" />
              HTML
            </li>
            <li className="list-item">
              <img className="item-img" src="css.svg" alt="css" />
              CSS
            </li>
            <li className="list-item">
              <img className="item-img" src="nodejs.svg" alt="nodejs" />
              Node.js
            </li>
            <li className="list-item">
              <img className="item-img" src="bootstrap.svg" alt="bootstrap" />
              Bootstrap
            </li>
            <li className="list-item">
              <img className="item-img" src="react.svg" alt="react" />
              React
            </li>
            <li className="list-item">
              <img className="item-img" src="express.svg" alt="express" />
              Express.js
            </li>
          </ul>
          <div className="skills-heading">
            <h1 style={{ textTransform: "uppercase" }}>Dev Ops</h1>
          </div>
          <ul className="skills-subheading">
            <li className="list-item">
              <img className="item-img" src="git.png" alt="git" />
              Git
            </li>
            <li className="list-item">
              <img className="item-img" src="heroku.png" alt="heroku" />
              Heroku
            </li>
            <li className="list-item">
              <img className="item-img" src="netlify.png" alt="netlify" />
              Netlify
            </li>
            <li className="list-item">
              <img className="item-img" src="jenkins.png" alt="jenkins" />
              Jenkins
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
