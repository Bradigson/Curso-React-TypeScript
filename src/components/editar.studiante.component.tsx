import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/Store";
import { IRequestRegistrarEstudiante } from "../services/Models/registrar.estudiante.models";
import { useEffect, useState } from "react";
import { updateStudentsRequest } from "../services/update.student.service";
import { IResponseUpdated } from "../services/Models/update.students.models";
import '../assets/styles/mobile/update.students.scss';
import Header from "./header.component";
import { motion } from "framer-motion";


interface IDireccionEstudiante{
    direccion : string,
    numeroCasa : string,
    referencia : string,
    numeroTelefono : string,
    numeroCelular : string
}
const EditarEstudiantes = ()=>{

    const allstudents = useAppSelector(state=> state.allstudent.students);
    const [student, setStudent] = useState<IRequestRegistrarEstudiante>({
        nombre : "",
        apellido:"",
        edad: 0,
        email:"",
        direccionEstudiante:[{
            direccion : "",
            numeroCasa : "",
            referencia : "",
            numeroTelefono :"",
            numeroCelular :""
        }],
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
    const [address, setAddress] = useState<IDireccionEstudiante>({
        direccion : "",
        numeroCasa : "",
        referencia : "",
        numeroTelefono : "",
        numeroCelular : ""
    });

    const [response, setResponse] = useState<IResponseUpdated>();
    const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);

    const {estudentId} = useParams();
    
    useEffect(()=>{
        allstudents.map(x=>{
            if(x._id === estudentId){
             setStudent(x);
             x.direccionEstudiante.map(D=>{
                setAddress(D);
             })
            }
         });
    },[]);


     //onChange
     const handleNombre = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }

     const handleApellido = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }

     const handleEdad = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }



     const handleEmail = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }


     const handleDireccion = (e:any)=>{
        
       
        setAddress({
            ...address,
            [e.target.name]:e.target.value
        })
     }


     const handleNumeroCasa = (e:any)=>{
        setAddress({
            ...address,
            [e.target.name]:e.target.value
        })
     }


     const handleReferencia = (e:any)=>{
        setAddress({
            ...address,
            [e.target.name]:e.target.value
        })
     }


     const handleNumeroTelefono = (e:any)=>{
        setAddress({
            ...address,
            [e.target.name]:e.target.value
        })
     }

     const handleNumeroCelular = (e:any)=>{
        setAddress({
            ...address,
            [e.target.name]:e.target.value
        })
     }

     const handleCurso = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }


     const handleProfesor = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }

     const handleCalificacion = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }

     const handleNombrePadre = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }

     const handleNombreMadre = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }

     const handleTutor = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }

     const handleStatus = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }

     const handleCondicionMedica = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }

     const handleFechaInscripcion = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }

     const handleFechaRetiro = (e:any)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
     }





     const handleEdit = async(e:any)=>{
        e.preventDefault();
        setLoadingUpdate(!loadingUpdate);
        setResponse({
            status:0,
            message:""
        })
        await updateStudentsRequest(estudentId, student, address)
        .then((data)=>{
            setResponse(data);
            setLoadingUpdate(false);
        })
     }
     
     const animations = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
      }; 
     
    return(
        <section className="update-students">
                <Header/>
                <motion.form className="update-students_form"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: .4 }}>


                    <div className="update-students_form-desktop">
                            <div className="update-students_form_input">
                                <input type="text" placeholder="Nombre" name="nombre" value={student?.nombre} onChange={handleNombre}/>
                                <input type="text" placeholder="Appellido" name="apellido" value={student?.apellido} onChange={handleApellido}/>
                            </div>
                            
                            <div className="update-students_form_input">
                                <input type="number" placeholder="Edad" name="edad" value={student?.edad} onChange={handleEdad}/>
                                <input type="email" placeholder="Email" name="email" value={student?.email} onChange={handleEmail}/>
                            </div>  
                    </div>
                        
                       
                        <div className="update-students_form_inputs_details border">
                            <div className="update-students_form_inputs_details_input">
                                <input type="text" placeholder="Direccion" name="direccion"  value={address?.direccion} onChange={handleDireccion}/>
                                <input type="text" placeholder="Numero Casa" name="numeroCasa" value={address?.numeroCasa} onChange={handleNumeroCasa}/>
                            </div>
                            <div className="update-students_form_inputs_details_input">
                                <input type="text" placeholder="Referencia" name="referencia"  value={address?.referencia} onChange={handleReferencia}/>
                                <input type="text" placeholder="Numero Telefono" value={address?.numeroTelefono} onChange={handleNumeroTelefono}/>
                            </div>  
                            <div className="update-students_form_inputs_details_input">
                                <input type="text" placeholder="Numero Celular" name="numeroCelular" value={address?.numeroCelular} onChange={handleNumeroCelular}/>
                            </div>  
                        </div>

                        <div className="update-students_form-desktop">
                            <div className="update-students_form_input">
                                <input type="text" placeholder="curso" name="curso" value={student?.curso} onChange={handleCurso}/>
                                <input type="text" placeholder="profesor" name="profesor" value={student?.profesor} onChange={handleProfesor}/>
                            </div>
                            <div className="update-students_form_input">
                                <input type="text" placeholder="calificacion"  name="calificacion" value={student?.calificacion} onChange={handleCalificacion}/>
                                <input type="text" placeholder="nombrePadre" name="nombrePadre" value={student?.nombrePadre} onChange={handleNombrePadre}/>
                            </div> 
                        </div>

                       

                        <div className="update-students_form-desktop">
                            <div className="update-students_form_input">
                                <input type="text" placeholder="nombreMadre" name="nombreMadre" value={student?.nombreMadre} onChange={handleNombreMadre}/>
                                <input type="text" placeholder="tutor" name="tutor" value={student?.tutor} onChange={handleTutor}/>
                            </div>
                            <div className="update-students_form_input">
                                <input type="text" placeholder="status" name="status" value={student?.status} onChange={handleStatus}/>
                                <input type="text" placeholder="condicionMedica" name="condicionMedica" value={student?.condicionMedica} onChange={handleCondicionMedica}/>
                            </div> 
                        </div>
                        

                        <div className="update-students_form_input">
                            <input type="text" placeholder="fechaInscripcion" name="fechaInscripcion" value={student?.fechaInscripcion} onChange={handleFechaInscripcion}/>
                            <input type="text" placeholder="fechaRetiro" name="fechaRetiro" value={student?.fechaRetiro} onChange={handleFechaRetiro}/>
                        </div>

                        <div className="mt-3">
                            <button className="btn-update-estudiante" onClick={(e)=> handleEdit(e)}>
                                {
                                    loadingUpdate ? "Actualizando...":"Actualizar"
                                }
                            </button>
                        </div>
                        <div className="text-center text-success">
                            {
                                response?.message
                            }
                        </div>
                </motion.form>
               
        </section>
    )
}


export default EditarEstudiantes;