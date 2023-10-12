const Hero = () => {
  return (
    <section
      id="hero"
      className="relative z-1 w-full h-screen bg-slate-100"
    >
      <div className="p-3 lg:p-24 flex flex-col items-center gap-y-12">
        <h1 className="font-extrabold text-5xl">HELLO, I'M GEORGE CHUNG</h1>
        <h1 className="text-3xl">I'm a full-stack web developer</h1>
        <button className="bg-black rounded-lg text-white px-6 py-3 lg:px-12 lg:py-4">
          PROJECTS
        </button>
        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2">
          <div className="w-[30px] h-[50px] border-2 border-gray-800 rounded-3xl relative overflow-hidden">
            <div className="w-[5px] h-[5px] absolute top-[20%] left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full animate-slide-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
