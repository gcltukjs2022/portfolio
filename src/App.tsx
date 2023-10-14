import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useRef, useState } from "react";
import useWindowSize, { Size } from "./utils/useWindowSize";
import { useInView } from "react-intersection-observer";

function App() {
  const windowSize: Size = useWindowSize();
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const { ref, inView } = useInView();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [currTab, setCurrTab] = useState("Home");

  const handleScrollToView = (tab: string) => {
    let ref;
    switch (tab) {
      case "hero":
        ref = heroRef;
        break;
      case "about":
        ref = aboutRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        ref = heroRef;
    }
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <main className="relative m-auto flex max-w-[2560px] flex-col overflow-hidden">
      <div className={`${scrollY <= 88 && "hidden"} `}>
        <Header
          handleScrollToView={handleScrollToView}
          currTab={currTab}
          setCurrTab={setCurrTab}
        />
      </div>
      <Hero
        scrollRef={heroRef}
        handleScrollToView={handleScrollToView}
        currTab={currTab}
        setCurrTab={setCurrTab}
      />
      <About scrollRef={aboutRef} setCurrTab={setCurrTab} />
      <Projects scrollRef={projectsRef} setCurrTab={setCurrTab} />
      <Contact scrollRef={contactRef} setCurrTab={setCurrTab} />
      <Footer handleScrollToView={handleScrollToView} />
    </main>
  );
}

export default App;
