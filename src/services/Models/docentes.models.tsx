

interface IMaterias{
    nombreMateria:string
}
interface IHorarioLunes{
    
    horarioLunes:string
}
interface IHorarioMartes{
    horarioMartes:string
}
interface IHorarioMiercoles{
    horarioMiercoles:string
}
interface IHorarioJueves{
    horarioJueves:string
}
interface IHorarioViernes{
    horarioViernes:string
}
 

export interface IDocentes{
    _id:string,
    nombreDocente:string,
    apellidoDocente:string,
    direscioniDocente:string,
    telefonoDocente:string,
    materiasDocente:Array<IMaterias>,
    lunes:Array<IHorarioLunes>,
    martes:Array<IHorarioMartes>,
    miercoles:Array<IHorarioMiercoles>,
    jueves:Array<IHorarioJueves>,
    viernes:Array<IHorarioViernes>,
}



export interface IDocentesRegistrar{
    nombreDocente:string,
    apellidoDocente:string,
    direscioniDocente:string,
    telefonoDocente:string,
    materiasDocente:Array<IMaterias>,
    lunes:Array<IHorarioLunes>,
    martes:Array<IHorarioMartes>,
    miercoles:Array<IHorarioMiercoles>,
    jueves:Array<IHorarioJueves>,
    viernes:Array<IHorarioViernes>,
}








export interface ResponseDocenteRegistrado{
    status:number,
    message:string
}





//editar models

interface IMateriasEdit{
    nombreMateria:string
}
interface IHorarioLunesEdit{
    
    horario:string
}
interface IHorarioMartesEdit{
    horario:string
}
interface IHorarioMiercolesEdit{
    horario:string
}
interface IHorarioJuevesEdit{
    horario:string
}
interface IHorarioViernesEdit{
    horario:string
}
 

export interface IDocentesEdit{
    _id:string,
    nombreDocente:string,
    apellidoDocente:string,
    direscioniDocente:string,
    telefonoDocente:string,
    materiasDocente:Array<IMateriasEdit>,
    lunes:Array<IHorarioLunesEdit>,
    martes:Array<IHorarioLunesEdit>,
    miercoles:Array<IHorarioLunesEdit>,
    jueves:Array<IHorarioLunesEdit>,
    viernes:Array<IHorarioLunesEdit>,
}