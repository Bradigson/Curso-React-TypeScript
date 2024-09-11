import cookie from "js-cookie";
import { ILinea1 } from "@/database/linea1.database";

const useGetLinea1 = () => {
    const getLinea1 = (): Promise<ILinea1[]> => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await cookie.get("linea1");
                const res: ILinea1[] = JSON.parse(response ?? "");
                resolve(res);
            } catch (error) {
                reject(error);
            }
        });
    };
    return { getLinea1 };
};

export default useGetLinea1;
