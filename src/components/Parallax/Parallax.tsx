import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
    type: string
}

function Parallax({ type }: Props) {
  

  const _ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: _ref,
    offset: ["start start", "end start"]
  });

  const ytext = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  
  const styleBackground = {
    background: type === "services"
      ? "linear-gradient(180deg, #111132, #0c0c1d)"
      : "linear-gradient(180deg, #111132, #505064)"
  }

  return (
    <div className="parallax" style={styleBackground} ref={_ref}>
      <motion.h1 style={{y: ytext}}>{type === "about" ? "About Me" : "What I Did ?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{y: yBg}}></motion.div>
      <motion.div className="stars" style={{x: yBg}}></motion.div>
    </div>
  )
}

export default Parallax