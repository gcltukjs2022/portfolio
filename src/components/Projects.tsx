import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type ProjectsProps = {
  scrollRef?: React.MutableRefObject<HTMLDivElement | null>;
  setCurrTab: React.Dispatch<React.SetStateAction<string>>;
};

const Projects: React.FC<ProjectsProps> = ({ scrollRef, setCurrTab }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setCurrTab("projects");
    }
  }, [inView]);
  return (
    <section
      ref={scrollRef}
      id="projects"
      className="w-full max-w-[1440px] mx-auto min-h-screen p-6 pt-[108px] lg:pt-[128px] lg:px-12"
    >
      <div className="flex flex-col gap-y-6 xl:gap-y-12">
        <div className="flex flex-col justify-center gap-y-6 ">
          <h1 className="md:text-center text-2xl sm:text-3xl xl:text-4xl font-extrabold border-b-4 border-black pb-4 md:pb-6 md:px-6 nd:max-w-max md:m-auto">
            PROJECTS
          </h1>
          <p className="md:text-center text-lg xl:max-w-[60%] xl:m-auto">
            Here you will find some of the personal and clients projects that I
            have made
          </p>
        </div>
        <div
          className=""
          ref={ref}
        ></div>
      </div>
    </section>
  );
};

export default Projects;
