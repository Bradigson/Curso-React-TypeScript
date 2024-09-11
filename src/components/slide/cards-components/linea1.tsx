import { ILinea1 } from "@/database/linea1.database";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import useGetLinea1 from "@/hooks/useGetLine1";

const Linea1 = () => {
    const { getLinea1 } = useGetLinea1();
    const [stateLinea1, setStateLinea1] = useState<ILinea1[]>([]);
    const [error, setError] = useState<string>("");

    const execute = useCallback(() => {
        const res = getLinea1();
        res.then((l1) => {
            setStateLinea1(l1);
        }).catch((err) => {
            setError(err);
        });
    }, [getLinea1]);

    useEffect(() => {
        execute();
    }, [execute]);

    return (
        <div className="linea1 text-gray-50">
            <ul className="linea1_list">
                {stateLinea1?.map((l) => (
                    <li key={l.id} className="linea1_list_stacion">
                        <Link href="">{l.title}</Link>
                    </li>
                ))}
            </ul>

            <div className="linea1_button">
                <button>
                    LINEA 1<i className="linea2_button_icon bx bx-chevron-right ms-4 text-2xl"></i>
                </button>
            </div>
        </div>
    );
};

export default Linea1;
