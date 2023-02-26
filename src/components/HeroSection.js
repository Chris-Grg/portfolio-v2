import React from "react";
import TypewriterComponent from "typewriter-effect";

function HeroSection() {
  return (
    <div>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto">
                <i className="bx bx-server"></i> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Chris Gurung</h1>
          <p>
            I'm
            {/* <TypewriterComponent /> */}
            <span
              className="typed"
              // data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
            <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
          </p>
          <div className="social-links">
            {/* <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a> */}
            {/* <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a> */}
            <a
              href="https://www.instagram.com/chris_tamu/"
              className="instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://github.com/Chris-Grg" className="github">
              <i class="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/chris-gurung-98748b214/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </div>
  );
}

export default HeroSection;
