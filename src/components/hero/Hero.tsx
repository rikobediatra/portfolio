import { motion } from "framer-motion";
import "./hero.scss";
import heroPict from "../../assets/heroUse.png";
import scrollPict from "../../assets/scroll.png";

function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      trasition: {
        duration: 2,
        repeate: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror" as const,
        duration: 20,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Muhammad Riko Bediatra</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and IT Enthusiast
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="#Portfolio">
                See The Latest Works
              </a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact Me">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scrollPict}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer IT Enthusisast
      </motion.div>
      <div className="imageContainer">
        <img src={heroPict} alt="" />
      </div>
    </div>
  );
}

export default Hero;
