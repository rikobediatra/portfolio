import { motion } from "framer-motion";

const Links = () => {
  const links = ["Homepage", "About", "Portfolio", "Contact Me"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const renderedLink = links.map((link) => {
    return (
      <motion.a
        href={`#${link}`}
        key={link}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {link}
      </motion.a>
    );
  });

  return (
    <motion.div className="links" variants={variants}>
      {renderedLink}
    </motion.div>
  );
};

export default Links;
