import React from "react";

function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to My Website</h1>
      <p>
        This is the home page of my personal website where I
        showcase my projects and skills.
      </p>
      <button onClick={() => alert("Thanks for visiting!")}>
        Click Me!
      </button>
    </div>
  );
}

function Dang() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to My Website</h1>
      <p>suppp</p>
      <button onClick={() => alert("Thanks for visiting!")}>
        Click Me!
      </button>
    </div>
  );
}

export default Home;
export { Dang };
