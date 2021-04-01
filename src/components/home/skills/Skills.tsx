import { ExperienceType } from "../../../models/experienceType.enum";
import IExperiences from "../../../models/IExperiences";
import Experience from "../experience/Experience";
import { Timeline } from '@material-ui/lab';
import "./Skills.scss";
import ILangs from "../../../models/ILangs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    const experiences: IExperiences[] = [
        {
            name: "Full-stack Developer",
            type: ExperienceType.PROFESSIONAL,
            company: "MoovLab",
            location: "Grenoble",
            startDate: new Date("2021-01-04"),
            endDate: "Now"
        },
        {
            name: "Associate Software Engineer",
            type: ExperienceType.PROFESSIONAL,
            company: "Sage",
            location: "Annecy",
            startDate: new Date("2019-10-14"),
            endDate: new Date("2020-08-01")
        },
        {
            name: "Full-stack Developer internship",
            type: ExperienceType.PROFESSIONAL,
            company: "Agence Future",
            location: "Annecy",
            startDate: new Date("2019-01-01"),
            endDate: new Date("2019-02-01")
        },
        {
            name: "Full-stack Developer internship",
            type: ExperienceType.PROFESSIONAL,
            company: "Agence Future",
            location: "Annecy",
            startDate: new Date("2018-05-01"),
            endDate: new Date("2019-06-01")
        },
        {
            name: "BTS SIO option SLAM",
            type: ExperienceType.EDUCATIONAL,
            company: "Lycée Saint Michel",
            location: "Annecy",
            startDate: new Date("2017-09-01"),
            endDate: new Date("2019-06-01")
        },
        {
            name: "Bac Professionnel ELEEC",
            type: ExperienceType.EDUCATIONAL,
            company: "CFAI",
            location: "Thyez",
            startDate: new Date("2014-09-01"),
            endDate: new Date("2016-06-01")
        }
    ];

    const langs: ILangs[] = [
        {
            name: "HMTL5",
            class: "devicon-html5-plain colored"
        },
        {
            name: "CSS3",
            class: "devicon-css3-plain colored"
        },
        {
            name: "JavaScript",
            class: "devicon-javascript-plain colored"
        },
        {
            name: "TypeScript",
            class: "devicon-typescript-plain colored"
        },
        {
            name: "Ruby",
            class: "devicon-ruby-plain colored"
        },
        {
            name: "C#",
            class: "devicon-csharp-plain colored"
        },
        {
            name: "Sass",
            class: "devicon-sass-plain colored"
        },
        {
            name: "SQL",
            class: "devicon-mysql-plain colored"
        }
    ];

    const frameworks: ILangs[] = [
        {
            name: "Node.js",
            class: "devicon-nodejs-plain colored",
        },
        {
            name: "Express.js",
            class: "devicon-express-original",
        },
        {
            name: "React",
            class: "devicon-react-plain colored",
        },
        {
            name: "Vue.js",
            class: "devicon-vuejs-plain colored",
        },
        {
            name: "Angular",
            class: "devicon-angularjs-plain colored",
        },
        {
            name: "Mocha",
            class: "devicon-mocha-plain colored",
        },
        {
            name: "Rails",
            class: "devicon-rails-plain colored",
        },
        {
            name: "Bootstrap",
            class: "devicon-bootstrap-plain colored",
        }
    ]
    
    const utils: ILangs[] = [
        {
            name: "Git",
            class: "devicon-git-plain colored"
        },
        {
            name: "Apache",
            class: "devicon-apache-plain colored"
        },
        {
            name: "SSH",
            class: "devicon-ssh-plain"
        },
        {
            name: "NPM",
            class: "devicon-npm-original-wordmark colored"
        },
        {
            name: "Github",
            class: "devicon-github-plain"
        },
        {
            name: "Firebase",
            class: "devicon-firebase-plain colored"
        },
        {
            name: "MongoDB",
            class: "devicon-mongodb-plain colored"
        },
    ];
    
    const os: ILangs[] = [
        {
            name: "Linux",
            class: "devicon-linux-plain"
        },
        {
            name: "Windows",
            class: "devicon-windows8-plain colored"
        }
    ];

    return (
        <div className="skills" id="skills">
            <div className="title">
                Skills & Experiences
            </div>
            <div className="container">
                <div className="details">
                    <div className="details-group hard-skills">
                        <div className="title">Hard skills</div>
                        <div className="skill-group langs">
                            <div className="childrens">
                            {
                                langs.map((lang, index) => {
                                    return (
                                        <div className="lang-item" key={index}>
                                            <i className={lang.class}></i>
                                            <div className="name">{ lang.name }</div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="skill-group frameworks">
                            <div className="childrens">
                            {
                                frameworks.map((lang, index) => {
                                    return (
                                        <div className="lang-item" key={index}>
                                            <i className={lang.class}></i>
                                            <div className="name">{ lang.name }</div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="skill-group utils">
                            <div className="childrens">
                            {
                                utils.map((lang, index) => {
                                    return (
                                        <div className="lang-item" key={index}>
                                            <i className={lang.class}></i>
                                            <div className="name">{ lang.name }</div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="skill-group os">
                            <div className="childrens">
                            {
                                os.map((lang, index) => {
                                    return (
                                        <div className="lang-item" key={index}>
                                            <i className={lang.class}></i>
                                            <div className="name">{ lang.name }</div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                    <div className="details-group soft-skills">
                        <div className="title">Soft skills</div>
                        <div className="skill-group soft">
                            <div className="childrens">
                                <div className="skill">
                                    Communication
                                </div>
                                <div className="skill">
                                    Teamwork
                                </div>
                                <div className="skill">
                                    Eager to learn
                                </div>
                                <div className="skill">
                                    Problem-solving
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="curriculum">
                    <div className="desktop">
                        <Timeline align="alternate">
                        { 
                            experiences.map((experience, index) => {
                                return (
                                    <Experience experience={experience} key={index} />
                                )
                            })
                        }
                        </Timeline>
                    </div>
                    <div className="mobile">
                        <div className="title">Experiences</div>
                        { 
                            experiences.map((experience, index) => {
                                return (
                                    <div className="experience-mobile" key={index}>
                                        <div className="ico">
                                            {(
                                                () => {
                                                    if (experience.type !== ExperienceType.PROFESSIONAL) {
                                                        return (
                                                            <FontAwesomeIcon icon={faGraduationCap} className="icon educ" size="2x" />
                                                        );
                                                    }
                                                    
                                                    return (
                                                        <FontAwesomeIcon icon={faBriefcase} className="icon prof" size="2x" />
                                                    );
                                                }
                                            )()}
                                        </div>
                                        <div className="details">
                                            <div className="title">
                                                {experience.name}
                                            </div>
                                            <div className="data">
                                                <div className="company">
                                                    { experience.company }
                                                </div>
                                                -
                                                <div className="location">
                                                    { experience.location }
                                                </div>
                                                -
                                                <div className="period">
                                                    { experience.startDate.toLocaleString('default', { month: 'long'}) } { experience.startDate.getFullYear() } to {(
                                                        () => {
                                                            if (typeof(experience.endDate) === 'string') {
                                                                return (
                                                                    experience.endDate
                                                                );
                                                            }

                                                            return (
                                                                experience.endDate.toLocaleString('default', { month: 'long'}) + " " + experience.endDate.getFullYear()
                                                            )
                                                        }
                                                    )()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills