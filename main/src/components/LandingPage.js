import React from "react";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";
import "./LandingPage.css"; // Import custom styles

function LandingPage() {
  return (
    <div class="wrapper">
      <div class="box1">
        <h1 className="font-bold uppercase mb-8">David</h1>
      </div>

      <div class="box1">
        <h1>Jeong</h1>
      </div>

      <div class="box2">
        <h2 className="text-2xl font-bold animate__animated animate__fadeInLeft">
          <Link
            to="/resume"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Resume
          </Link>
        </h2>
      </div>

      <div class="box3">
        <h2 className="text-2xl font-bold animate__animated animate__fadeInRight">
          <Link
            to="/projects"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Projects
          </Link>
        </h2>
      </div>

      <div class="box4">
        <h2 className="text-2xl font-bold animate__animated animate__fadeInDown">
          <Link
            to="/profile"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Profile
          </Link>
        </h2>
      </div>

      <div class="box5">
        <h2 className="text-2xl font-bold animate__animated animate__fadeInUp">
          <Link
            to="/blogs"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Blogs
          </Link>
        </h2>
      </div>
    </div>

    // <div className="bg-black text-white h-screen flex items-center justify-center">
    //   <div className="container mx-auto">
    //     <div className="flex flex-col items-center justify-center h-full">
    //       <h1 className="text-6xl font-bold uppercase mb-8 animate__animated animate__fadeIn">
    //         David Jeong
    //       </h1>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    //         <h2 className="text-2xl font-bold animate__animated animate__fadeInLeft">
    //           <Link
    //             to="/resume"
    //             className="hover:text-blue-500 transition-colors duration-300"
    //           >
    //             Resume
    //           </Link>
    //         </h2>
    //         <h2 className="text-2xl font-bold animate__animated animate__fadeInRight">
    //           <Link
    //             to="/projects"
    //             className="hover:text-blue-500 transition-colors duration-300"
    //           >
    //             Projects
    //           </Link>
    //         </h2>
    //         <h2 className="text-2xl font-bold animate__animated animate__fadeInDown">
    //           <Link
    //             to="/profile"
    //             className="hover:text-blue-500 transition-colors duration-300"
    //           >
    //             Profile
    //           </Link>
    //         </h2>
    //         <h2 className="text-2xl font-bold animate__animated animate__fadeInUp">
    //           <Link
    //             to="/blogs"
    //             className="hover:text-blue-500 transition-colors duration-300"
    //           >
    //             Blogs
    //           </Link>
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LandingPage;
