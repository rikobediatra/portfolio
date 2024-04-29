import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import portfolio1 from "../../assets/fitness.png";
import portfolio2 from "../../assets/mini-map.png";
import portfolio3 from "../../assets/karyain.png";
import portfolio4 from "../../assets/notes.png";

type Props = {
    id?: number,
    title: string,
    img: string,
    desc: string,
    techStack: string[],
    linkUrl: string
}

const itemPortfolio = [
    {
        id: 1,
        title: "Evogym Fitness",
        img: portfolio1,
        desc: "Evogym Fitness is a website created for fitness enthusiasts worldwide. Evogym offers several services including memberships, interesting classes, and trusted trainers.",
        techStack: ["react", "typescript", "tailwinds"],
        linkUrl: "https://fitness-application-iota.vercel.app/", 
    },
    {
        id: 2,
        title: "Mini Maps",
        img: portfolio2,
        desc: "Mini Maps website is a lite version clone website of Google Maps. It comes with ability to search from cities and countries to village names. The website also has markers so users can precisely identify the location they are searching for.",
        techStack: ["react", "typescript", "tailwinds"],
        linkUrl: "https://mini-maps.vercel.app/",
    },
    {
        id: 3,
        title: "KARYAIN Website",
        img: portfolio3,
        desc: "A web-based application that provides services for students to showcase their work. In this website, from university to elementary students can participate in showcasing their creations.",
        techStack: ["react", "javascript", "bootstrap"],
        linkUrl: "https://github.com/rikobediatra/karyain---Final-Project",
    },
    {
        id: 4,
        title: "To Do List App",
        img: portfolio4,
        desc: "To do list website offers a simple yet powerful tool to organize tasks efficiently. With user-friendly features, users can easily create, manage, and prioritize their tasks, ensuring nothing falls through the cracks",
        techStack: ["react", "javascript", "css"],
        linkUrl: "https://github.com/rikobediatra/Note-APP",
    },
];

const Single = ({ title, img, desc, techStack , linkUrl }: Props) => {

    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 200])

    const renderedTechStack = techStack.map((tech) => {
        return (
            <p key={tech}>#{tech}</p>
        );
    });

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={img} alt="Project Image" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{ title }</h2>
                        <p>{ desc }</p>
                        <div className="techStack">
                            {renderedTechStack}
                        </div>
                        <a href={linkUrl} target="_blank">See For More</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const renderedPorto = itemPortfolio.map((item) => {
        return <Single key={item.id} title={item.title} img={item.img} desc={item.desc} techStack={item.techStack} linkUrl={item.linkUrl}/>
    });

    const { scrollYProgress } = useScroll({ 
        target: ref, 
        offset: ["end end", "start start"] 
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
      <div className="portfolio" ref={ref}>
          <div className="progress">
              <h1>Featured Works</h1>
              <motion.div style={{ scaleX }} className="progressBar"></motion.div>
          </div>
          { renderedPorto }
      </div>
    )
}

export default Portfolio;