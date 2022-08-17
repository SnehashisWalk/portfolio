import "./workexperience.css";

const WorkExperience = () => {
  return (
    <section id="ex" className="experience-section">
      <div className="section-heading">
        <h1 className="work-ex-heading">WORK EXPERIENE</h1>
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
                <h3>Feb 2022 - Present</h3>
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
                Responsible for writing and executing Terraform scripts to
                deploy development environment on AWS.
              </li>
              <li className="list-item">
                Built the POC for deploying web app on AWS, the architecture
                involved AWS Route 53, AWS Cloudfront, AWS Lambda@Edge, AWS S3
                bucket and WAF.
              </li>
              <li className="list-item">
                Built the complete Devops pipeline for deplyoying source code
                from Github to AWS using Jenkins, Terraform scripts and
                maintaining the artifacts in Artifactory.
              </li>
              <li className="list-item">
                Developed responsive UIs using React JS, used Redux for state
                management, Jest and Enzyme for unit testing.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-content-right d-none d-sm-block">
          <div className="experience-dates ">
            <h3>Feb 2022 - Present</h3>
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
                Developed a KT portal for new joiners in the Westpac Unit on
                MERN stack, detailing all the necessary study material required
                for them to get started in short span of time.
              </li>
              <li className="list-item">
                Worked in Oracle EBS HR domain team for Westpac, Australia.
              </li>
              <li className="list-item">
                Worked on PeopleXpress, HR portal for Westpac employees, wrote
                backend procedures in PL/SQL.
              </li>
              <li className="list-item">
                Created Control-M jobs and UNIX shellscripts to automate the
                transfer of daily reports to downstream team.
              </li>
              <li className="list-item">
                Acted as DevOps Point-of-contact (POC) for deployments of
                projects via Bitbucket, Jenkins, Artifactory, Control-M, and
                raised Servicenow change requests (CRQ) for project deployments.
              </li>
              <li className="list-item">
                Responsible for creating XML templates for employee
                questionnaire forms along with SQL queries which helped in
                migrating HR portal, PeopleXpress from Oracle E-Business Suite
                to Oracle Fusion Cloud ERP.
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
