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
          <img className="item-img" src="ts-logo-256.svg" alt="typescript" />
          TypeScript
        </li>
        <li className="list-item">
          <img className="item-img" src="swift-icon.svg" alt="swift" />
          Swift
        </li>
        <li className="list-item">
          <img className="item-img" src="swiftui.svg" alt="swiftui" />
          SwiftUI
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
          HTML5
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
          <img className="item-img" src="sass-1.svg" alt="sass" />
          SASS
        </li>
        <li className="list-item">
          <img className="item-img" src="react.svg" alt="react" />
          React.js
        </li>
        <li className="list-item">
          <img className="item-img" src="redux.svg" alt="redux" />
          Redux
        </li>
        <li className="list-item">
          <img className="item-img" src="webpack.svg" alt="webpack" />
          Webpack
        </li>
        <li className="list-item">
          <img className="item-img" src="gulp.svg" alt="gulp" />
          Gulp
        </li>
        <li className="list-item">
          <img className="item-img" src="chromeDevTool.svg" alt="chrome-dev-tool" />
          Chrome DevTools
        </li>
      </ul>
      {/* Cloud */}
      <div className="skills-heading">
        <h1 style={{ textTransform: "uppercase" }}>Cloud and Infra</h1>
      </div>
      <ul className="skills-subheading devops">
        <li className="list-item">
          <img className="item-img" src="aws.svg" alt="aws" />
          AWS
        </li>
        <li className="list-item">
          <img className="item-img" src="gcp.svg" alt="gcp" />
          GCP
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
          <img className="item-img" src="airflow.png" alt="airflow" />
          Airflow
        </li>
        <li className="list-item">
          <img className="item-img" src="jenkins.png" alt="jenkins" />
          Jenkins
        </li>
        <li className="list-item">Shell Scripting</li>
      </ul>
      {/* Android Development */}
      {/* <div className="skills-heading">
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
      </ul> */}
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
          <img className="item-img" src="postgresql.svg" alt="postgresql" />
          PostgreSQL
        </li>
      </ul>

      {/* ML/ AI Libraries */}
      <div className="skills-heading">
        <h1 style={{ textTransform: "uppercase" }}>ML/ AI Libraries</h1>
      </div>
      <ul className="skills-subheading ml">
        <li className="list-item">
          <img className="item-img" src="tensorflow.svg" alt="tensorflow" />
          Tensorflow.js
        </li>
        <li className="list-item">
          <img className="item-img" src="numpy.svg" alt="numpy" />
          Numpy
        </li>
        <li className="list-item">
          <img className="item-img" src="scikit.png" alt="scikit-learn" />
          Scikit-learn
        </li>
        <li className="list-item">
          <img className="item-img" src="pandas.svg" alt="pandas" />
          Pandas
        </li>
        <li className="list-item">
          <img className="item-img" src="matplotlib.png" alt="matplotlib" />
          Matplotlib
        </li>
      </ul>

    </section>
  );
};

export default Skills;
