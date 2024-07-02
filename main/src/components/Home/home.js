import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="jumbo">
        <h1 className="display-4">
          Welcome to My Website!
        </h1>
        <p className="lead">
          This is the home page of my personal website where
          I showcase my projects and skills.
        </p>
        <hr className="my-4" />
        <p>
          Explore my projects and get to know more about me.
        </p>
        <a
          className="btn btn-primary btn-lg"
          href="/projects"
          role="button"
        >
          View Projects
        </a>
      </div>
    </div>
  );
}

export default Home;
