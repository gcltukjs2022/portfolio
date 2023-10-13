import imgs from "../assets";

const Footer = () => {
  return (
    <footer className="p-12 bg-grey">
      <div className="flex flex-col items-center gap-10 max-w-[1440px] mx-auto">
        <a href="#hero">
          <img
            src={imgs.arrowUp}
            alt="arrow-up"
            className="w-10 h-10"
          />
        </a>

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
        <h2 className="flex flex-col text-center text-white text-sm">
          GEORGE CHUNG <span>2023</span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
