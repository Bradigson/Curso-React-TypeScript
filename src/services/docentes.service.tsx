import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const DocentesRequest = ()=>{
    const config = {
        method : 'GET',
        url : `${process.env.REACT_APP_URL_TODOS_DOCENTES}`,
        headers:{
            Authorization : `${cookies.get('token')}`
        }
    }


    const responseDocentes = axios.request(config)
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        console.log(err)
        return err.response.error;
    })


    return responseDocentes;
}