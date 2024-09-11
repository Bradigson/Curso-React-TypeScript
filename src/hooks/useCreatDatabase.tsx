import cookies from "js-cookie";
import { linea1 } from "@/database/linea1.database";
import { linea2 } from "@/database/linea2.database";
import { AllTarjetas } from "@/database/tarjetas.database";

const useCreateDatabase = () => {
    const setLinea1 = (): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                await cookies.set("linea1", JSON.stringify(linea1), { expires: 5 / 24 });
                return resolve(true);
            } catch (error) {
                return reject(false);
            }
        });
    };

    const setLinea2 = (): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                await cookies.set("linea2", JSON.stringify(linea2), { expires: 5 / 24 });
                return resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };

    const setTarjetas = (): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                await cookies.set("tarjetas", JSON.stringify(AllTarjetas), { expires: 5 / 24 });
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };

    const handleExecute = () => {
        Promise.all([setLinea1(), setLinea2(), setTarjetas()])
            .then(([setlinea1, setlinea2, settarjetas]) => {
                console.log(setlinea1);
                console.log(setlinea2);
                console.log(settarjetas);
            })
            .catch((err) => console.log(err));
    };

    return { handleExecute };
};

export default useCreateDatabase;
