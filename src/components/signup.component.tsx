import '../assets/styles/mobile/signup.component.scss';
import { SignUpService } from "../services/signup.service";
import { ChangeEvent, useState } from "react";
import { ILoginRquest, IErrorResponseLogin, ISignupResponse } from "../services/Models/models";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const SignUp = ()=>{

    const [signupRequest, setSignupRequest] = useState<ILoginRquest>({
        userName : "",
        userPassword : ""
    });
    const [signupErrorResponse, setSignupErrorResponse] = useState<IErrorResponseLogin>();
    const [signupSuccessResponse, setSignupSuccessResponse] = useState<ISignupResponse>();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorEmptyInput, setErrorEmptyInput] = useState<string>();


   
    const handleUserName = (e:ChangeEvent<HTMLInputElement>)=>{
        setSignupRequest({
            ...signupRequest,
            [e.target.name] : e.target.value
        })
    }

    const handleUserPassword = (e:ChangeEvent<HTMLInputElement>)=>{
        setSignupRequest({
            ...signupRequest,
            [e.target.name] : e.target.value
        })
    }

    const handleSignUp = async (e:any)=>{
        e.preventDefault();

        setErrorEmptyInput("");
        setSignupErrorResponse({
            code:0,
            message : "",
            details: [
            ]
        });

        setSignupSuccessResponse({
            status:0,
            message : ""
        })

        if(signupRequest.userName.length <= 0)
        {

            setErrorEmptyInput("Campo username vacio");

        }else if(signupRequest.userPassword.length <= 0)
        {

            setErrorEmptyInput("Campo userpassword vacio");
        }else
        {
            setLoading(!loading);
            await SignUpService(signupRequest)
            .then((data)=>{
                if(data.code == 400){
                    const errorDeserialized = JSON.stringify(data);
                    const resultErrorDeserialized = JSON.parse(errorDeserialized);
                    setSignupErrorResponse(resultErrorDeserialized);
                    setLoading(false);
                    
                }else{
                    const successDeserialized = JSON.stringify(data);
                    const resultSuccessDeserialized = JSON.parse(successDeserialized);
                    setSignupSuccessResponse(resultSuccessDeserialized);
                    setLoading(false);
                }
            })
        }
    }

    const animations = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 }, 
        exit: { opacity: 0, x: -100 },
      };
      
    return(
        <div className='signup-container'>
            <motion.div className='signup-container_content' id='signup-container_content'
                variants={animations}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: .6 }}>
                <form className='signup-container_form'>
                    <div className="signup-container_form-title text-center">
                        <b>SIGN UP</b>
                    </div>

                    <div className="signup-container_content_errorMessage text-center ">
                        <span className='text-danger'>{signupErrorResponse?.message}</span>
                        <span className='text-danger'>{errorEmptyInput}</span>
                        <span className='text-success'>{signupSuccessResponse?.message}</span>
                    </div>
                    <div className='signup-container_form-input'>
                        <input type="text" placeholder="UserName" className="form-control" name="userName" value={signupRequest.userName} onChange={handleUserName}/>
                    </div>
                    <div className='signup-container_form-input'>
                        <input type="password" placeholder="UserPassword" className="form-control" name="userPassword" value={signupRequest.userPassword} onChange={handleUserPassword}/>
                    </div>
                    <div className='button-container '>
                        <button onClick={(e)=> handleSignUp(e)}>
                            {
                                loading ? (
                                    <div className='button-loading'>
                                        <div className="spinner-border spinner-border-sm text-light" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div className='ms-2'>
                                            Cargando...
                                        </div>
                                    </div>
                                ):(
                                    <div className=''>
                                        SIGNUP
                                    </div>
                                )
                            }
                        </button>
                    </div>
                </form>

                
                <div className='signup-container_content_go-back'>
                    <Link to="/"><i className='bx bx-arrow-back'></i></Link>
                </div>
            </motion.div>
        </div>
    )
}


export default SignUp;