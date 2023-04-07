interface IMateriaNombre{
    nombre:string
}

export interface IMaterias{
    status:number, 
    response:Array<IMateriaNombre>
}