import { Dispatch, useEffect, useState } from "react";
import imgs from "../assets";
import useWindowSize, { Size } from "../utils/useWindowSize";
import { useInView } from "react-intersection-observer";

type HeaderProps = {
  handleScrollToView: (tab: string) => void;
  currTab: string;
  setCurrTab: React.Dispatch<React.SetStateAction<string>>;
};

const Header: React.FC<HeaderProps> = ({ handleScrollToView, currTab }) => {
  const windowSize: Size = useWindowSize();
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-20 w-full ${
          scrollY > 88 ? "bg-grey shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="sm: mx-auto flex max-w-[1440px] items-center justify-between overflow-hidden p-6 px-6 text-white sm:py-4">
          <div
            onClick={() => handleScrollToView("hero")}
            className="flex cursor-pointer items-center justify-center gap-x-3"
          >
            <img
              src={imgs.profile}
              alt="profile"
              className="h-10 w-10 rounded-full sm:h-14 sm:w-14"
            />
            <h2 className="font-bold">GEORGE CHUNG</h2>
          </div>
          <nav className="hidden items-center gap-x-6 font-bold sm:flex lg:gap-x-12">
            <h2
              onClick={() => handleScrollToView("hero")}
              className={`${currTab === "hero" && "text-red"} cursor-pointer`}
            >
              HOME
            </h2>
            <h2
              onClick={() => handleScrollToView("about")}
              className={`${currTab === "about" && "text-red"} cursor-pointer`}
            >
              ABOUT
            </h2>
            <h2
              onClick={() => handleScrollToView("projects")}
              className={`${
                currTab === "projects" && "text-red"
              } cursor-pointer`}
            >
              PROJECTS
            </h2>
            <h2
              onClick={() => handleScrollToView("contact")}
              className={`${
                currTab === "contact" && "text-red"
              } cursor-pointer`}
            >
              CONTACT
            </h2>
          </nav>
          <div className="sm:hidden">
            <div className="mx-auto flex items-center justify-between sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-400 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className={`h-6 w-6 transform transition-transform ${
                    isOpen ? "rotate-90" : "rotate-0"
                  } duration-300 ease-in-out`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav
        id="burger"
        style={{ top: `${scrollY}px` }}
        className={`absolute z-10 flex min-h-screen w-full flex-col gap-y-12 bg-grey p-4 pt-28 transition-all  duration-200 ease-in-out md:hidden ${
          isOpen ? "right-0" : "-right-[120%]"
        }`}
      >
        <ul className="flex flex-col items-center text-white">
          <li
            className={`py-4 ${
              currTab === "hero" && "text-red"
            } cursor-pointer`}
            onClick={() => {
              setIsOpen(false);
              handleScrollToView("hero");
            }}
          >
            <h2 className="font-semiboldbold text-2xl">HOME</h2>
          </li>
          <li
            className={`py-4 ${
              currTab === "about" && "text-red"
            } cursor-pointer`}
            onClick={() => {
              setIsOpen(false);
              handleScrollToView("about");
            }}
          >
            <h2 className="font-semiboldbold text-2xl">ABOUT</h2>
          </li>
          <li
            className={`py-4 ${
              currTab === "projects" && "text-red"
            } cursor-pointer`}
            onClick={() => {
              setIsOpen(false);
              handleScrollToView("projects");
            }}
          >
            <h2 className="font-semiboldbold text-2xl">PROJECTS</h2>
          </li>
          <li
            className={`py-4 ${
              currTab === "contact" && "text-red"
            } cursor-pointer`}
            onClick={() => {
              setIsOpen(false);
              handleScrollToView("contact");
            }}
          >
            <h2 className="font-semiboldbold text-2xl">CONTACTS</h2>
          </li>
        </ul>

        <div className="mx-auto flex justify-center gap-x-12 border-t-2 px-20 pt-10">
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
      </nav>
    </>
  );
};

export default Header;
