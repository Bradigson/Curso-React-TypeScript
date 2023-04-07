
interface IDetails{
    field:string,
    message:string
}

export interface IErrorRegistrarEstudiante{
    code:number,
    message:string,
    details:Array<IDetails>
}



export interface IResponseRegistrarEstudiante{
    state:number,
    message:string
}



interface IDireccionEstudiante{
    direccion:string,
    numeroCasa:string,
    referencia:string,
    numeroTelefono:string,
    numeroCelular:string
}
export interface IRequestRegistrarEstudiante{
    nombre : string,
    apellido:string,
    edad: number,
    email:string,
    direccionEstudiante:Array<IDireccionEstudiante>,
    curso:string,
    profesor:string,
    calificacion:string,
    nombrePadre:string,
    nombreMadre : string,
    tutor : string,
    status : string,
    condicionMedica : string,
    fechaInscripcion:string,
    fechaRetiro:string
}




//
export interface IDireccionEstudianteInput{
    direccion:string,
    numeroCasa:string,
    referencia:string,
    numeroTelefono:string,
    numeroCelular:string
}