import { projectType } from "./projectType.enum";

export default interface IProjects {
    name: string,
    description: string,
    image: string,
    link: string,
    type: projectType,
    date: Date[]
}