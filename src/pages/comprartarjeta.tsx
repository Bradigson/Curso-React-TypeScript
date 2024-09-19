import Header from "@/components/header/header";
import Image from "next/image";
import { memo, useMemo, useCallback, useState, useEffect, useRef, ChangeEvent } from "react";
import useComprar from "@/hooks/useComprar";
import MyModal from "@/components/modals/form.modal";


interface IFrom{
    nombre:string,
    apellido:string,
    correo:string,
    tipoTarjeta:string,
    direccion:string,
    ciudad:string,
    estado:string,
    viajes:number
}


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


    const [form, setForm] = useState<IFrom>({
        nombre:'',
        apellido:'',
        correo:'',
        tipoTarjeta:'Tarjetas estándar',
        direccion:'',
        ciudad:'',
        estado:'',
        viajes:0
    })


    const handleOnchangeViajes = (viajes:any)=>{
        setForm((preForm)=>({
            ...preForm,
            viajes :  Number(viajes.target.value)
        }));
    }
    const handleOnchangeNombre = (nombre:ChangeEvent<HTMLInputElement>)=>{
        setForm((preForm)=>({
            ...preForm,
            nombre: nombre.target.value
        }))
    }
    const handleOnchangeApellido = (apellido:ChangeEvent<HTMLInputElement>)=>{
        setForm((preForm)=>({
            ...preForm,
            apellido : apellido.target.value

        }))
    }
    const handleOnchangeCorreo = (correo:ChangeEvent<HTMLInputElement>)=>{
        setForm((preForm)=>({
            ...preForm,
            correo : correo.target.value
        }))
    }
    const handleOnchangeTipoTarjeta = (tipoTarjeta:ChangeEvent<HTMLSelectElement>)=>{
        setForm((preForm)=>({
            ...preForm,
            tipoTarjeta : tipoTarjeta.target.value
        }))
    }
    const handleOnchangeDireccion = (direccion:ChangeEvent<HTMLInputElement>)=>{
        setForm((preForm)=>({
            ...preForm,
            direccion : direccion.target.value
        }))
    }
    const handleOnchangeCiudad = (ciudad:ChangeEvent<HTMLInputElement>)=>{
        setForm((preForm)=>({
            ...preForm,
            ciudad : ciudad.target.value
        }))
    }
    const handleOnchangeEstado = (estado:ChangeEvent<HTMLInputElement>)=>{
        setForm((preForm)=>({
            ...preForm,
            estado : estado.target.value
        }))
    }




    const { handleComprarTarjetas} = useComprar();
    const handleComprar = ()=>{
        if(secuencia !== null && secuencia !== '')
        {
            handleComprarTarjetas(
                secuencia.replace(/\s+/g, ''), 
                form.tipoTarjeta, 
                form.viajes, 
                `${form.nombre}${form.apellido}`, 
                form.correo,
                form.direccion, 
                form.ciudad, 
                form.ciudad);
        }
    }

    return(
        <div className="compra">
            <Header/>
            <div className="compra_form">


                <div className="border-b border-gray-900/10 pb-12 compra_form-content">
                    <h2 className="text-base font-semibold leading-7 text-gray-50">Informacion personal</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-300">Favor proporcionar un email donde pueda recibir notification.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-50">
                                 Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="input block w-full py-1.5 pl-4 focus:outline-none text-white"
                                    value={form.nombre}
                                    onChange={(e)=> handleOnchangeNombre(e)}

                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-50">
                                Apellido
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="input block w-full py-1.5 pl-4 focus:outline-none text-white"
                                    value={form.apellido}
                                    onChange={(e)=> handleOnchangeApellido(e)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">
                                Correo electronico
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="input block w-full py-1.5 pl-4 focus:outline-none text-white"
                                    value={form.correo}
                                    onChange={(e)=> handleOnchangeCorreo(e)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-50">
                                Tipo de tarjeta
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="input block w-full py-1.5 pl-4 focus:outline-none text-white"
                                    value={form.tipoTarjeta}
                                    onChange={(e)=> handleOnchangeTipoTarjeta(e)}
                                >
                                    <option>Tarjetas estándar</option>
                                    <option>Tarjetas premium</option>
                                    <option>Tarjetas con recompensas</option>
                                </select>
                            </div>

                            
                        </div>


                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-50">
                                Direccion
                            </label>
                            <div className="mt-2">
                                <input
                                    id="street-address"
                                    name="street-address"
                                    type="text"
                                    autoComplete="street-address"
                                    className="input block w-full py-1.5 pl-4 focus:outline-none text-white"
                                    value={form.direccion}
                                    onChange={(e)=> handleOnchangeDireccion(e)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-50">
                                Ciudad
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="address-level2"
                                    className="input block w-full py-1.5 pl-4 focus:outline-none text-white"
                                    value={form.ciudad}
                                    onChange={(e)=> handleOnchangeCiudad(e)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-50">
                                Estado / Provincia
                            </label>
                            <div className="mt-2">
                                <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    autoComplete="address-level1"
                                    className="input block w-full py-1.5 pl-4 focus:outline-none text-white"
                                    value={form.estado}
                                    onChange={(e)=> handleOnchangeEstado(e)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-50">
                                Viajes
                            </label>
                            <div className="mt-2">
                                <input
                                    id="postal-code"
                                    name="viajes"
                                    type="text"
                                    autoComplete="postal-code"
                                    className="input block w-full py-1.5 pl-4 focus:outline-none text-white"
                                    value={form.viajes}
                                    onChange={(e)=> handleOnchangeViajes(e)}
                                    
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
                                            {form.viajes}
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

                    <div className="compra_tarjeta_buttons-comprar">

                        <button onClick={handleComprar}>Comprar Targeta</button>

                    </div>

                </div>

            </div>
        </div>
    )
}


export default memo(ComprarTarjeta);