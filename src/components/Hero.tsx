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
      className="z-1 relative h-screen w-full bg-hero bg-right lg:bg-cover"
    >
      <div ref={ref}></div>
      {scrollY <= 88 && (
        <Header
          handleScrollToView={handleScrollToView}
          currTab={currTab}
          setCurrTab={setCurrTab}
        />
      )}
      <div className="absolute top-[20%] flex h-full w-full flex-col gap-y-6 px-6 text-white xs:items-center lg:top-[10%] lg:gap-y-12 lg:p-24 2xl:top-[20%]">
        <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          HELLO, I'M {windowSize.width! <= 475 && <br />}{" "}
          <span className="text-red">GEORGE CHUNG</span>
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl">
          I'm a full-stack developer
        </h2>
        <div className="flex gap-x-6">
          <a href="https://www.linkedin.com/in/laptakchung" target="_blank">
            <img
              src={imgs.linkedinWhite}
              alt="linkedin"
              className="h-12 w-12"
            />
          </a>
          <a href="https://github.com/gcltukjs2022" target="_blank">
            <img src={imgs.githubWhite} alt="github" className="h-10 w-10" />
          </a>
        </div>
        {/* <button
          className="bg-transparent border-2 rounded-lg w-[260px] lg:w-[350px] text-white py-4 mt-12 xl:mt-4 lg:px-12 lg:py-4 font-semibold"
          onClick={scrollToProjects}
        >
          PROJECTS
        </button> */}
        <button className="button mt-10 xl:mt-4" onClick={scrollToProjects}>
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">PROJECTS</span>
          </span>
        </button>

        <div className="absolute left-1/2 hidden -translate-x-1/2 transform lg:top-[70%] lg:block 2xl:top-[55%]">
          <div className="relative h-[50px] w-[30px] overflow-hidden rounded-3xl border-2 border-white">
            <div className="absolute left-1/2 top-[20%] h-[5px] w-[5px] -translate-x-1/2 transform animate-slide-down rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
