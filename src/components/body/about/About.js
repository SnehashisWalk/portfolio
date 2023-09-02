import "./about.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="right-wrapper-top">
        <h1 className="title text-secondary">
          SNEHASHIS <span className="text-primary">LENKA</span>
        </h1>
      </div>
      <br></br>
      <div className="short-bio-wrapper">
        <h3 className="short-bio">
        Graduate Student at Northeastern University, Boston | MS in Information Systems
        </h3>
      </div>
      <div className="bio-wrapper">
        <p id="bio">
          {/* Fullstack developer with 3 years of experience in building cloud
          native web applications. */}
          {/* Current Tech stack: React JS on frontend, SpringBoot on backend, AWS
          for cloud deployments */}
          Java | React.js | Node.js | AWS | Machine Learning
          <br></br>
        </p>
        <ul className="links">
          <li className="link-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/slenka27/"
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
          Email: <span className="email">lenka.s@northeastern.com</span>
        </p>
      </div>
    </section>
  );
};

export default About;
