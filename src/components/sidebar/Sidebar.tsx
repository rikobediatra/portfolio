import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToogleButton from "./toogleButton/ToogleButton";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 20,
        damping: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToogleButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};

export default Sidebar;
