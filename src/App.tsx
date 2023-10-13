import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import useWindowSize, { Size } from "./utils/useWindowSize";

function App() {
  const windowSize: Size = useWindowSize();
  const [breakpoint, setBreakpoint] = useState(88);
  const [scrollY, setScrollY] = useState<number>(window.scrollY);

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
    if (windowSize.width! > 640) {
      setBreakpoint(104);
    } else {
      setBreakpoint(88);
    }
  }, [windowSize]);

  return (
    <main className="relative max-w-[2560px] m-auto overflow-hidden">
      {scrollY > breakpoint && <Header />}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
