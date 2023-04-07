import '../assets/styles/mobile/docente.component.scss';
import { DocentesRequest } from '../services/docentes.service';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/Store';
import { readAllDocentes } from '../redux/docentes.slice';
import Header from './header.component';
import AgregarDocentes from './agregar.docentes';
import { deleteDocentes } from '../services/delete.docente';

const Docentes = ()=>{

    const docentes = useAppSelector(state=> state.alldocentes.docentes);
    const dispatch = useAppDispatch();
    const [loadingDelete, setLoadingDocente] = useState<boolean>(false);
    

    useEffect(()=>{
        const requestDocentes = async()=>{
            const response = await DocentesRequest();
            dispatch(readAllDocentes(response.response))
        }

        requestDocentes();
    },[docentes]);




    const handleDelete = (id:string)=>{
        setLoadingDocente(!loadingDelete);

        deleteDocentes(id).then((data)=>{
            if(data.status == 200){
                setLoadingDocente(false)
            }
        })
    }

    return(
        <section className='docentes'>
            <Header/>

            <div className='table-desk-top'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Eliminar</th>
                        <th>Agregar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        docentes.length >= 1 ? (
                            docentes.map((D, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{D.nombreDocente}</td>
                                        <td>{D.telefonoDocente}</td>
                                        <td onClick={()=> handleDelete(D._id)}><i className='bx bxs-trash-alt text-danger'></i></td>
                                        <td><AgregarDocentes/></td>
                                    </tr>
                                )
                            })  
                        ):( 
                            <tr>
                                <td>Cargando....</td>
                            </tr>
                        )
                    }
                </tbody>
                
               
             </table>

            </div>
            

                {
                    loadingDelete ? (
                        <div className='loading-delete'>
                            <div className='d-flex align-items-center'>
                                <div className="spinner-border text-light" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className='text-light ms-3'>
                                    Cargando...
                                </div>
                            </div>
                            
                        </div>
                    ):(<div></div>)
                }
             
        </section>
    )
}




export default Docentes;