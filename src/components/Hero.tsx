import { useEffect, useState } from "react";
import Header from "../layouts/Header";
import imgs from "../assets";
import useWindowSize, { Size } from "../utils/useWindowSize";
import { useInView } from "react-intersection-observer";

type HeroProps = {
  scrollRef?: React.MutableRefObject<HTMLDivElement | null>;
  handleScrollToView: (tab: string) => void;
  currTab: string;
  setCurrTab: React.Dispatch<React.SetStateAction<string>>;
};

const Hero: React.FC<HeroProps> = ({
  scrollRef,
  handleScrollToView,
  currTab,
  setCurrTab,
}) => {
  const windowSize: Size = useWindowSize();
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const { ref, inView } = useInView();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

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

  useEffect(() => {
    if (inView) {
      setCurrTab("hero");
    }
  }, [inView]);

  return (
    <section
      ref={scrollRef}
      id="hero"
      className="relative z-1 w-full h-screen bg-hero bg-right lg:bg-cover"
    >
      <div ref={ref}></div>
      {scrollY <= 88 && (
        <Header
          handleScrollToView={handleScrollToView}
          currTab={currTab}
          setCurrTab={setCurrTab}
        />
      )}
      <div className="absolute top-[20%] lg:top-[10%] 2xl:top-[20%] w-full h-full px-6 lg:p-24 flex flex-col xs:items-center gap-y-6 lg:gap-y-12 text-white">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl">
          HELLO, I'M {windowSize.width! <= 475 && <br />}{" "}
          <span className="text-red">GEORGE CHUNG</span>
        </h1>
        <h1 className="text-xl sm:text-2xl lg:text-3xl">
          I'm a full-stack developer
        </h1>
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
        {/* <button
          className="bg-transparent border-2 rounded-lg w-[260px] lg:w-[350px] text-white py-4 mt-12 xl:mt-4 lg:px-12 lg:py-4 font-semibold"
          onClick={scrollToProjects}
        >
          PROJECTS
        </button> */}
        <button
          className="button mt-10 xl:mt-4"
          onClick={scrollToProjects}
        >
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">PROJECTS</span>
          </span>
        </button>

        <div className="hidden lg:block absolute lg:top-[70%] 2xl:top-[55%] left-1/2 transform -translate-x-1/2">
          <div className="w-[30px] h-[50px] border-2 border-white rounded-3xl relative overflow-hidden">
            <div className="w-[5px] h-[5px] absolute top-[20%] left-1/2 transform -translate-x-1/2 bg-white rounded-full animate-slide-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
