import "./about.scss";
import { motion } from "framer-motion";
import profilPict from "../../assets/profile.jpg";

function About() {
  const linkCV =
    "https://drive.google.com/file/d/1iS34y2-wJ_gGFqXNRiyooKKfmvOGeBoR/view?usp=sharing";

  return (
    <div className="about">
      <div className="title">
        <h1>About Me</h1>
        <div className="progressBar"></div>
      </div>
      <div className="content">
        <motion.div
          className="aboutMe"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p>
            Fresh Graduate from Islamic University of Indonesia who passionate
            about creating intuitive and responsive user interfaces that provide
            a seamless user experience. Throughout my academic year, I have
            gained a solid foundation in front-end development by studying
            various programming languages such as HTML, CSS, JavaScript, Angular
            and React JS. Currently I am focusing on enhancing my skills using
            Next.js and typescript for development. I also actively participated
            in various organization such as Himpunan Mahasiswa Informatika
            (HMIF), a laboratory assistant, and event planner. In addition to my
            technical skills, I possess strong communication and collaboration
            skills. My goal is to gain as much as experiences, within the
            ultimate objective to becoming an expert in informatics fields.
          </p>
          <a href={linkCV} target="_blank">
            View My Resume
          </a>
        </motion.div>
        <div className="picture">
          <img src={profilPict} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default About;
