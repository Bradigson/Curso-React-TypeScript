import axios from 'axios';
import { IRequestRegistrarEstudiante } from './Models/registrar.estudiante.models';
import Cookies from 'universal-cookie';
import { IAddress } from './Models/update.students.models';

const cookies = new Cookies();
export const updateStudentsRequest = (id:any, props:IRequestRegistrarEstudiante, addres:IAddress)=>{

  
    const options = {
        method: 'PUT',
        url: `${process.env.REACT_APP_URL_UPDATE_STUDENTS}${id}`,
        headers: {
          Authorization: `${cookies.get('token')}`
        },
        data: {
          nombre: props.nombre,
          apellido: props.apellido,
          edad: props.edad,
          email: props.email,
          direccionEstudiante: [
            {
              direccion: addres.direccion,
              numeroCasa: addres.numeroCasa,
              referencia: addres.referencia,
              numeroTelefono: addres.numeroTelefono,
              numeroCelular: addres.numeroCelular
            }
          ],
          curso: props.curso,
          profesor: props.profesor,
          calificacion: props.calificacion,
          nombrePadre: props.nombrePadre,
          nombreMadre: props.nombreMadre,
          tutor: props.tutor,
          status: props.status,
          condicionMedica: props.condicionMedica,
          fechaInscripcion: props.fechaInscripcion,
          fechaRetiro: props.fechaRetiro
        }
      };
      
      const responseUpdateStudent = axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data;
      }).catch(function (error) {
        console.log(error);
        return error;
      });

      return responseUpdateStudent
}