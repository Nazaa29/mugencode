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
  const [hasScrolled, setHasScrolled] = useState(false);
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
      if (window.scrollY > 0) {
        setHasScrolled(true);
        if (!isMouseOverHeader) {
          clearTimeout(timeoutId.current);
          timeoutId.current = setTimeout(() => setIsVisible(false), 1000);
        }
      } else {
        clearTimeout(timeoutId.current);
        setHasScrolled(false);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId.current);
    };
  }, [isMouseOverHeader]);

  const handleMouseMove = (e) => {
    const { top, bottom } = headerRef.current.getBoundingClientRect();
    if (e.clientY >= top && e.clientY <= bottom) {
      setIsMouseOverHeader(true);
      clearTimeout(timeoutId.current);
      setIsVisible(true);
    } else {
      setIsMouseOverHeader(false);
      if (hasScrolled) {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(() => setIsVisible(false), 1000);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hasScrolled]);

  return (
    <Fragment>
      <div
        style={{
          height: `${headerHeight}px`,
        }}
        className=" bg-imagen-fondo"
      ></div>
      <header
        id="home"
        className={`fixed top-0 w-full text-white py-2 px-8 flex items-center justify-between font-workSans tracking-wide border-red-custom transition-opacity border-b-[3px] duration-500 z-50 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        ref={headerRef}
        style={{
          backgroundColor: `rgba(0.09, 0.09, 0.09, 0.5)`,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <div className="logo sm:w-32 w-20">
          <img src={logo} alt="Logo" className="sm:w-24 sm:h-16 sm:ml-12" />
        </div>
        <nav className="flex space-x-20 xl:space-x-40 lg:space-x-24">
          <a
            href="#"
            className="hover:text-gray-400 lg:visible lg:block hidden"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 lg:visible lg:block hidden"
          >
            About Us
          </a>
          <a
            href="#projects"
            className="hover:text-gray-400 lg:visible lg:block hidden"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 lg:visible lg:block hidden"
          >
            Contact
          </a>
        </nav>
        <div className="social-icons flex sm:pr-10">
          <a
            href="https://github.com/Nazaa29/mugencode"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:text-3xl text-2xl sm:mr-4 mr-2 hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="URL-de-Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:text-3xl text-2xl sm:mr-4 mr-2 hover:text-gray-400"
          >
            <FaTwitter />
          </a>
          <a
            href="URL-de-LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:text-3xl text-2xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
