import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useState, useEffect, useRef } from "react";
import { Fragment } from "react";

const Header = (props) => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [isMouseOverHeader, setIsMouseOverHeader] = useState(false);
  let timeoutId = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const currentHeight = headerRef.current.offsetHeight;
      console.log("Header height updated:", currentHeight);
      setHeaderHeight(currentHeight);
      props.onHeaderHeightChange(currentHeight);
    };

    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [headerHeight, props]);

  useEffect(() => {
    const handleScroll = () => {
      let newOpacity = 1 - window.scrollY / 500;
      if (newOpacity < 0.7) newOpacity = 0.7;
      setOpacity(newOpacity);
      if (window.scrollY > 0 && isVisible && !isMouseOverHeader) {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(() => setIsVisible(false), 300);
      }
      if (window.scrollY === 0) {
        clearTimeout(timeoutId.current);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId.current);
    };
  }, [isVisible, isMouseOverHeader]);

  const handleMouseMove = (e) => {
    const { top, bottom } = headerRef.current.getBoundingClientRect();
    if (e.clientY >= top && e.clientY <= bottom) {
      setIsMouseOverHeader(true);
      clearTimeout(timeoutId.current);
      setIsVisible(true);
      timeoutId.current = setTimeout(() => setIsVisible(false), 3000);
    } else {
      setIsMouseOverHeader(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Fragment>
      <div
        style={{
          height: `${headerHeight}px`,
          backgroundColor: `rgba(34, 40, 49, 1)`,
        }}
      ></div>
      <header
        className={`fixed top-0 w-full text-white py-2 px-8 flex items-center justify-between border-b-4 border-red-custom transition-opacity duration-500 z-50 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        ref={headerRef}
        style={{
          backgroundColor: `rgba(34, 40, 49, ${opacity})`,
          transition: "opacity 0.5s ease-in-out", // Añadido transición suave
        }}
      >
        <div className="logo w-32">
          <img src={logo} alt="Logo" className="w-24 h-16 ml-12" />
        </div>
        <nav className="flex space-x-40">
          <a href="#home" className="mr-4 font-sourceCodePro">
            Home
          </a>
          <a href="#about" className="mr-4 font-sourceCodePro">
            About Us
          </a>
          <a href="#projects" className="mr-4 font-sourceCodePro">
            Projects
          </a>
          <a href="#contact" className="mr-4 font-sourceCodePro">
            Contact
          </a>
        </nav>
        <div className="social-icons flex">
          <a
            href="https://github.com/Nazaa29/mugencode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mr-4 hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="URL-de-Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mr-4 hover:text-gray-400"
          >
            <FaTwitter />
          </a>
          <a
            href="URL-de-LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
