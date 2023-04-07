export interface ILoginRquest {
    userName : string,
    userPassword:string,
}

export interface ILoginResponse{
    status : Number,
    message:string,
    token:string | any | undefined
}


interface errormessage{
    errorMessage:string
}
export interface IErrorResponseLogin{
    code:number,
    message:string,
    details:Array<errormessage>
}




//sign up

export interface ISignupResponse{
    status : number,
    message : string
}







//get all students

export interface IAllStudentToken{
    token:string 
}


interface IDireccionEstudiante{
    direccion:string,
    numeroCasa:string,
    referencia :string,
    numeroTelefono:string,
    numeroCelular:string
}

export interface IStudentsSchema{
    _id:string,
    nombre:string,
    apellido:string,
    edad:number,
    email:string,
    direccionEstudiante:Array<IDireccionEstudiante>
    curso:string,
    profesor:string,
    calificacion:string,
    nombrePadre:string,
    nombreMadre:string,
    tutor:string,
    status:string,
    condicionMedica:string,
    fechaInscripcion:string,
    fechaRetiro:string
}



export interface IErrorMessageDenied{
    message:string
}