import axios from "axios";
import Cookies from "universal-cookie";
import { IDocentes } from "./Models/docentes.models";


const cookie = new Cookies();

export const editarDocente = (docentes:IDocentes)=>{
    console.log(docentes._id)
    console.log(process.env.REACT_APP_URL_UPDATE_DOCENTE)
    // const options = {
    //     method: 'PUT',
    //     url: `${process.env.REACT_APP_URL_UPDATE_DOCENTE}${docentes._id}`,
    //     headers: {
    //       Authorization: `${cookie.get('token')}`
    //     },
    //     data: {
    //       nombreDocente: docentes.nombreDocente,
    //       apellidoDocente: docentes.apellidoDocente,
    //       direscioniDocente: docentes.direscioniDocente,
    //       telefonoDocente: docentes.telefonoDocente,
    //       materiasDocente: docentes.materiasDocente,
    //       lunes: docentes.lunes,
    //       martes: docentes.martes,
    //       miercoles: docentes.miercoles,
    //       jueves: docentes.jueves,
    //       viernes: docentes.viernes
    //     }
    //   };
      
    //   const responseEditarDocente = axios.request(options).then(function (response) {
    //     console.log(response.data);
    //     console.log(docentes._id);
    //     return response.data
    //   }).catch(function (error) {
    //     console.error(error);
    //     console.log(docentes._id);
    //     return error.response.data
    //   });

    //   return responseEditarDocente;

}