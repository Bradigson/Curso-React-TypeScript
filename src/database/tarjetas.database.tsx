export interface ITarjetas {
    id: number;
    number: string;
    tipo: string;
    viajes: number;
    principal:boolean
}

const AllTarjetas: ITarjetas[] = [
    {
        id: 1,
        number: "2345 4323 5678 0987",
        tipo: "Green",
        viajes: 15,
        principal : true,
    }
];

export { AllTarjetas };
