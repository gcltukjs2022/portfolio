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
      className="w-full h-screen p-3 lg:pt-[128px] lg:px-12"
    >
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-col justify-center gap-y-6 ">
          <h1 className="text-center text-4xl font-extrabold border-b-4 border-black pb-6 max-w-max m-auto">
            ABOUT ME
          </h1>
          <p className="text-center text-lg max-w-[60%] m-auto">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="flex gap-x-12 justify-between">
          <div className="flex flex-col flex-1 gap-y-6">
            <h1 className="text-2xl font-bold">Get to know me!</h1>
            <div className="flex flex-col gap-y-3">
              <p>
                I'm a Frontend Web Developer building the Front-end of Websites
                and Web Applications that leads to the success of the overall
                product. Check out some of my work in the Projects section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin where I post useful content related to Web
                Development and Programming.
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
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
