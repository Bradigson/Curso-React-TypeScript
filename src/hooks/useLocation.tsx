// import { useState } from "react";

export interface ILocation {
    latitude: number;
    longitude: number;
}

const useLocation = () => {
    const getLocation = (): Promise<ILocation> => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        resolve({ latitude, longitude });
                    },
                    (error) => {
                        reject(`Error al obtener la ubicación: ${error.message}`);
                    }
                );
            } else {
                reject("La geolocalización no es soportada por este navegador.");
            }
        });
    };

    return { getLocation };
};

export default useLocation;
// const useLocation = ()=>{
//     const [loaction, setLoaction] = useState<ILocation>({
//         latitude:0,
//         longitude:0
//     });

//     const handleLocation = ()=>{

//         // Verifica si el navegador soporta la geolocalización
//         if (navigator.geolocation) {
//             // Obtiene la posición actual
//             navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 // Éxito: la posición fue obtenida
//                 const latitude = position.coords.latitude;
//                 const longitude = position.coords.longitude;
//                 setLoaction({
//                     latitude:latitude,
//                     longitude:longitude
//                 })
//             },
//             (error) => {
//                 // Error: no se pudo obtener la posición
//                 console.error(`Error al obtener la ubicación: ${error.message}`);
//             }
//             );
//         } else {
//             console.error('La geolocalización no es soportada por este navegador.');
//         }

//     }

//     return { handleLocation, loaction }

// }

// export default useLocation;

// useLocation.ts
// const useLocation = () => {
//     const getLocation = (): Promise<ILocation> => {
//       return new Promise((resolve, reject) => {
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(
//             (position) => {
//               const latitude = position.coords.latitude;
//               const longitude = position.coords.longitude;
//               resolve({ latitude, longitude });
//             },
//             (error) => {
//               reject(`Error al obtener la ubicación: ${error.message}`);
//             }
//           );
//         } else {
//           reject('La geolocalización no es soportada por este navegador.');
//         }
//       });
//     };

//     return { getLocation };
//   };

//   export default useLocation;
