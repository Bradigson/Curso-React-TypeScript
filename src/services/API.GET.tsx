import axios from 'axios';
import { IPortafolio } from './Models';




export const getData = ():Promise<IPortafolio[]>=>{
    const config = {
        method : 'GET',
        url : `${process.env.REACT_APP_API_URL_GET}`,
    }


    const _response = axios.request(config)
    .then((res)=>{
        const _res = res.data.map((p:IPortafolio)=>({
            name :p.name,
            about : p.about,
            skills:p.skills,
            services:p.services,
            proyects:p.proyects,
            hobbies:p.hobbies,
            createdAt : p.createdAt,
            updatedAt : p.updatedAt,
            _id : p._id 
        }))
        //console.log(_res);
        return _res ;
    })
    .catch((err)=>{
        console.log(err);
        return err.response;
    })


    return _response;
}