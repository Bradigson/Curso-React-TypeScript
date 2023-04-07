import axios from 'axios';
import { ILoginRquest } from './Models/models';

export const SignUpService = ({userName, userPassword}:ILoginRquest)=>{

    const config = {
        method: 'POST',
        url: `${process.env.REACT_APP_URL_SIGNUP}`,
        data: {
            userName: userName,
            userPassword: userPassword
        }
    }

    const responseSignUp = axios.request(config)
    .then((response)=>{
        return response.data
    })
    .catch(err=>{
        return err.response.data.error
    });

     return responseSignUp;
} 