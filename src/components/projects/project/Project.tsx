import IProjects from "../../../models/IProjects";
import "./Project.scss";

type ProjectProps = { project: IProjects };

function Project({ project }: ProjectProps) {
    return (
        <a href={project.link} target="_blank" rel="noreferrer" className="project">
            <div className={"type " + project.type}>
                {/* {project.type} */}
            </div>
            <div className="image" style={{ backgroundImage: `url(${project.image})` }} >
            </div>
            <div className="details">
                <div className="title">
                    {project.name}
                </div>
                <div className="description">
                    {project.description}
                </div>
                <div className="period">
                    {(
                        () => {
                            if (project.date.length > 1) {
                                return (
                                    project.date[0].getFullYear() + "-" + project.date[1].getFullYear()
                                ); 
                            }

                            return (
                                project.date[0].getFullYear()
                            );
                        }
                    )()}
                </div>
            </div>
        </a>
    );
}

export default Project