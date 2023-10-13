import { useEffect, useState } from "react";
import imgs from "../assets";
import useWindowSize, { Size } from "../utils/useWindowSize";

const Header = () => {
  const windowSize: Size = useWindowSize();
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const [isOpen, setIsOpen] = useState(false);
  const [breakpoint, setBreakpoint] = useState(88);

  useEffect(() => {
    if (windowSize.width! > 640) {
      setBreakpoint(104);
    } else {
      setBreakpoint(88);
    }
  }, [windowSize]);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-20 ${
          scrollY > breakpoint ? "bg-grey shadow-lg" : "bg-transparent "
        }`}
      >
        <div className="max-w-[1440px] mx-auto p-6 flex justify-between items-center text-white overflow-hidden">
          <a
            href="#hero"
            className="flex justify-center items-center gap-x-3"
          >
            <img
              src={imgs.profile}
              alt="profile"
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full"
            />
            <h2 className="font-bold">GEORGE CHUNG</h2>
          </a>
          <nav className="hidden sm:flex gap-x-3 lg:gap-x-12 items-center font-bold">
            <a href="#hero">
              <h2>HOME</h2>
            </a>
            <a href="#about">
              <h2>ABOUT</h2>
            </a>
            <a href="#projects">
              <h2>PROJECTS</h2>
            </a>
            <a href="#contact">
              <h2>CONTACT</h2>
            </a>
          </nav>
          <nav className="xl:hidden overflow-hidden">
            <div className="mx-auto flex justify-between items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-400 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div
        id="burger"
        className={`xl:hidden absolute z-10 top-0 w-full min-h-screen p-4 pt-24 bg-grey  transition-all duration-200 ease-in-out ${
          isOpen ? "right-0" : "-right-[120%]"
        }`}
      >
        <ul className="flex flex-col items-center text-white">
          <li
            className="py-4"
            onClick={() => setIsOpen(false)}
          >
            <a href="#hero">HOME</a>
          </li>
          <li
            className="py-4"
            onClick={() => setIsOpen(false)}
          >
            <a href="#about">ABOUT</a>
          </li>
          <li
            className="py-4"
            onClick={() => setIsOpen(false)}
          >
            <a href="#projects">PROJECTS</a>
          </li>
          <li
            className="py-4"
            onClick={() => setIsOpen(false)}
          >
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
