import imgs from "../assets";

type FooterProps = {
  handleScrollToView: (tab: string) => void;
};

const Footer: React.FC<FooterProps> = ({ handleScrollToView }) => {
  return (
    <footer className="bg-grey p-12">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 ">
        <img
          src={imgs.arrowUp}
          alt="arrow-up"
          className="h-10 w-10 cursor-pointer"
          onClick={() => handleScrollToView("hero")}
        />

        <div className="flex items-center gap-x-6">
          <a href="https://www.linkedin.com/in/laptakchung" target="_blank">
            <img
              src={imgs.linkedinWhite}
              alt="linkedin"
              className="h-12 w-12"
            />
          </a>
          <a href="https://github.com/gcltukjs2022" target="_blank">
            <img src={imgs.githubWhite} alt="github" className="h-10 w-10" />
          </a>
        </div>
        <h2 className="flex flex-col text-center text-sm text-white">
          GEORGE CHUNG <span>2023</span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
