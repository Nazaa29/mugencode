import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    return <header>
        <div className='logo'>
            <img src='../assets/images/logo.png' alt='Logo' />
        </div>
        <div className="social-icons">
            <a href="https://github.com/Nazaa29/mugencode" target="_blank" rel="noopener noreferrer">
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
}

export default Header;