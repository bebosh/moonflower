import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col l6 s12 center">
            <h5 className="white-text">About me</h5>
            <p className="grey-text text-lighten-4">
              We are a team of college students working on this project like
              it's our full time job. Any amount would help support and continue
              development on this project and is greatly appreciated.
            </p>
          </div>

          <div className="col l6 s12 center">
            <h5 className="white-text">Links and contacts</h5>
            <ul className="inline-list center">
              <li>
                <a className="white-text" href="mailto:pieffello@gmail.com">
                  <i className="far fa-envelope" /> pieffello@gmail.com
                </a>
              </li>
              <li>
                <a className="white-text" href="https://www.linkedin.com/in/paolo-floreano-38629453/">
                  <i className="fab fa-linkedin"> </i> Linkedin
                </a>
              </li>
            </ul>
            <ul className="inline-list center">
              <li>
                <a className="white-text" href="https://github.com/bebosh">
                  <i className="fab fa-github-square" /> Github
                </a>
              </li>
              <li>
                <a className="white-text" href="https://www.facebook.com/paolo.floreano">
                  <i className="fab fa-facebook-square" /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <a className="right white-text" href="http://materializecss.com">
            {" "}
            © 2019{" "}
            <span className="brown-text text-lighten-4 ">
              Moonflower studio
            </span>{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
