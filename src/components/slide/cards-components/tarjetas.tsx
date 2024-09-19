import { ITarjetas } from "@/database/tarjetas.database";
import { AllTarjetas } from "@/database/tarjetas.database";
import { useEffect, useState } from "react";
import cookies from "js-cookie";

const Tarjetas = () => {
    const [misTarjetas, setMisTarjetas] = useState<ITarjetas[]>([]);

    const handleGetTarjetas = async ()=>{
        let alltarjetas = await cookies.get('tarjetas');
        let res:ITarjetas[] = JSON.parse((alltarjetas ?? ''))
        console.log(res)
        //setMisTarjetas(res);
    }

    useEffect(()=>{
        handleGetTarjetas();
    },[])
    // useEffect(() => {
    //     setMisTarjetas(AllTarjetas);
    // }, [misTarjetas]);

    return (
        <div className="tarjeta text-gray-50">
            <div>Mis tarjetas</div>

            <div className="tarjetas_descripcion">
                {misTarjetas?.map((t) => (
                    <div className="tarjetas_descripcion-tarjeta" key={t.id}>
                        <div>{t.number}</div>
                        <div>{t.viajes}</div>
                    </div>
                ))}
            </div>

            <div className="tarjeta_button">
                <button>comprar tarjeta</button>
            </div>
        </div>
    );
};

export default Tarjetas;
