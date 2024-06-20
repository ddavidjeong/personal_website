import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import "./components/Navbar/navbar.css";
import Home, { Dang } from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Blogs from "./components/Blogs/blogs";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
