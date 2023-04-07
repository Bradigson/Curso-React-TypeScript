import axios from 'axios';
import { IAllStudentToken} from './Models/models';






export const allStudents = (token:string)=>{


    
    const config = {
        method : 'GET',
        url: `${process.env.REACT_APP_URL_GET_ALLSTUDENTS}`,
        headers: {
            Authorization: `${token}`
        }
    }

    const allstudentsResponse = axios.request(config)
    .then((data)=>{
        return data.data
    })
    .catch((err)=>{
        
        return err.response.data
    });

    return allstudentsResponse;
}