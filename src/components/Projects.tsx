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
      className="mx-auto min-h-screen w-full max-w-[1440px] p-6 pt-[108px] lg:px-12 lg:pt-[128px]"
    >
      <div className="flex flex-col gap-y-6 xl:gap-y-12">
        <div className="flex flex-col justify-center gap-y-6 ">
          <h1 className="nd:max-w-max border-b-4 border-black pb-4 text-2xl font-extrabold sm:text-3xl md:m-auto md:px-6 md:pb-6 md:text-center xl:text-4xl">
            PROJECTS
          </h1>
          <p className="text-lg md:text-center xl:m-auto xl:max-w-[60%]">
            Here you will find some of the personal and clients projects that I
            have made
          </p>
        </div>
        <div className="md-4 flex text-center" ref={ref}></div>
      </div>
    </section>
  );
};

export default Projects;
