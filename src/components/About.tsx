const About = () => {
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
  return (
    <section
      id="about"
      className="w-full max-w-[1440px] mx-auto p-6 lg:pt-[128px] lg:px-12"
    >
      <div className="flex flex-col gap-y-6 xl:gap-y-12">
        <div className="flex flex-col justify-center gap-y-6 ">
          <h1 className="xl:text-center text-2xl xl:text-4xl font-extrabold border-b-4 border-black pb-4 xl:pb-6 xl:max-w-max xl:m-auto">
            ABOUT ME
          </h1>
          <p className="xl:text-center text-lg xl:max-w-[60%] xl:m-auto">
            Here you will find more information about me and my tech stacks
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-12 justify-between">
          <div className="flex flex-col flex-1 gap-y-6">
            <h1 className="text-2xl font-bold">My Story</h1>
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
                personal projects and production projects. Each project
                represents the skills I have learnt. I'm excited to become a
                better developer. Thank you for visiting, and I'm eager to
                embark on exciting journeys together.
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-y-6">
            <h1 className="text-2xl font-bold">My Tech Stacks</h1>
            <div className="flex gap-3 flex-wrap">
              {stacks.map((stack, i) => {
                return (
                  <div
                    key={i}
                    className="bg-slate-300 p-3 rounded-full"
                  >
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
