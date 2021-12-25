import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import "./body.css";

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
          </nav>
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
              Former System Engineer at Infosys Ltd, Pune, with 2.5 years of
              experience both as a frontend and backend developer in the IT
              industry. Currently looking for opportunities as a ReactJS
              Developer.
              <br></br>
              <br></br>
            </p>
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
                  style={{ textDecoration: "none", color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/SnehashisWalk"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
            <p className="email-h">
              Email: <span className="email">slenka321@gmail.com</span>
            </p>
          </div>
        </section>
        <section id="ex" className="experience-section">
          <div className="section-heading">
            <h1 className="work-ex-heading">WORK EXPERIENCE</h1>
          </div>
          <div className="experience-content-block">
            <div className="experience-content-left">
              <div className="experience-heading d-none d-sm-block">
                <h1 style={{ textTransform: "uppercase" }}>Infosys Ltd.</h1>
              </div>
              <div className="experience-sub-heading d-none d-sm-block">
                <h2>System Engineer</h2>
              </div>
              <div className="exp-header sm-toggle">
                <div className="exp-header-left">
                  <div className="experience-heading">
                    <h1 style={{ textTransform: "uppercase" }}>Infosys Ltd.</h1>
                  </div>
                  <div className="experience-sub-heading">
                    <h2>System Engineer</h2>
                  </div>
                  <div className="experience-dates-sm">
                    <h3>May 2019 - Sept. 2021</h3>
                  </div>
                </div>
                <div className="exp-header-right">
                  <div className="experience-company-img ">
                    <img src="infosys.svg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="experience-info">
                <ul style={{ marginLeft: "1.1rem", padding: 0 }}>
                  <li className="list-item">
                    Worked in Oracle EBS HR domain team for Westpac, Australia.
                  </li>
                  <li className="list-item">
                    Worked on PeopleXpress, HR portal for Westpac employees,
                    wrote backend procedures in PL/SQL.
                  </li>
                  <li className="list-item">
                    Created Control-M jobs and UNIX shellscripts to automate the
                    transfer of daily reports to downstream team.
                  </li>
                  <li className="list-item">
                    Acted as DevOps Point-of-contact (POC) for deployments of
                    projects via Bitbucket, Jenkins, Artifactory, Control-M, and
                    raised Servicenow change requests (CRQ) for project
                    deployments.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-content-right d-none d-sm-block">
              <div className="experience-dates ">
                <h3>May 2019 - Sept 2021</h3>
              </div>
              <div className="experience-company-img ">
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
                <h1 className="education-heading d-none d-sm-block">
                  Silicon Institute of Technology, Bhubaneswar
                </h1>
              </div>
              <div>
                <h2 className="education-sub-heading d-none d-sm-block">
                  Bachelor of Technology in Applied Electronics and
                  Instrumentation Engineering
                </h2>
              </div>
              <div className="exp-header sm-toggle">
                <div className="exp-header-left">
                  <h1 className="education-heading">
                    Silicon Institute of Technology, Bhubaneswar
                  </h1>
                </div>
                <div className="exp-header-right">
                  <div className="experience-company-img ">
                    <img src="sit-logo.svg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="sm-toggle">
                <h2 className="edu-sub-heading ">
                  Bachelor of Technology in Applied Electronics and
                  Instrumentation Engineering
                </h2>

                <h3 className="edu-dates-sm">Aug. 2015 - April 2019</h3>

                <h3 className="edu-cgpa-sm">
                  <span>CGPA: </span>8.27 / 10.0
                </h3>
              </div>
            </div>
            <div className="experience-content-right d-none d-sm-block">
              <div className="experience-dates">
                <h3>Aug. 2015 - April 2019</h3>
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
              <div className="experience-heading d-none d-sm-block">
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
              {/* projects heading for sm devices */}
              <div className="exp-header sm-toggle">
                <div className="exp-header-left">
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
                <div className="exp-header-right">
                  <div className="experience-company-img">
                    <img src="music_store.png" alt="img" />
                  </div>
                </div>
              </div>
              {/************** */}
              <div className="experience-info">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li className="list-item">
                    ➔ Developed an E-Commerce app using MERN stack, used React
                    Router for routing, used React Bootstrap for styling and
                    making it mobile and web responsive, hosted the DB on
                    MongoDB Atlas, hosted backend on Heroku and frontend via
                    Netlify.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-content-right d-none d-sm-block">
              <div className="experience-company-img">
                <img src="music_store.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="experience-content-block">
            <div className="experience-content-left">
              <div className="experience-heading d-none d-sm-block">
                <a href="https://stupefied-nightingale-3394de.netlify.app/">
                  <h1 style={{ textTransform: "uppercase" }}>
                    Movie Booking App: BookMyTicket
                  </h1>
                </a>
              </div>
              {/* projects heading for sm devices */}
              <div className="exp-header sm-toggle">
                <div className="exp-header-left">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://stupefied-nightingale-3394de.netlify.app/"
                  >
                    <h1 style={{ textTransform: "uppercase" }}>
                      Movie Booking App: BookMyTicket
                    </h1>
                  </a>
                </div>
                <div className="exp-header-right">
                  <div className="experience-company-img">
                    <img src="bookmyticket.png" alt="img" />
                  </div>
                </div>
              </div>
              {/************** */}
              <div className="experience-info">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li className="list-item">
                    ➔ Developed a movie booking app on MERN stack, created an
                    interface where the user can select seats as per choice,
                    select language, day and time of the show.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-content-right d-none d-sm-block">
              <div className="experience-company-img">
                <img src="bookmyticket.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="experience-content-block">
            <div className="experience-content-left">
              <div className="experience-heading d-none d-sm-block">
                <a href="https://awesome-hodgkin-8cf064.netlify.app/">
                  <h1 style={{ textTransform: "uppercase" }}>
                    Social Media App: FriendsBay
                  </h1>
                </a>
              </div>
              {/* projects heading for sm devices */}
              <div className="exp-header sm-toggle">
                <div className="exp-header-left">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://awesome-hodgkin-8cf064.netlify.app/"
                  >
                    <h1 style={{ textTransform: "uppercase" }}>
                      Social Media App: FriendsBay
                    </h1>
                  </a>
                </div>
                <div className="exp-header-right">
                  <div className="experience-company-img">
                    <img src="friendsbay.png" alt="img" />
                  </div>
                </div>
              </div>
              {/************** */}
              <div className="experience-info">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li className="list-item">
                    ➔ Developed a social media app, where the user can create
                    new posts, post it on timeline, like others post. The app is
                    created on MERN stack.
                  </li>
                </ul>
              </div>
            </div>
            <div className="experience-content-right d-none d-sm-block">
              <div className="experience-company-img">
                <img src="friendsbay.png" alt="img" />
              </div>
            </div>
          </div>
          {/* <div className="experience-content-block">
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
          </div> */}
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
              React.js
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
          <h5 className="section-footer-text">
            Made with <span style={{ color: "#e74c3c" }}>&hearts;</span> in
            India
          </h5>
        </section>
      </div>
    </div>
  );
}
