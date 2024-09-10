import { useState } from "react";

interface ILocation{
    latitude:number,
    longitude:number
}
const useLocation = ()=>{
    const [loaction, setLoaction] = useState<ILocation>({
        latitude:0,
        longitude:0
    });

    const handleLocation = ()=>{

        // Verifica si el navegador soporta la geolocalización
        if (navigator.geolocation) {
            // Obtiene la posición actual
            navigator.geolocation.getCurrentPosition(
            (position) => {
                // Éxito: la posición fue obtenida
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setLoaction({
                    latitude:latitude,
                    longitude:longitude
                })
            },
            (error) => {
                // Error: no se pudo obtener la posición
                console.error(`Error al obtener la ubicación: ${error.message}`);
            }
            );
        } else {
            console.error('La geolocalización no es soportada por este navegador.');
        }
  
    }

    return { handleLocation, loaction }

}


export default useLocation;