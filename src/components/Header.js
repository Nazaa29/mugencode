import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="bg-dark-custom text-white py-2 px-8 flex items-center justify-between">
      <div className="logo w-32">
        <img src={logo} alt="Logo" className="w-24 h-16 ml-12" />
      </div>
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
  );
};

export default Header;
