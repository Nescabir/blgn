import { useState } from 'react';
import IProjects from '../../models/IProjects';
import { projectType } from '../../models/projectType.enum';
import Project from './project/Project';
import './Projects.scss';

import bouncingballs from '../../assets/bouncingballs.jpg';
import html from "../../assets/html.jpg";
import php from '../../assets/php.jpg';
import csharp from '../../assets/csharp.jpg';
import hltvbot from '../../assets/hltvbot.jpg';
import BLGN from '../../assets/BLGN.jpg';
import EGC from '../../assets/EGC.jpg';
import ITP from '../../assets/ITP.jpg';

function Projects() {
    const projects: IProjects[] = [
        {
            name: "Portfolio",
            description: "First React project, redesign and remake of my portfolio (this porfolio)",
            image: BLGN,
            link: "https://github.com/Nescabir/blgn",
            type: projectType.PERSONAL,
            date: [new Date("2021-01-01")],
        },
        {
            name: "<IS THIS PROGRESS>",
            description: "World of Warcraft guild's website using Angular and Express",
            image: ITP,
            link: "https://isthisprogress.fr/",
            type: projectType.PERSONAL,
            date: [new Date("2020-01-01")],
        },
        {
            name: "HLTVBot",
            description: "Discord BOT developed with discord.js library",
            image: hltvbot,
            link: "https://github.com/Nescabir/HLTVBot",
            type: projectType.PERSONAL,
            date: [new Date("2019-01-01")],
        },
        {
            name: "PPE4",
            description: "Front-end app using Ruby on Rails and previous API",
            image: EGC,
            link: "https://github.com/Nescabir/PPE4",
            type: projectType.SCHOOL,
            date: [new Date("2019-01-01")],
        },
        {
            name: "PPE3",
            description: "Winform application using C# and previous API",
            image: csharp,
            link: "https://github.com/Nescabir/PPE3",
            type: projectType.SCHOOL,
            date: [new Date("2018-01-01"), new Date("2019-01-01")],
        },
        {
            name: "EG Corp. API",
            description: "REST API based using Symfony and Swagger",
            image: EGC,
            link: "https://github.com/Nescabir/API-REST-EGC",
            type: projectType.SCHOOL,
            date: [new Date("2018-01-01"), new Date("2019-01-01")],
        },
        {
            name: "PPE2",
            description: "Jingle contest website based using PHP",
            image: php,
            link: "https://github.com/Nescabir/PPE2",
            type: projectType.SCHOOL,
            date: [new Date("2018-01-01")],
        },
        {
            name: "PPE1",
            description: "Static single page website for a fake museum",
            image: html,
            link: "https://github.com/Nescabir/PPE1",
            type: projectType.SCHOOL,
            date: [new Date("2017-01-01")],
        },
        {
            name: "Bouncing Balls",
            description: "Simple ball movement on Processing",
            image: bouncingballs,
            link: "https://gist.github.com/Nescabir/661877531bafd884093433cf03eef441",
            type: projectType.PERSONAL,
            date: [new Date("2017-01-01")],
        },
    ];
    const [typeFilter, setTypeFilter] = useState("ALL");

    function handleTypeChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
        setTypeFilter(changeEvent.target.value);
    }

    return (
        <div className="projects">
            <div className="title">
                Projects
            </div>
            <div className="filters">
                <input type="radio" name="type" id="ALL" value="ALL" onChange={handleTypeChange} className="ALL" defaultChecked />
                <label htmlFor="ALL"></label>
                <input type="radio" name="type" id="PERSONAL" value={projectType.PERSONAL} className={projectType.PERSONAL} onChange={handleTypeChange} />
                <label htmlFor="PERSONAL"></label>
                <input type="radio" name="type" id="SCHOOL" value={projectType.SCHOOL} className={projectType.SCHOOL} onChange={handleTypeChange} />
                <label htmlFor="SCHOOL"></label>
            </div>
            <div className="inner">
                {
                    projects.filter((project) => {
                        if (typeFilter === "ALL") {
                            return true
                        }
                        return project.type === typeFilter
                    }).map((project, index) => {
                        return (
                            <Project project={project} key={index} />
                        )
                    })
                }
            </div>
        </div>
    );
}


export default Projects