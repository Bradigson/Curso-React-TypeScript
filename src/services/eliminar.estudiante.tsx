import axios from "axios";
import Cookies from "universal-cookie";



const cookie = new Cookies();

export const eliminarEstudiante = (_id:string)=>{

    const options = {
        method: 'DELETE',
        url: `${process.env.REACT_APP_URL_DELETE_ESTUDIANTE}${_id}`,
        headers: {
          Authorization: `${cookie.get('token')}`
        }
      };
      
      const responseEliminar = axios.request(options).then(function (response) {
        return response.data
      }).catch(function (error) {
        return error
      });
      
      return responseEliminar;
}

