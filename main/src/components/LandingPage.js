import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css"; // Import custom styles
import "animate.css/animate.min.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container-fluid">
        <div className="row align-items-center vh-100">
          <div className="col-sm-3 align-items-center">
            <h1 className="display-1">DAVID JEONG</h1>
          </div>
          <div className="col-sm-9 ">
            <h2>
              <Link to="/resume" className="landing-link ">
                RESUME
              </Link>
            </h2>
            <h2>
              <Link
                to="/projects"
                className="landing-link "
              >
                PROJECTS
              </Link>
            </h2>
            <h2>
              <Link to="/profile" className="landing-link ">
                PROFILE
              </Link>
            </h2>

            <h2>
              <Link to="/blogs" className="landing-link">
                BLOGS
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
