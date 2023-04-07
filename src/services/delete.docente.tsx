import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const deleteDocentes = (id:string)=>{

    const config = {
        method : 'DELETE',
        url:`${process.env.REACT_APP_URL_DELETE_DOCENTE}${id}`,
        headers:{
            Authorization:`${cookie.get('token')}`
        },
    }



    const reponseDeleteDocente = axios.request(config)
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        console.log(err.response.data);
        return err.response.data;
    });
    
    return reponseDeleteDocente;
}


