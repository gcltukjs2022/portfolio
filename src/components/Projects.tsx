const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-[1440px] mx-auto p-6 lg:pt-[128px] lg:px-12"
    >
      <div className="flex flex-col gap-y-6 xl:gap-y-12">
        <div className="flex flex-col justify-center gap-y-6 ">
          <h1 className="xl:text-center text-2xl xl:text-4xl font-extrabold border-b-4 border-black pb-4 xl:pb-6 xl:max-w-max xl:m-auto">
            PROJECTS
          </h1>
          <p className="xl:text-center text-lg xl:max-w-[60%] xl:m-auto">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Projects;
