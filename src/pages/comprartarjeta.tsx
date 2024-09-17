import Header from "@/components/header/header";
import Image from "next/image";
import { memo, useMemo, useCallback, useState, useEffect, useRef } from "react";



const ComprarTarjeta = ()=>{

    const [secuencia, setSecuencia] = useState<string>("0000 0000 0000 0000");
    const [counter, setCounter] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleGenerarSecuencia = () => {
        if (intervalRef.current) {
            // Si ya hay un intervalo en curso, lo limpiamos
            clearInterval(intervalRef.current);
        }

        // Reiniciar el contador
        setCounter(0);

        intervalRef.current = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter >= 8) {
                    // Si el contador llega a 5, detener el intervalo
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                    return prevCounter;
                }

                // Generar números aleatorios
                let oneNumber = Math.floor(Math.random() * 9);
                let twoNumber = Math.floor(Math.random() * 9);
                let threeNumber = Math.floor(Math.random() * 9);
                let fourNumber = Math.floor(Math.random() * 9);

                let fiveNumber = Math.floor(Math.random() * 9);
                let sixNumber = Math.floor(Math.random() * 9);
                let nineNumber = Math.floor(Math.random() * 9);
                let tenNumber = Math.floor(Math.random() * 9);

                let elevenNumber = Math.floor(Math.random() * 9);
                let twelveNumber = Math.floor(Math.random() * 9);
                let thirdtennNumber = Math.floor(Math.random() * 9);
                let fourteenNumber = Math.floor(Math.random() * 9);

                let fifteenNumber = Math.floor(Math.random() * 9);
                let sixteenNumber = Math.floor(Math.random() * 9);
                let seventeenNumber = Math.floor(Math.random() * 9);
                let eighteenNumber = Math.floor(Math.random() * 9);

                setSecuencia(`
                    ${oneNumber}${twoNumber}${threeNumber}${fourNumber}  
                    ${fiveNumber}${sixNumber}${nineNumber}${tenNumber}
                    ${elevenNumber}${twelveNumber}${thirdtennNumber}${fourteenNumber} 
                    ${fifteenNumber}${sixteenNumber}${seventeenNumber}${eighteenNumber}
                `);

                return prevCounter + 1;
            });
        }, 200);
    };



    const handleCancelar = ()=>{

        setSecuencia("0000 0000 0000 0000");

    }

    return(
        <div className="compra">
            <Header/>
            <div className="compra_form">


                <div className="border-b border-gray-900/10 pb-12 compra_form-content">
                    <h2 className="text-base font-semibold leading-7 text-gray-50">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-300">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-50">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:outline-none pl-4 text-black border-b border-gray-500 focus:border-b-gray-700"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-50">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:outline-none pl-4 text-black border-b border-gray-500 focus:border-b-gray-700"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                    focus:outline-none pl-4 text-black border-b border-gray-500 focus:border-b-gray-700"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-50">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 pr-4 text-gray-900 shadow-sm 
                                        ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                        focus:outline-none text-black border-b border-gray-500 focus:border-b-gray-700"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>


                        <div className="col-span-full">
                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-50">
                            Street address
                        </label>
                        <div className="mt-2">
                            <input
                            id="street-address"
                            name="street-address"
                            type="text"
                            autoComplete="street-address"
                            className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:outline-none pl-3 text-black border-b border-gray-500 focus:border-b-gray-700"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-50">
                            City
                        </label>
                        <div className="mt-2">
                            <input
                            id="city"
                            name="city"
                            type="text"
                            autoComplete="address-level2"
                            className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:outline-none pl-3 text-black border-b border-gray-500 focus:border-b-gray-700"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-50">
                            State / Province
                        </label>
                        <div className="mt-2">
                            <input
                            id="region"
                            name="region"
                            type="text"
                            autoComplete="address-level1"
                            className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:outline-none pl-3 text-black border-b border-gray-500 focus:border-b-gray-700"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-50">
                            ZIP / Postal code
                        </label>
                        <div className="mt-2">
                            <input
                            id="postal-code"
                            name="postal-code"
                            type="text"
                            autoComplete="postal-code"
                            className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:outline-none pl-3 text-black border-b border-gray-500 focus:border-b-gray-700"
                            />
                        </div>
                        </div>
                    </div>
                </div>




                <div className="compra_tarjeta">

                    <article className="tarjeta">

                        <div className="tarjeta_title">
                            <i className="bx bxl-mastercard text-blue-900 text-6xl pl-2"></i>
                            <div className="tarjeta_title_card_type text-gray-50 pl-4">Green Card</div>
                        </div>

                        <div className="tarjeta_number pl-2">
                            <div className="tarjeta_number_1 text-gray-50">{secuencia}</div>
                        </div>

                        <div className="tarjeta_footer">
                            <div className="tarjeta_footer-description pl-3">
                                <div>
                                    <b className="text-gray-50">Type Tarjeta : </b>
                                    <span className="text-gray-50">green</span>
                                </div>
                                <div className="mx-10 w-40  flex items-center">
                                    <div>
                                        <b className="text-gray-50">Viajes: </b>
                                    </div>
                                    <div className="ml-px">
                                        <span className="ml-1 text-gray-50"> 20/</span>
                                        <span className="text-gray-50">
                                            100
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="tarjeta_footer-images pr-2">
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbXedxEJCoQ8Yrd43J_dFO_Neo2_yol51rQ&s"
                                    alt="_metro"
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Teleferico_logo.jpg"
                                    alt="_teleferico"
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    </article>

                    <div className="compra_tarjeta-buttons">

                        <button className="bg-red-600 text-gray-50" onClick={handleCancelar}>
                            Cancelar
                        </button>

                        {/* <button className="bg-yellow-600 text-gray-50">
                            <i className='bx bx-refresh text-4xl'></i>
                        </button> */}

                        <button className="bg-lime-600 text-gray-50" onClick={handleGenerarSecuencia}>
                            Generar Secuencia
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}


export default memo(ComprarTarjeta);