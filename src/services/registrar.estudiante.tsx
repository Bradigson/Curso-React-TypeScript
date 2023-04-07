import axios from 'axios';
import Cookies from 'universal-cookie';
import { IRequestRegistrarEstudiante } from './Models/registrar.estudiante.models';


const cookie = new Cookies();

export const RegistrarEstudiantesService = (requestBody : IRequestRegistrarEstudiante)=>{

    const config = {
        method : 'POST',
        url : `${process.env.REACT_APP_URL_POST_REGISTRAR_ESTUDIANTE}`,
        headers:{
            Authorization :`${cookie.get('token')}`,
        },
        data:{
            nombre : requestBody.nombre,
            apellido:requestBody.apellido,
            edad: requestBody.edad,
            email:requestBody.email,
            direccionEstudiante:requestBody.direccionEstudiante,
            curso:requestBody.curso,
            profesor:requestBody.profesor,
            calificacion:requestBody.calificacion,
            nombrePadre:requestBody.nombrePadre,
            nombreMadre : requestBody.nombreMadre,
            tutor : requestBody.tutor,
            status : requestBody.status,
            condicionMedica : requestBody.condicionMedica,
            fechaInscripcion:requestBody.fechaInscripcion,
            fechaRetiro:requestBody.fechaRetiro
        }
    };

    const responseRegistrarEstudiante = axios.request(config)
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        console.error(err.response.data)
        return err.response.data.error
    });


    return responseRegistrarEstudiante;
}