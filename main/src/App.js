import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Blogs from "./components/Blogs/blogs";
import Profile from "./components/Profile/profile";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./components/LandingPage";
import Resume from "./components/Resume/resume";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // List of paths that do not include the navbar
  const noNavPaths = ["/"];

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!noNavPaths.includes(location.pathname) && (
        <Navbar />
      )}
      <div
        className={
          noNavPaths.includes(location.pathname)
            ? ""
            : "container mt-3"
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
