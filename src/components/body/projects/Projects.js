import "./projects.css";

const Projects = () => {
  return (
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
                Router for routing, used React Bootstrap for styling and making
                it mobile and web responsive, hosted the DB on MongoDB Atlas,
                hosted backend on Heroku and frontend via Netlify.
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
                interface where the user can select seats as per choice, select
                language, day and time of the show.
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
            <h1 style={{ textTransform: "uppercase" }}>
              Social Media App: FriendsBay
            </h1>
          </div>
          {/* projects heading for sm devices */}
          <div className="exp-header sm-toggle">
            <div className="exp-header-left">
              <h1 style={{ textTransform: "uppercase" }}>
                Social Media App: FriendsBay
              </h1>
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
                ➔ Developed a social media app, where the user can create new
                posts, post it on timeline, like others post. The app is created
                on MERN stack.
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
  );
};

export default Projects;
