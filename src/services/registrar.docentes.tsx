import axios from 'axios';
import Cookies from 'universal-cookie';
import { IDocentes } from './Models/docentes.models';


const cookie = new Cookies();

export const registrarDocentes = (docentes:IDocentes)=>
{


    const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_URL_REGISTRAR_DOCENTE}`,
    headers: {
        Authorization: `${cookie.get('token')}`
    },
    data:{
        nombreDocente:docentes.nombreDocente,
        apellidoDocente:docentes.apellidoDocente,
        direscioniDocente:docentes.direscioniDocente,
        telefonoDocente:docentes.telefonoDocente,
        materiasDocente:docentes.materiasDocente,
        lunes:docentes.lunes,
        martes:docentes.martes,
        miercoles:docentes.miercoles,
        jueves:docentes.jueves,
        viernes:docentes.viernes,
    }
    };

    const response = axios.request(options).then(function (response) {
        
        return response.data
    }).catch(function (error) {
        console.error(error);
        return error
    });

    return response;
}