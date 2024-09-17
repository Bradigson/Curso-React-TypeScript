import { ITarjetas } from "@/database/tarjetas.database";
import cookies from 'js-cookie';

const useGetTarjeta = ()=>{

    const handleGetTarjetPrincipal = ():Promise<ITarjetas | undefined>=>{
        return new Promise(async(resolve, reject)=>{
            try {
                const response = await cookies.get('tarjetas');
                const parseResponse : ITarjetas[] = JSON.parse((response ?? ''));
                let filter : ITarjetas | undefined = parseResponse.find((f)=> f.principal === true);
                resolve(filter);
            } catch (error) {
                reject(error);
            }
        })
    }
    return { handleGetTarjetPrincipal }
}

export default useGetTarjeta;