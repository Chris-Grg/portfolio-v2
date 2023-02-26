import React from "react";

function FooterSection() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <h3>CHRIS GURUNG</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
            eligendi fuga maxime saepe commodi placeat.
          </p>
          <div className="social-links">
            {/* <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
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
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>My Resume</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. --> */}
            {/* <!-- You can delete the links only if you purchased the pro version. --> */}
            {/* <!-- Licensing information: [license-url] --> */}
            {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ --> */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-circle-fill"></i>
      </a>
    </div>
  );
}

export default FooterSection;
