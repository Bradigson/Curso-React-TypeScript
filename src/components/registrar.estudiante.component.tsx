import { RegistrarEstudiantesService} from "../services/registrar.estudiante";
import { IResponseRegistrarEstudiante, IRequestRegistrarEstudiante, IErrorRegistrarEstudiante, IDireccionEstudianteInput } from "../services/Models/registrar.estudiante.models";
import '../assets/styles/mobile/registrar.estudiantes.scss';
import Header from "./header.component";
import validator from "validator";
import { motion } from "framer-motion";

import { useState } from "react";



const RegistrarEstudiante = ()=>{

    const [direccion, setDireccion] = useState<string>("");
    const [numeroCasa, setNumeroCasa] = useState<string>("");
    const [referencia, setReferencia] = useState<string>("");
    const [numeroTelefono, setNumeroTelefono] = useState<string>("");
    const [numeroCelular, setNumeroCelular] = useState<string>("");
    const [errorInComing, setErrorInComing] = useState<string>("");
  
    const [errorRegistrarEstudiante, setErrorRegistrarEstudiante] = useState<IErrorRegistrarEstudiante>();
    const [responserRegistrar, setResponseRegistrar] = useState<IResponseRegistrarEstudiante>();
    
    const [request, setRequest] = useState<IRequestRegistrarEstudiante>({
        nombre : "",
        apellido:"",
        edad: 0,
        email:"",
        direccionEstudiante:[],
        curso : "",
        profesor : "",
        calificacion : "",
        nombrePadre : "",
        nombreMadre : "",
        tutor : "",
        status : "",
        condicionMedica : "",
        fechaInscripcion : "",
        fechaRetiro : ""

    });
    const [loading, setLoading] = useState<boolean>();

    //onchanges
    const [edad, setEdad] = useState<number>(0);

    const handleNombre = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        });
        
    }

    const handleApellido = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }


    const handleEdad = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }

    const handleEmail = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }

    const handleDireccion  = (e:any)=>{
        setDireccion(e.target.value);
    }


    const handleNumeroCasa = (e:any)=>{
        
        setNumeroCasa(e.target.value);
    }

    const handleReferencia = (e:any)=>{
        setReferencia(e.target.value);
    }

    const handleNumeroTelefono = (e:any)=>{
        setNumeroTelefono(e.target.value);
    }

    const handleNumeroCelular = (e:any)=>{
        setNumeroCelular(e.target.value);
    }

    const handleCurso = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }




    const handleprofesor = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }


    const handlecalificacion = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }


    const handlenombrePadre = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }


    const handlenombreMadre = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }


    const handletutor = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }


    const handlestatus = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }


    const handlecondicionMedica = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }


    const handlefechaInscripcion = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }


    const handlefechaRetiro = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }



    const handleRegistrarEstudiante = async (e:any)=>{
        e.preventDefault();
        setErrorInComing("");

        
        if(validator.isEmpty(request.nombre)){
            setErrorInComing("Campo nombre no puede estar vacio");
        }else{
            if(validator.isEmpty(request.apellido)){
                setErrorInComing("Campo apellido no puede estar vacio");
            }else{
                if(request.edad <= 0){
                    setErrorInComing("Campo edad no puede estar vacio");
                }else{
                    setLoading(!loading);

                    setErrorRegistrarEstudiante({
                        code:0,
                        message:"",
                        details:[
                            {
                                field:"",
                                message:""
                            }
                        ]
                    });
                    setResponseRegistrar({
                        state:0,
                        message:""
                    })
                    request.direccionEstudiante.push({
                        direccion : direccion,
                        numeroCasa : numeroCasa,
                        referencia : referencia,
                        numeroTelefono : numeroTelefono,
                        numeroCelular : numeroCelular
                    })
                

                    const responseRegistStudents = await RegistrarEstudiantesService(request);
                    if(responseRegistStudents.code == 400){
                        const deserializeErrorRegistrarEstudiante = JSON.stringify(responseRegistStudents);
                        const responseDeserializeErrorRegistrarEstudiante  = JSON.parse(deserializeErrorRegistrarEstudiante);
                        setErrorRegistrarEstudiante( responseDeserializeErrorRegistrarEstudiante);
                        setLoading(false);
                        
                        setRequest({
                            nombre : "",
                            apellido:"",
                            edad: 0,
                            email:"",
                            direccionEstudiante:[],
                            curso : "",
                            profesor : "",
                            calificacion : "",
                            nombrePadre : "",
                            nombreMadre : "",
                            tutor : "",
                            status : "",
                            condicionMedica : "",
                            fechaInscripcion : "",
                            fechaRetiro : ""
                    
                        });

                        setDireccion("");
                        setNumeroCasa("");
                        setReferencia("");
                        setNumeroTelefono("");
                        setNumeroCelular("");

                    }
                    else{
                        setResponseRegistrar(responseRegistStudents);
                        setLoading(false);
                        setRequest({
                            nombre : "",
                            apellido:"",
                            edad: 0,
                            email:"",
                            direccionEstudiante:[],
                            curso : "",
                            profesor : "",
                            calificacion : "",
                            nombrePadre : "",
                            nombreMadre : "",
                            tutor : "",
                            status : "",
                            condicionMedica : "",
                            fechaInscripcion : "",
                            fechaRetiro : ""
                    
                        });
                        setDireccion("");
                        setNumeroCasa("");
                        setReferencia("");
                        setNumeroTelefono("");
                        setNumeroCelular("");
                    }
                }
            }
        }
        
    } 


    return(
        <section className="registrar-estudiantes">
                <Header/>
            <article className="registrar-estudiantes_article-1">
                 
                <div className="text-danger">{errorInComing}</div>
                <motion.form className="registrar-estudiantes-article-1_form"
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: .6 }}>

                    <div className="text-center text-danger">
                        {
                            errorRegistrarEstudiante?.message
                        }
                    </div>
                    <div className="text-center text-success">
                        {
                            responserRegistrar?.message
                        }
                    </div>
                    <div className="registrar-estudiantes-article-1_inputs">

                        <div className="registrar-estudiantes-article-1_inputs_desktop">
                            <div className="registrar-estudiantes-article-1_input">
                                <input type="text" placeholder="Nombre" name="nombre" value={request.nombre} onChange={handleNombre}/>
                                <input type="text" placeholder="Appellido" name="apellido" value={request.apellido} onChange={handleApellido}/>
                            </div>
                            
                            <div className="registrar-estudiantes-article-1_input">
                                <input type="number" placeholder="Edad" name="edad" value={request.edad} onChange={handleEdad}/>
                                <input type="email" placeholder="Email" name="email" value={request.email} onChange={handleEmail}/>
                            </div>  

                        </div>

                      

                        <div className="registrar-estudiantes-article-1-inputs_details border">
                            <div className="registrar-estudiantes-article-1_input">
                                <input type="text" placeholder="Direccion" name="direccion" value={direccion} onChange={handleDireccion}/>
                                <input type="text" placeholder="Numero Casa" name="numeroCasa" value={numeroCasa} onChange={handleNumeroCasa}/>
                            </div>
                            <div className="registrar-estudiantes-article-1_input">
                                <input type="text" placeholder="Referencia" name="referencia" value={referencia}  onChange={handleReferencia}/>
                                <input type="text" placeholder="Numero Telefono"  value={numeroTelefono} onChange={handleNumeroTelefono}/>
                            </div>  
                            <div className="registrar-estudiantes-article-1_input">
                                <input type="text" placeholder="Numero Celular" name="numeroCelular" value={numeroCelular} onChange={handleNumeroCelular}/>
                            </div>  
                        </div>

                        <div className="registrar-estudiantes-article-1_inputs_desktop">
                            <div className="registrar-estudiantes-article-1_input">
                                <input type="text" placeholder="curso" name="curso" value={request.curso} onChange={handleCurso}/>
                                <input type="text" placeholder="profesor" name="profesor" value={request.profesor} onChange={handleprofesor}/>
                            </div>
                            <div className="registrar-estudiantes-article-1_input">
                                <input type="text" placeholder="calificacion"  name="calificacion" value={request.calificacion} onChange={handlecalificacion}/>
                                <input type="text" placeholder="nombrePadre" name="nombrePadre" value={request.nombrePadre} onChange={handlenombrePadre}/>
                            </div> 
                        </div>
                        

                        <div className="registrar-estudiantes-article-1_inputs_desktop">
                            <div className="registrar-estudiantes-article-1_input">
                                <input type="text" placeholder="nombreMadre" name="nombreMadre" value={request.nombreMadre} onChange={handlenombreMadre}/>
                                <input type="text" placeholder="tutor" name="tutor" value={request.tutor} onChange={handletutor}/>
                            </div>
                            <div className="registrar-estudiantes-article-1_input">
                                <input type="text" placeholder="status" name="status" value={request.status} onChange={handlestatus}/>
                                <input type="text" placeholder="condicionMedica" name="condicionMedica" value={request.condicionMedica} onChange={handlecondicionMedica}/>
                            </div> 


                            <div className="registrar-estudiantes-article-1_input">
                                <input type="date" placeholder="fechaInscripcion" name="fechaInscripcion" value={request.fechaInscripcion} onChange={handlefechaInscripcion}/>
                                <input type="date" placeholder="fechaRetiro" name="fechaRetiro" value={request.fechaRetiro} onChange={handlefechaRetiro}/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="button_destop">
                        <button className="btn btn-primary mt-2" onClick={(e)=> handleRegistrarEstudiante(e)}>
                            {
                                loading ? (
                                    <div className="form-loading-registration">
                                        <div className="spinner-border spinner-border-sm text-light" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className="ms-2">Registrando...</div>
                                    </div>
                                ):(
                                    <div>Registrar</div>
                                )
                            }
                        </button>
                    </div>
                </motion.form>
                <div className="registrar-estudiantes_article-2">
                    
                </div>

            </article>
        </section>
    )
}


export default RegistrarEstudiante;