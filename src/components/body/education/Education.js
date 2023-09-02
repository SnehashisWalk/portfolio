import "./education.css";

const Education = () => {
  return (
    <section id="edu" className="education-section">
      <div className="section-heading">
        <h1 className="work-ex-heading">EDUCATION</h1>
      </div>
      <div className="experience-content-block">
        <div className="experience-content-left">
          <div>
            <h1 className="education-heading d-none d-sm-block">
              Northeastern University, Boston
            </h1>
          </div>
          <div>
            <h2 className="education-sub-heading d-none d-sm-block">
              MS in Information Systems
            </h2>
          </div>
          <div className="exp-header sm-toggle">
            <div className="exp-header-left">
              <h1 className="education-heading">
              Northeastern University, Boston
              </h1>
            </div>
            <div className="exp-header-right">
              <div className="experience-company-img ">
                <img src="Northeastern_seal.svg.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="sm-toggle">
            <h2 className="edu-sub-heading ">
            MS in Information Systems
            </h2>

            <h3 className="edu-dates-sm">Sep. 2022 - May 2024</h3>

            <h3 className="edu-cgpa-sm">
              <span>GPA: </span>3.5 / 4.0
            </h3>
          </div>
          <h3 className="edu-dates d-none d-sm-block">
            Sep. 2022 - May 2024
          </h3>
          <h3 className="edu-cgpa d-none d-sm-block">
            <span>GPA: </span>3.5 / 4.0
          </h3>
        </div>
        <div className="experience-content-right d-none d-sm-block">
          <div className="edu-img">
            <img src="Northeastern_seal.svg.png" alt="img" />
          </div>
        </div>
      </div>
      <div className="experience-content-block">
        <div className="experience-content-left">
          <div>
            <h1 className="education-heading d-none d-sm-block">
              Biju Patnaik University of Technology, Rourkela
            </h1>
          </div>
          <div>
            <h2 className="education-sub-heading d-none d-sm-block">
              Bachelor of Technology in Applied Electronics and Instrumentation
              Engineering
            </h2>
          </div>
          <div className="exp-header sm-toggle">
            <div className="exp-header-left">
              <h1 className="education-heading">
                Biju Patnaik University of Technology, Rourkela
              </h1>
            </div>
            <div className="exp-header-right">
              <div className="experience-company-img ">
                <img src="bput.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="sm-toggle">
            <h2 className="edu-sub-heading ">
              Bachelor of Technology in Applied Electronics and Instrumentation
              Engineering
            </h2>

            <h3 className="edu-dates-sm">Aug. 2015 - April 2019</h3>

            <h3 className="edu-cgpa-sm">
              <span>CGPA: </span>8.27 / 10.0
            </h3>
          </div>
          <h3 className="edu-dates d-none d-sm-block">
            Aug. 2015 - April 2019
          </h3>
          <h3 className="edu-cgpa d-none d-sm-block">
            <span>CGPA: </span>8.27 / 10.0
          </h3>
        </div>
        <div className="experience-content-right d-none d-sm-block">
          <div className="edu-img">
            <img src="bput.png" alt="img" />
          </div>
        </div>
      </div>
      {/* <div className="img-container4">
      <img className="img4" src="exp-design2.svg" alt="img" />
    </div> */}
    </section>
  );
};

export default Education;
