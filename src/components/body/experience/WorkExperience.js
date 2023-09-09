import "./workexperience.css";

const WorkExperience = () => {
  return (
    <section id="ex" className="experience-section">
      <div className="section-heading">
        <h1 className="work-ex-heading">WORK EXPERIENCE</h1>
      </div>
      {/* GalaxeSolutions */}
      <div className="experience-content-block">
        <div className="experience-content-left">
          <div className="experience-heading d-none d-sm-block">
            <h1 style={{ textTransform: "uppercase" }}>
              Galaxe Solutions, Bangalore
            </h1>
          </div>
          <div className="experience-sub-heading d-none d-sm-block">
            <h2>Developer</h2>
          </div>
          <div className="exp-header sm-toggle">
            <div className="exp-header-left">
              <div className="experience-heading">
                <h1 style={{ textTransform: "uppercase" }}>
                  Galaxe Solutions, Bangalore
                </h1>
              </div>
              <div className="experience-sub-heading">
                <h2>Developer</h2>
              </div>
              <div className="experience-dates-sm">
                <h3>Feb 2022 - Aug 2022</h3>
              </div>
            </div>
            <div className="exp-header-right">
              <div className="experience-company-img ">
                <img src="GalaxE-Solutions.svg" alt="img" />
              </div>
            </div>
          </div>
          <div className="experience-info">
            <ul style={{ marginLeft: "1.1rem", padding: 0 }}>
              <li className="list-item">
              Developed a proof-of-concept (POC) for deploying a web application on AWS, utilizing Route 53, CloudFront,
Lambda@Edge, S3, and Web Application Firewall (WAF) for the architecture
              </li>
              <li className="list-item">
              Constructed a fully automated DevOps pipeline for deploying source code from GitHub to AWS utilizing Jenkins,
Terraform scripts, and Artifactory which reduced the deployment time by 40%
              </li>
              <li className="list-item">
              Designed pixel-perfect and responsive frontend UIs using React JS, Redux, and SASS which improved end-user
satisfaction by 20%, performed unit testing using Jest and Enzyme to ensure optimal application quality
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-content-right d-none d-sm-block">
          <div className="experience-dates ">
            <h3>Feb 2022 - Aug 2022</h3>
          </div>
          <div className="experience-company-img ">
            <img src="GalaxE-Solutions.svg" alt="img" />
          </div>
        </div>
      </div>
      {/* Infosys */}
      <div className="experience-content-block">
        <div className="experience-content-left">
          <div className="experience-heading d-none d-sm-block">
            <h1 style={{ textTransform: "uppercase" }}>Infosys Ltd., Pune</h1>
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
              Optimized performance of the PeopleXpress web app by utilizing React JS to enhance the UI and build seamless
UX, resulting in a more efficient and user-friendly experience for users
              </li>
              <li className="list-item">
              Contributed to the internal React component library, ensuring design consistency across the pages, wrote Jest
test cases, Gulp to transpile SCSS to CSS and Webpack to bundle the component library
              </li>
              <li className="list-item">
              Managed project deployment process using Bitbucket, Jenkins, Artifactory, and Control-M. Proactively initiated ServiceNow change requests to facilitate seamless project deployments, ensuring timely and efficient delivery
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
  );
};

export default WorkExperience;
