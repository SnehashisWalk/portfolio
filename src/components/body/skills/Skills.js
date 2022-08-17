import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <h1 className="work-ex-heading">SKILLS</h1>
      </div>
      <div className="skills-heading">
        <h1 style={{ textTransform: "uppercase" }}>Programming Languages</h1>
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
        <li className="list-item">
          <img className="item-img" src="kotlin.png" alt="python" />
          Kotlin
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
          <img className="item-img" src="spring.svg" alt="spring boot" />
          Spring Boot
        </li>
      </ul>
      {/* Cloud */}
      <div className="skills-heading">
        <h1 style={{ textTransform: "uppercase" }}>Cloud and Devops</h1>
      </div>
      <ul className="skills-subheading devops">
        <li className="list-item">
          <img className="item-img" src="aws.svg" alt="aws" />
          AWS
        </li>
        <li className="list-item">
          <img className="item-img" src="terraform.svg" alt="terraform" />
          Terraform
        </li>
        <li className="list-item">
          <img className="item-img" src="docker.png" alt="docker" />
          Docker
        </li>
        <li className="list-item">
          <img className="item-img" src="git.png" alt="git" />
          Git
        </li>
        <li className="list-item">
          <img className="item-img" src="jenkins.png" alt="jenkins" />
          Jenkins
        </li>
        <li className="list-item">Shell Scripting</li>
      </ul>
      {/* Android Development */}
      <div className="skills-heading">
        <h1 style={{ textTransform: "uppercase" }}>
          Android Development and Frameworks
        </h1>
      </div>
      <ul className="skills-subheading">
        <li className="list-item">
          <img className="item-img" src="android.svg" alt="mysql" />
          Android SDK
        </li>
        <li className="list-item">
          <img className="item-img" src="react-native.svg" alt="mongodb" />
          React Native
        </li>
      </ul>
      {/* Database */}
      <div className="skills-heading">
        <h1 style={{ textTransform: "uppercase" }}>Database Technologies</h1>
      </div>
      <ul className="skills-subheading db">
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
    </section>
  );
};

export default Skills;
