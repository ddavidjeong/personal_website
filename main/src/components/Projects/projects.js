import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Project Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">
                A brief description of my project.
              </p>
              <a href="#" className="btn btn-primary">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Project Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">
                A brief description of my project.
              </p>
              <a href="#" className="btn btn-primary">
                Go to Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Project Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">
                A brief description of my project.
              </p>
              <a href="#" className="btn btn-primary">
                Go to Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
