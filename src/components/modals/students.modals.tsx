import { Link, useParams} from "react-router-dom";
import { IStudentsSchema } from "../../services/Models/models";
import Header from "../header.component";
import '../../assets/styles/mobile/students.modals.scss';
import {  useAppSelector } from "../../redux/Store";
import { motion } from "framer-motion";

const EstudianteModal = ()=>{

    let { userid } = useParams();
    const allstudentsSelector = useAppSelector(state=> state.allstudent.students);


    return(
            <div className="students-details">
                <Header/>
 
                <motion.div className="table_detail"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: .4 }}>
                    <ul className="list-group">
                        {
                            allstudentsSelector.filter(x=> x._id === userid).map((students, index)=>{
                                return(
                                    <div key={index}>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Nombre</b> <span className="text-primary">{students.nombre}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Apellido</b> <span className="text-primary">{students.apellido}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Edad</b> <span className="text-primary">{students.edad}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Email</b> <span className="text-primary">{students.email}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <div className="dropdown">
                                                <a className="drop-dwon-details" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Direccion
                                                </a>
                                                {
                                                    students.direccionEstudiante.map((D, index)=>{
                                                        return(
                                                            <ul className="dropdown-menu p-3 border" key={index}>
                                                                <li><b>Direccion : </b><a className="dropdown-item" href="#">{D.direccion}</a></li>
                                                                <li><b>Casa : </b><a className="dropdown-item" href="#">{D.numeroCasa}</a></li>
                                                                <li><b>Cedula : </b><a className="dropdown-item" href="#">{D.numeroCelular}</a></li>
                                                                <li><b>Telefono : </b><a className="dropdown-item" href="#">{D.numeroTelefono}</a></li>
                                                                <li><b>Referencia : </b><a className="dropdown-item" href="#">{D.referencia}</a></li>
                                                            </ul>
                                                        )
                                                    })
                                                }
                                                
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Curso</b> <span className="text-primary">{students.curso}</span> 
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Profesor</b> <span className="text-primary">{students.profesor}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Calificacion</b> <span className="text-primary">{students.calificacion}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Padre</b> <span className="text-primary">{students.nombrePadre}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Madre</b> <span className="text-primary">{students.nombreMadre}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Tutor</b> <span className="text-primary">{students.tutor}</span> 
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Status</b> <span className="text-primary">{students.status}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Condicion Medica</b> <span className="text-primary">{students.condicionMedica}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Fecha Inscripcion</b> <span className="text-primary">{students.fechaInscripcion}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <b>Fecha Retiro</b> <span className="text-primary">{students.fechaRetiro !== null ? students.fechaRetiro : "N/A"} </span>
                                        </li>
                                    </div>
                                )
                            })
                        }
                        
                    </ul>
                </motion.div>

                
               
            </div>
    )
}


export default EstudianteModal;