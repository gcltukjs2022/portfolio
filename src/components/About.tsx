import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AboutProps = {
  scrollRef?: React.MutableRefObject<HTMLDivElement | null>;
  setCurrTab: React.Dispatch<React.SetStateAction<string>>;
};

const About: React.FC<AboutProps> = ({ scrollRef, setCurrTab }) => {
  const { ref, inView } = useInView();
  const stacks = [
    "TypeScript",
    "JavaScript",
    "React",
    "NextJs",
    "NodeJs",
    "Express",
    "Redux",
    "Styled Component",
    "Tailwind",
    "AWS",
    "CSS",
    "HTML",
    "Sequelize",
    "MySQL",
    "PostreSQL",
    "GIT",
    "GitHub",
    "Responsive Design",
    "SEO",
  ];

  useEffect(() => {
    if (inView) {
      setCurrTab("about");
    }
  }, [inView]);

  return (
    <section
      ref={scrollRef}
      id="about"
      className="mx-auto min-h-screen w-full max-w-[1440px] p-6 pt-[108px] lg:px-12 lg:pt-[148px]"
    >
      <div className="flex flex-col gap-y-6 md:gap-y-24">
        <div className="flex flex-col justify-center">
          <h1 className="nd:max-w-max border-b-4 border-black pb-4 text-2xl font-extrabold sm:text-3xl md:m-auto md:px-6 md:pb-6 md:text-center xl:text-4xl">
            ABOUT ME
          </h1>
          {/* <p className="xl:text-center text-lg xl:max-w-[60%] xl:m-auto">
            Here you will find more information about me and my tech stacks
          </p> */}
        </div>
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex flex-1 flex-col gap-y-6">
            <h1 className="text-2xl font-bold" ref={ref}>
              My Story
            </h1>
            <div className="flex flex-col gap-y-3">
              <p>
                I'm a Full Stack Developer with a a year of coding experience.
                My path into software development began as a career changer,
                bringing a fresh perspective to the field. Currently, I'm
                working as a software developer at a lead generation agency,
                where I'm learning new tech stacks in a fast paced environment.
              </p>
              <p>
                Within my portfolio, you'll discover projects that including
                personal projects and clients projects. Each project represents
                the skills I have learnt. I'm excited to become a better
                developer. Thank you for visiting, and I'm eager to embark on
                exciting journeys together.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-y-6">
            <h1 className="text-2xl font-bold">My Tech Stacks</h1>
            <div className="flex flex-wrap gap-3">
              {stacks.map((stack, i) => {
                return (
                  <div key={i} className="rounded-full bg-slate-300 p-3">
                    <p className="font-semibold">{stack}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
