import imgs from "../assets";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto p-12 bg-grey">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-white text-sm">GEORGE CHUNG 2023</h2>
        <div className="flex gap-x-6 items-center">
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
      </div>
    </footer>
  );
};

export default Footer;
