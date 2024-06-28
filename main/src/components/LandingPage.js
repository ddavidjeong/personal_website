import React from "react";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";
import "./LandingPage.css"; // Import custom styles

function LandingPage() {
  return (
    <div className="wrapper animate__animated animate__fadeIn">
      <div className="name">
        <div className="box1">
          <div>DAVID</div>
        </div>

        <div className="box2">
          <div>JEONG</div>
        </div>
      </div>

      <div className="pages">
        <div class="box3">
          <div>
            <Link to="/resume" className="links">
              RESUME
            </Link>
          </div>
        </div>

        <div className="box4">
          <div>
            <Link to="/projects" className="links">
              PROJECTS
            </Link>
          </div>
        </div>

        <div className="box5">
          <div>
            <Link to="/profile" className="links">
              PROFILE
            </Link>
          </div>
        </div>

        <div className="box6">
          <div>
            <Link to="/blogs" className="links">
              BLOGS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
