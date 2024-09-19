export interface ITarjetas {
    id: number;
    number: string;
    tipo: string;
    viajes: number;
    principal:boolean,
    p_nombrecompleto:string,
    p_correo:string,
    direccion:string,
    ciudad:string,
    estado:string


}

const AllTarjetas: ITarjetas[] = [
    {
        id: 1,
        number: "2345 4323 5678 0987",
        tipo: "Green",
        viajes: 15,
        principal : true,
        p_nombrecompleto:'',
        p_correo:'',
        direccion:'',
        ciudad:'',
        estado:''
    }
];

export { AllTarjetas };
