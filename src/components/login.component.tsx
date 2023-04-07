import '../assets/styles/mobile/login.component.scss';
import {Link} from 'react-router-dom';
import { LoginRequest } from '../services/login.service';
import { ChangeEvent, useState } from 'react';
import { ILoginRquest, ILoginResponse, IErrorResponseLogin } from '../services/Models/models';
import Cookies from 'universal-cookie'; 
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const cookie = new Cookies();
const Login = ()=>{
    const cookie = new Cookies();

    const [login, setLogin] = useState<ILoginRquest>({
        userName : "",
        userPassword : "",
        
    });
    const [loginResponse, setLoginResponse] = useState<ILoginResponse>();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const [userName, setUserName] = useState<any>();
    const [userPassword, setUserPassword] = useState<string>();
    const [errorResponseLogin, setErrorResponseLogin] = useState<IErrorResponseLogin>();

    const navigate = useNavigate();
    
    const handleUserName = (e:any)=>{
        setLogin({
            ...login,
            [e.target.name] : [e.target.value]
        })
    }


    const handleUserPassword = (e:any)=>{
        setLogin({
            ...login,
            [e.target.name] : [e.target.value]
        })
    }

    const handleLogin = async(e:any)=>{
        e.preventDefault();
       
        if(login.userName.length <= 0){
            setErrorMessage("El campo username no puede estar vacio");
        }else if(login.userPassword.length <= 0){
            setErrorMessage("El campo userpassword no puede estar vacio");
        }else{
                setErrorMessage("")
                 setLoading(!loading);
        
                await LoginRequest(login)
                .then(data=>{
                    
                    if(data.code == 400){
                        const errorSerialized = JSON.stringify(data);
                        const responseDeserialized = JSON.parse(errorSerialized);
                        setErrorResponseLogin(responseDeserialized);
                        setLoading(false);
                    
                    }else{
                        
                        const successSerialized = JSON.stringify(data);
                        const responseSuccessDeserialized = JSON.parse(successSerialized);
                        setLoginResponse(responseSuccessDeserialized);
                        setLoading(false);
                        navigate('home');
                    }
                    
                })
                setLogin({
                    userName:"",
                    userPassword:""
                })

        }
    }

    const animations = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
      };

    return(
        <div className='login'>
            <motion.div className='login_container' id="login_container"
                variants={animations}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: .6 }}>
                <div className='login_container-title'>
                    <h1>Login</h1>
                </div>
                <form className='login_container_form'>
                    <div className='login_container_form_input'>
                        <input type="text" placeholder="UserName" className="form-control" name="userName" value={login.userName} onChange={handleUserName}/>
                    </div>
                    <div className='login_container_form_input'>
                        <input type="password" placeholder='PassWord' className='form-control' name="userPassword" value={login.userPassword} onChange={handleUserPassword}/>
                    </div>
                    <div className='login_container_form_button'>
                        <button onClick={(e)=> handleLogin(e)}>
                            {
                                loading ? (
                                    <div className='login_container_form_button_loading'>
                                        <div className="spinner-border spinner-border-sm text-light" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className='ms-2'>
                                            Cargando...
                                        </div>
                                    </div>
                                ):(
                                    <div>LOGIN</div>
                                )
                            }
                        </button>
                    </div>
                    <div className='login_container_form_signup'>
                        <Link to="signup">SignUp</Link>
                    </div>
                </form>
                <div className='text-danger text-center'>{errorMessage}</div>
                <div className='text-danger text-center'>{errorResponseLogin?.details.map(err=> err.errorMessage)}</div>
                <div>
                    <div>Fast UserName : Marcelo</div>
                    <div>Fast Password : Bachi23@#</div>
                </div>
            </motion.div>
        </div>
    )
}

export default Login;