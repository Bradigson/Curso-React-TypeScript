import Header from "./header.component";
import { useState, useEffect } from "react";
import { allStudents } from "../services/allstudents.service";
import Cookies from 'universal-cookie';
import { IAllStudentToken, IErrorMessageDenied } from "../services/Models/models";
import validator from "validator";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { readAllStudents } from "../redux/AllStudentsSlice";
import { useNavigate } from "react-router-dom";
import '../assets/styles/mobile/home.component.scss';
import schoolLogo from '../assets/imgs/logoschool.svg';
import { Link } from "react-router-dom";
import EstudianteModal from "./modals/students.modals";
import { eliminarEstudiante } from "../services/eliminar.estudiante";
import { IResponseEliminarEstudiante } from "../services/Models/eliminar.estudiante.models";

 

const cookies = new Cookies();
const Home = ()=>{
    const [loading, setLoading] = useState<boolean>(false);
    const allstudentsSelector = useAppSelector(state=> state.allstudent.students);
    const [errorMessageStudents, setErrorMessageStudents] = useState<IErrorMessageDenied>({
        message:""
    });
    const [responseDelete, setResponseDelete] = useState<IResponseEliminarEstudiante>();
    const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
    const studentsDispatch = useAppDispatch();
    const navigate = useNavigate();

 
    let count:any;
    useEffect(()=>{
        const getAllStudents = async()=>{
            setLoading(!loading);
            const token:string = cookies.get('token');
                await allStudents(token)
            .then((data)=>{
                if(data.status === 200){
                    const deserializedAllStudents = JSON.stringify(data.response);
                    const _resultDeserializedAllStudents = JSON.parse(deserializedAllStudents);
                    studentsDispatch(readAllStudents(_resultDeserializedAllStudents)); 
                    setLoading(false);

                }else{
                    setErrorMessageStudents(data)
                    setLoading(false);
                    navigate('/');
                }
            })
        }
        getAllStudents();
        
    },[allstudentsSelector])


    //count all students activos
    const result =  allstudentsSelector.filter(x=> x.status === "Activo");
    count = result.length;



    //functions 

    const handleEdit = (id:string)=>{
        console.log(id)
    }


    const handleDelete = async(id:string)=>{
        setLoadingDelete(!loadingDelete);
        const response = await eliminarEstudiante(id);
        const deserializeDeleResponse = JSON.stringify(response);
        const responseDeserialized = JSON.parse(deserializeDeleResponse);
         setResponseDelete(response);
        setLoadingDelete(false);

    }

    

    return(
       <div className="home">
            <Header/>

            <section className="home_section-1">
                
                <article className="home-section-1_article-1">

                    <div className="home-section-1_article-1-context">
                        <div className="home-section-1_article-1-title">
                            <b>Bienvenido!</b><br/>
                            <span>Escuela Estudia Por Un Mejor Futuro</span>
                        </div>
                        <div className="home-section-1_article-1_logo">
                            <img src={schoolLogo}/>
                        </div>
                    </div>
                  
                </article>
           

                <article className="home-section-1_article-3">
                    <div>
                        <input type="text" placeholder="search"/>
                        <i className='bx bx-filter-alt ms-2'></i>
                    </div>
                </article>

                <article className="home-section-1_article-2">
                    <div className="home-section-1_article-1_content ">
                        <div className="text-muted ">Estudiantes <span >Activos</span> : <b>{count}</b></div>
                        <div className="text-muted "><span className="text-primary"><Link to="/registrar_estudiante" className="btn btn-primary p-1">Agregar Estudiantes</Link></span></div>
                    </div>
                </article>

                <article className="home-section-1_table">
                    {
                        allstudentsSelector.map((students, index)=>{
                            return(
                                    
                                students.status === "Activo" ? (
                                    <div className="home-section-1-table_tr" key={index}>
                                        <div>{students.nombre}</div>
                                        <div>{students.curso}</div>
                                        <div>{students.status}</div>
                                        <div>
                                           <Link to={`/modal-students/${students._id}`} className="nav-link active text-primary">Details</Link>
                                        </div>
                                        <div><Link to={`/ediart_estudiantes/${students._id}`}><i className='bx bxs-edit text-warning'></i></Link></div>
                                        <div onClick={()=> handleDelete(students._id)}><i className='bx bxs-trash text-danger'></i></div>
                                    </div>
                                ):(
                                   <div key={index}>

                                   </div> 
                                )
                               
                            )
                        })
                    }
                </article>
               
            </section>

            {
                loadingDelete ? (
                    <div className="loading_delete">
                        <div className="loading_delete-content">
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="ms-3 text-light">Cargando...</div>
                        </div>
                    </div>
                ):(
                    <div></div>
                )
            }
       </div>
    )
}


export default Home;