import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-4 py-2 flex justify-between items-center">
      <Link
        className="text-xl font-semibold"
        to="/"
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        Hub
      </Link>
      <div className="flex gap-4">
        <Link
          className="hover:text-gray-300"
          to="/home"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Home
        </Link>
        <Link
          className="hover:text-gray-300"
          to="/projects"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Projects
        </Link>
        <Link
          className="hover:text-gray-300"
          to="/resume"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Resume
        </Link>
        <Link
          className="hover:text-gray-300"
          to="/profile"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Profile
        </Link>
        <Link
          className="hover:text-gray-300"
          to="/blogs"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Blogs
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
