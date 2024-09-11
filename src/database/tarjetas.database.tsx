export interface ITarjetas {
    id: number;
    number: string;
    tipo: string;
    viajes: number;
}

const AllTarjetas: ITarjetas[] = [
    {
        id: 1,
        number: "2345 4323 5678 0987",
        tipo: "Green",
        viajes: 15
    },
    {
        id: 2,
        number: "2345 4323 5678 0987",
        tipo: "Green",
        viajes: 15
    },
    {
        id: 3,
        number: "2345 4323 5678 0987",
        tipo: "Green",
        viajes: 15
    }
];

export { AllTarjetas };
