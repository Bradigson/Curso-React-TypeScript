import axios from 'axios';
import Cookies from 'universal-cookie';


const cookie = new Cookies();

export const getMateriasRequest = ()=>{
    const config = {
        method : 'GET',
        url :`${process.env.REACT_APP_URL_MATERIAS}`,
        headers:{
            Authorization : `${cookie.get('token')}`
        }
    }


    const response = axios.request(config)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err);
        return err;
    });
 

    return response;
}