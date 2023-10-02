import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-8 flex items-center justify-between">
      <div className="logo w=100">
        <img src={logo} alt="Logo" className="w-100 h-10" />
      </div>
      <div className="social-icons flex">
        <a
          href="https://github.com/Nazaa29/mugencode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mr-4 hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="URL-de-Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mr-4 hover:text-gray-400"
        >
          <FaTwitter />
        </a>
        <a
          href="URL-de-LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-400"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Header;
