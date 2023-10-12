import imgs from "../assets";

const Footer = () => {
  return (
    <footer className="p-12">
      <div className="flex flex-col items-center gap-10">
        <h2>GEORGE CHUNG 2023</h2>
        <div className="flex gap-x-6">
          <a
            href="https://www.linkedin.com/in/laptakchung"
            target="_blank"
          >
            <img
              src={imgs.linkedin}
              alt="linkedin"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://github.com/gcltukjs2022"
            target="_blank"
          >
            <img
              src={imgs.github}
              alt="github"
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
