import "./navbar.scss";
import { motion } from "framer-motion";

import linkedlPict from "../../assets/linkedln.png";
import githubPict from "../../assets/github.png";
import dribblePict from "../../assets/dribbble.png";

import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      {/* Navbar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/riko-bediatra/" target="_blank">
            <img src={linkedlPict} alt="linkedln" />
          </a>
          <a href="https://github.com/rikobediatra" target="_blank">
            <img src={githubPict} alt="github" />
          </a>
          <a href="#">
            <img src={dribblePict} alt="dribble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
