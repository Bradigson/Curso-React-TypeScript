
interface ISkill{
        titleSkills : string,
        urlicon : string,
        _id : string

}


interface IServices{
    title : string,
    descriptionService : string,
    img : string,
    serviceTitle:String
}

interface IProyect {
    titleProyect : string,
    descriptionProyect : string,
    websideurl : string,
    repositoryurl : string
}


interface IHobbies{
    titleHobbie : string,
    descriptionHobie : string,
    icon : string
}

export interface  IPortafolio{
    name : string,
    about: string,
    skills:Array<ISkill>,
    services:Array<IServices>,
    proyects:Array<IProyect>,
    hobbies : Array<IHobbies>,
    createdAt: string,
    updatedAt:string,
    _id : string
}





// types

export type   IPortafolioType = {
    name : string,
    about: string,
    skills:Array<ISkill>,
    services:Array<IServices>,
    proyects:Array<IProyect>,
    hobbies : Array<IHobbies>,
    createdAt: string,
    updatedAt:string,
    _id : string
}





export type SkilsType = {
    skills:[
        {
        titleSkills : string,
        urlicon : string,
        _id : string
    }],
}






