import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useState, useEffect, useRef } from "react";
import { Fragment } from "react";

const Header = (props) => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const currentHeight = headerRef.current.offsetHeight;
      console.log("Header height updated:", currentHeight);
      setHeaderHeight(currentHeight);
      props.onHeaderHeightChange(currentHeight); // Pasar la altura actualizada directamente
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <div style={{ height: `${headerHeight}px` }}></div>
      <header
        className="fixed top-0 w-full text-white py-2 px-8 flex items-center justify-between border-b-4 border-red-custom transition-opacity duration-500 z-50"
        ref={headerRef}
        style={{
          backgroundColor: `rgba(34, 40, 49, ${opacity})`, // Ajusta el color de fondo aquí
          opacity: opacity > 0.7 ? 1 : opacity,
        }}
      >
        <div className="logo w-32">
          <img src={logo} alt="Logo" className="w-24 h-16 ml-12" />
        </div>
        <nav className="flex">
          <a href="#home" className="mr-4">
            Home
          </a>
          <a href="#about" className="mr-4">
            About Us
          </a>
          <a href="#projects" className="mr-4">
            Projects
          </a>
          <a href="#contact" className="mr-4">
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
