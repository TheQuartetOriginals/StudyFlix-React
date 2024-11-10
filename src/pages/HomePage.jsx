import "../css/homePage.css";
import "../css/bootstrap-imports.css"
import { videoData } from "../AdditionalData/videoData";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "../css/swiper-import.css"
import { Navigation, Pagination } from "swiper/modules";

function HomePage() {
  const navigate = useNavigate();

  const handleVideoClick = (course) => {
    navigate(`/video/${course}`);
  };

  const backToTopBtn = document.getElementById("back-to-top");
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return (
    <>
      <section className="top" id="top">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://i.ibb.co/tbqn0jG/logo.png"
                alt="logo"
                className="logo-image"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#Trending">
                    Trending
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Suggested">
                    Suggested
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#resource-library">
                    Resource Library
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {Object.keys(videoData)
          .slice(0, 4)
          .map((courseKey) => {
            const video = videoData[courseKey];

            return (
              <SwiperSlide key={courseKey}>
                <div className="image">
                  <div className="black">
                    <h1>{video.mainVideo.title}</h1>
                    <div className="star">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`bi bi-star${
                            index < video.mainVideo.rating ? "-fill" : ""
                          }`}
                        ></i>
                      ))}
                    </div>
                    <p>{video.mainVideo.date}</p>
                    <div className="genre">
                      {video.mainVideo.genre && video.mainVideo.genre.map((content, index) => (
                        <span key={index} className="genre-tag">{content}</span>
                      ))}
                    </div>
                    <div className="watch">
                      <button
                        onClick={() => handleVideoClick(courseKey)}
                        style={{
                          border: "none",
                          background: "none",
                          color: "white",
                          fontSize: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                        className="no-hover-bg"
                      >
                        <i
                          className="bi bi-play-circle-fill"
                          style={{
                            color: "red",
                            fontSize: "45px",
                            marginRight: "15px",
                          }}
                        ></i>
                        Start Learning
                      </button>
                    </div>
                  </div>
                  <img
                    src={`https://img.youtube.com/vi/${
                      video.mainVideo.url.split("/").pop().split("?")[0]
                    }/maxresdefault.jpg`}
                    alt={video.mainVideo.title}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <div className="card-section" id="Trending">
        <div className="container">
          <div className="row">
            <h2>Trending</h2>
            <div className="col-md-3">
              <div className="card position-relative">
                <img
                  src="https://img.youtube.com/vi/WQoB2z67hvY/maxresdefault.jpg"
                  className="card-img-top"
                  alt="Card Image"
                />
                <div className="card-body">
                  <button
                    onClick={() => handleVideoClick("LoveBabbarDSA")}
                    className="play-button position-absolute no-hover-bg"
                  >
                    <i className="bi bi-play-circle-fill" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card position-relative">
                <img
                  src="https://img.youtube.com/vi/tVzUXW6siu0/maxresdefault.jpg"
                  className="card-img-top"
                  alt="Card Image"
                />
                <div className="card-body">
                  <button
                    onClick={() => handleVideoClick("codeWithHarry")}
                    className="play-button position-absolute"
                  >
                    <i className="bi bi-play-circle-fill" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card position-relative">
                <img
                  src="https://img.youtube.com/vi/ohIAiuHMKMI/maxresdefault.jpg"
                  className="card-img-top"
                  alt="Card Image"
                />
                <div className="card-body">
                  <button
                    onClick={() => handleVideoClick("piyushGarg")}
                    className="play-button position-absolute"
                  >
                    <i className="bi bi-play-circle-fill" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card position-relative">
                <img
                  src="https://img.youtube.com/vi/mlIUKyZIUUU/maxresdefault.jpg"
                  className="card-img-top"
                  alt="Card Image"
                />
                <div className="card-body">
                  <button
                    onClick={() => handleVideoClick("mlIUKyZIUUU")}
                    className="play-button position-absolute"
                  >
                    <i className="bi bi-play-circle-fill" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-section" id="Suggested">
        <div className="container">
          <div className="row">
            <h2>Suggested</h2>
            <div className="col-md-3">
              <div className="card position-relative">
                <img
                  src="https://img.youtube.com/vi/y3OOaXrFy-Q/maxresdefault.jpg"
                  className="card-img-top"
                  alt="Card Image"
                />
                <div className="card-body">
                  <button
                    onClick={() => handleVideoClick("y3OOaXrFy-Q")}
                    className="play-button position-absolute"
                  >
                    <i className="bi bi-play-circle-fill" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card position-relative">
                <img
                  src="https://img.youtube.com/vi/YRnjGeQbsHQ/maxresdefault.jpg"
                  className="card-img-top"
                  alt="Card Image"
                />
                <div className="card-body">
                  <button
                    onClick={() => handleVideoClick("YRnjGeQbsHQ")}
                    className="play-button position-absolute"
                  >
                    <i className="bi bi-play-circle-fill" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card position-relative">
                <img
                  src="https://img.youtube.com/vi/iw1Xf_33YM0/maxresdefault.jpg"
                  className="card-img-top"
                  alt="Card Image"
                />
                <div className="card-body">
                  <button
                    onClick={() => handleVideoClick("iw1Xf_33YM0")}
                    className="play-button position-absolute"
                  >
                    <i className="bi bi-play-circle-fill" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card position-relative">
                <img
                  src="https://img.youtube.com/vi/q3Z3Qa1UNBA/maxresdefault.jpg"
                  className="card-img-top"
                  alt="Card Image"
                />
                <div className="card-body">
                  <button
                    onClick={() => handleVideoClick("q3Z3Qa1UNBA")}
                    className="play-button position-absolute"
                  >
                    <i className="bi bi-play-circle-fill" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="resource-library" className="resource-library-section">
        <div className="container">
          <h2>Resource Library</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-server"></i> {/* DBMS icon */}
                <h3>DBMS (Database Management Systems)</h3>
                <p>
                  Learn the fundamentals of Database Management Systems
                  including SQL, normalization, database design, and
                  transactions.
                </p>
                <a
                  href="https://www.geeksforgeeks.org/dbms/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  GeeksforGeeks
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-code-slash"></i>
                <h3>Introduction to C++</h3>
                <p>
                  Master the basics of C++ programming, including syntax, data
                  types, loops, and functions, with practical examples and
                  exercises.
                </p>
                <a
                  href="https://www.geeksforgeeks.org/c-plus-plus/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  GeeksforGeeks
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-palette"></i> 
                <h3>Advanced CSS Techniques</h3>
                <p>
                  Explore these articles to learn advanced CSS techniques such
                  as animations, flexbox, and grid layout.
                </p>
                <a
                  href="https://example.com/advanced-css-techniques"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-code-square"></i>{" "}
                {/* Coding challenges icon */}
                <h3>Interactive Coding Challenges</h3>
                <p>
                  Test your skills with interactive coding challenges that cover
                  a wide range of programming topics and difficulty levels.
                </p>
                <a
                  href="https://example.com/coding-challenges"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Start Challenges
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-mic-fill"></i>
                <h3>Programming Podcasts</h3>
                <p>
                  Listen to these podcasts for insights, interviews, and
                  discussions on programming and software development trends.
                </p>
                <a
                  href="https://example.com/programming-podcasts"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Listen Now
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-tools"></i> {/* Development tools icon */}
                <h3>Development Tools & Resources</h3>
                <p>
                  Find a curated list of tools and resources for developers,
                  including IDEs, libraries, and APIs.
                </p>
                <a
                  href="https://example.com/development-tools"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Explore Tools
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resource-library" className="resource-library-section">
        <div className="container">
          <h2>Ist Year CSE</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-book"></i>
                <h3>C Programming</h3>
                <p>
                  This guide covers the basics of C programming, including
                  syntax, data types, control structures, and memory management
                  for efficient system-level coding.
                </p>
                <a
                  href="https://www.geeksforgeeks.org/c-programming-language/"
                  className="btn btn-primary"
                  download
                >
                  GeeksforGeeks
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-play-circle"></i>
                <h3>Python</h3>
                <p>
                  This guide covers the essentials of Python programming,
                  including syntax, data structures, and libraries for building
                  applications and automating tasks.
                </p>
                <a
                  href="https://www.geeksforgeeks.org/python-programming-language-tutorial/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  GeeksforGeeks
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-link"></i>
                <h3>Operating System</h3>
                <p>
                  This guide covers Operating Systems basics, including process
                  management, memory management, file systems, and
                  synchronization techniques.
                </p>
                <a
                  href="https://www.geeksforgeeks.org/operating-systems/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  GeeksforGeeks
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-calendar-event"></i>
                <h3>Digital Electronics</h3>
                <p>
                  This guide covers the fundamentals of Digital Electronics,
                  including logic gates, Boolean algebra.
                </p>
                <a
                  href="https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/"
                  className="btn btn-primary"
                  target="_blank"
                >
                  GeeksforGeeks
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-git"></i>
                <h3>Source Code Management</h3>
                <p>
                  This guide covers the basics of Git and Git SCM (Source Code
                  Management).
                </p>
                <a
                  href="https://www.w3schools.com/git/git_intro.asp?remote=github"
                  className="btn btn-primary"
                  target="_blank"
                >
                  W3Schools
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <i className="bi bi-tools"></i>
                <h3>Differential Equations</h3>
                <p>
                  This guide covers solving differential equations, their
                  applications in modeling, and techniques like separation of
                  variables and Laplace transforms.
                </p>
                <a
                  href="https://www.hzu.edu.in/engineering/Higher%20Engineering%20Mathematics.pdf"
                  className="btn btn-primary"
                  target="_blank"
                >
                  PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p className="copyright-text"> © StudyFlix India</p>
      </footer>

      <a id="back-to-top" href="#top" style={{ textDecoration: "none" }}>
        ↑
      </a>
    </>
  );
}

export default HomePage;
