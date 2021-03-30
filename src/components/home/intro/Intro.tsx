import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Intro.scss'
import { faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Intro() {
    const avatar = "https://i.pravatar.cc/200?img=12"

    return (
        <div className="intro" id="intro">
            <div className="heading">
                <div className="avatar">
                    <img src={ avatar } alt="AVATAR"/>
                </div>
                <div className="name">
                    <span className="initial">Hi!</span> My name is <span className="highlight">Baptiste Boulongne</span>.
                </div>
            </div>
            <div className="subheading">
                I'm a full-stack developer and a software engineer.
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
        </div>
    );
}

export default Intro