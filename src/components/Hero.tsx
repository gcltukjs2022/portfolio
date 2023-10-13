import { useEffect, useState } from "react";
import Header from "../layouts/Header";
import imgs from "../assets";
import useWindowSize, { Size } from "../utils/useWindowSize";

const Hero = () => {
  const windowSize: Size = useWindowSize();
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const [breakpoint, setBreakpoint] = useState(88);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (windowSize.width! > 640) {
      setBreakpoint(104);
    } else {
      setBreakpoint(88);
    }
  }, [windowSize]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToProjects = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-1 w-full h-screen bg-hero bg-right lg:bg-cover"
    >
      {scrollY <= breakpoint && <Header />}
      <div className="absolute top-[20%] xl:top-[10%] 2xl:top-[20%] w-full h-full px-6 lg:p-24 flex flex-col lg:items-center gap-y-6 lg:gap-y-12 text-white">
        <h1 className="font-extrabold text-3xl lg:text-5xl">
          HELLO, I'M {windowSize.width! <= 640 && <br />} GEORGE CHUNG
        </h1>
        <h1 className="text-xl lg:text-3xl">I'm a full-stack developer</h1>
        <div className="flex gap-x-6">
          <a
            href="https://www.linkedin.com/in/laptakchung"
            target="_blank"
          >
            <img
              src={imgs.linkedinWhite}
              alt="linkedin"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://github.com/gcltukjs2022"
            target="_blank"
          >
            <img
              src={imgs.githubWhite}
              alt="github"
              className="w-10 h-10"
            />
          </a>
        </div>
        <button
          className="bg-transparent border-2 rounded-lg w-[80%] xl:w-[350px] text-white py-4 mt-12 xl:mt-4 lg:px-12 lg:py-4 font-semibold"
          onClick={scrollToProjects}
        >
          PROJECTS
        </button>
        <div className="hidden xl:block absolute xl:top-[70%] 2xl:top-[55%] left-1/2 transform -translate-x-1/2">
          <div className="w-[30px] h-[50px] border-2 border-white rounded-3xl relative overflow-hidden">
            <div className="w-[5px] h-[5px] absolute top-[20%] left-1/2 transform -translate-x-1/2 bg-white rounded-full animate-slide-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
