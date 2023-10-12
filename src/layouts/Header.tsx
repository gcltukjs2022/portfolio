import imgs from "../assets";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="p-3 lg:py-4 lg:px-12 flex justify-between">
        <div className="flex justify-center items-center gap-x-3">
          <img
            src={imgs.profile}
            alt="profile"
            className="w-14 h-14 rounded-full"
          />
          <h2 className="font-bold">GEORGE CHUNG</h2>
        </div>
        <nav className="flex gap-x-3 lg:gap-x-12 items-center font-bold">
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
      </div>
    </header>
  );
};

export default Header;
