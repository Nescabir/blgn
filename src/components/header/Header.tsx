import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <header>
            <div className="nav">
                <div className="nav-item">
                    <NavLink exact to="/" className="link" activeClassName="selected">Home</NavLink>
                </div>
            </div>
            <div className="socials">
                <div className="social-item">
                    <a href="https://twitter.com/BLGNDev" target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                </div>
                <div className="social-item">
                    <a href="https://www.linkedin.com/in/boulongne-baptiste/" target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div className="social-item">
                    <a href="https://github.com/Nescabir" target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header