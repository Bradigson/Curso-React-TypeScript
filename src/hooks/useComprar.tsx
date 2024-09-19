import useGetTarjeta from "./getTarjetas";
import cookies from 'js-cookie';
import { ITarjetas } from "@/database/tarjetas.database";


const useComprar = ()=>{

    const getAllTarjetas = ():Promise<ITarjetas[]>=>{
        return new Promise(async (resolve, reject)=>{
            try {
                const tarjetas = await cookies.get("tarjetas");
                const parsearTaarjetas:ITarjetas[] = JSON.parse((tarjetas ?? ''));
                return resolve(parsearTaarjetas);
            } catch (error) {
             return reject(error);   
            }
        })
    }

    const updateTarjetas = (tarjetas:ITarjetas[]):Promise<boolean>=>{
        return new Promise(async(resolve, reject)=>{
            try {
                await cookies.remove('tarjetas');
                await cookies.set('tarjetas', JSON.stringify(tarjetas));
                resolve(true);
            } catch (error) {
                reject(false);
            }
        })
    }
    

    const handleComprarTarjetas = async (
            secuencia:string, 
            tipo:string, 
            viajes:number, 
            nombre:string, 
            correo:string,
            direccion:string, 
            ciudad:string, 
            estado:string)=>{
        //get all cards form de cookies
        const tarjetas:ITarjetas[] = await getAllTarjetas();
        console.log(tarjetas)
        //get last position
        let index:number = tarjetas.length - 1;
        //get last element in the cards array
        let lastElement:ITarjetas = tarjetas[index];
        //fild up a object
        const tarjetaInfo:ITarjetas = {
            id:lastElement.id += 1,
            number : (secuencia.match(/.{1,4}/g)?.join(' ') ?? ''),
            principal:false,
            tipo:tipo,
            viajes:viajes,
            p_nombrecompleto:nombre,
            p_correo:correo,
            direccion:direccion,
            ciudad:ciudad,
            estado:estado
        }
        //add the object into the cards array
        tarjetas.push(tarjetaInfo);
        let response = updateTarjetas(tarjetas);
        console.log(response)
    }
    return {handleComprarTarjetas}
}


export default useComprar;