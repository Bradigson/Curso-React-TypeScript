import axios from 'axios';
import { ILoginRquest, ILoginResponse } from './Models/models';
import Cookies from 'universal-cookie';
import validator from 'validator'
import { Exception } from 'sass';




export const LoginRequest = ({userName, userPassword}:ILoginRquest)=>{
    const cookie = new Cookies();

    const options = {
        method: 'POST',
        url: `${process.env.REACT_APP_URL_LOGIN}`,
        data: {
            userName: userName, 
            userPassword: userPassword
        }
      };
      
      const responseLogin = axios.request(options)
      .then(function (response) {
        const data:ILoginResponse = response.data;
        
        if(validator.isEmpty(data.token)){ 
            console.log("no token")
        }else{
            cookie.set('token', data.token,{});
            cookie.set('username', userName);
        }
        return data

      }).catch(function (error) {
        return error.response.data.error
        //console.log(error.response.data.error)
        
      });

    

    return responseLogin;
}