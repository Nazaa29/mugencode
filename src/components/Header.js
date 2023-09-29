import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import styles from "../assets/styles/globals.css";

const Header = () => {
  return (
    <header className="bg-dark-custom">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="social-icons">
        <a
          href="https://github.com/Nazaa29/mugencode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="URL-de-Twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="URL-de-LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Header;
