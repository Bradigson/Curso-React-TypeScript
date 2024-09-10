import { linea1 } from "@/database/linea1.database";
import { ILinea1 } from "@/database/linea1.database";
import { useEffect, useState } from "react";
import Link from "next/link";


const Linea1 = () => {

    const [stateLinea1, setStateLinea1] = useState<ILinea1[]>([]);

    useEffect(()=>{
        setStateLinea1(linea1);
    },[]);


    return (
        <div className="linea1 text-gray-50">
            <ul className="linea1_list">
                {
                    stateLinea1?.map((l)=>
                    <li key={l.id} className="linea1_list_stacion">
                        <Link href="">
                            {l.title}
                        </Link>
                    </li>
                        
                    )
                }
            </ul>

            <div className="linea1_button">
                <button>
                    LINEA 1
                    <i className='linea2_button_icon bx bx-chevron-right ms-4 text-2xl'></i>
                </button>
            </div>
           

        </div>
    );
};

export default Linea1;
