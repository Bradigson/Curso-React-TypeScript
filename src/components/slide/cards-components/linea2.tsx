import { useState, useEffect } from "react";
import { ILinea2 } from "@/database/linea2.database";
import { linea2 } from "@/database/linea2.database";
import Link from "next/link";


const Linea2 = () => {

    const [stateLinea2, setStateLinea2] = useState<ILinea2[]>([]);

    useEffect(()=>{
        setStateLinea2(linea2);
    },[stateLinea2])

    return (
        <div className="linea1 text-gray-50">
            <ul className="linea2_list">
                {
                    stateLinea2?.map((l)=>
                    <li key={l.id} className="linea2_list_stacion">
                        <Link href="">
                            {l.title}
                        </Link>
                    </li>
                        
                    )
                }
            </ul>

            <div className="linea2_button">
                <button>
                    LINEA 2
                    <i className='linea2_button_icon bx bx-chevron-right ms-4 text-2xl'></i>
                </button>
            </div>
        

        </div>
    )
};

export default Linea2;
