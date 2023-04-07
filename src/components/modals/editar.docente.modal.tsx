import '../../assets/styles/mobile/docente.component.scss';
import { editarDocente } from '../../services/editar.docente.service';
import { IDocentes } from '../../services/Models/docentes.models';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/Store';
import { readAllMaterias } from '../../redux/materias.slice';
import { IMaterias } from '../../services/Models/materias.models';
import { getMateriasRequest } from '../../services/materias.service';
import validator from 'validator';




interface props{
    id:string
}


const UpdateDocenteModal = (id:props)=>{

    const dispatch = useAppDispatch();
    const todasMaterias = useAppSelector(x=> x.allmaterias.response)

    const [request, setRequest] = useState<IDocentes>({
        _id:"",
        nombreDocente: '',
        apellidoDocente: '',
        direscioniDocente: '',
        telefonoDocente: '',
        materiasDocente: [],
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: []
    });

    const [materia, setMateria]= useState<string>("");
    const [lunes, setLunes] = useState<string>("");
    const [martes, setMartes] = useState<string>("");
    const [miercoles, setMiercoles] = useState<string>("");
    const [jueves, setJueves] = useState<string>("");
    const [viernes, setViernes] = useState<string>("");

    const [getMaterias, setGetMaterias] = useState<IMaterias>({
        status:0,
        response:[{
             nombre:""
        }]
    });

    const [loadinDocente, setLoadingDDocente] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

 
    const handleName = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name]:e.target.value
        })
    }

    const handleSurName = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name]:e.target.value
        })
    }


    const handleAddress = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name]:e.target.value
        })
    }

    const handlePhoneNumber = (e:any)=>{
        setRequest({
            ...request,
            [e.target.name]:e.target.value
        })
    }

    const handleSubjects = (e:any)=>{
        setMateria(e.target.value);
    }

    const handleLunes = (e:any)=>{
        setLunes(e.target.value);
    }

    const handleMartes = (e:any)=>{
        setMartes(e.target.value);
    }

    const handleMiercoles = (e:any)=>{
        setMiercoles(e.target.value);
    }

    const handleJueves = (e:any)=>{
        setJueves(e.target.value);
    }

    const handleViernes = (e:any)=>{
        setViernes(e.target.value);
    }



    const handleRegistrarDocente  = async (e:any)=>{
        e.preventDefault();
        setMessage("");


        if(validator.isEmpty(request.nombreDocente)){
            setMessage("Campo nombre no puede estar vacio");
        }else if(validator.isEmpty(request.apellidoDocente)){
            setMessage("Campo apellido no puede estar vacio");    
        }else if(validator.isEmpty(request.telefonoDocente)){
            setMessage("Campo telefono no puede estar vacio"); 
        }
        else{
            setLoadingDDocente(!loadinDocente);
            request.materiasDocente.push({nombreMateria:materia});
            request.lunes.push({horarioLunes:lunes});
            request.martes.push({horarioMartes:martes});
            request.miercoles.push({horarioMiercoles:miercoles});
            request.jueves.push({horarioJueves:jueves});
            request.viernes.push({horarioViernes:viernes});
            console.log(id)
            // await editarDocente(request)
            // .then((res)=>{
            //     if(res.status == 200){
            //         setMessage("Docente registrado Exitosamente");
            //     }else{
            //         setMessage("Docente no registrado");
            //     }
            //     setLoadingDDocente(false);
            // })

            setRequest({
                _id:"",
                nombreDocente: '',
                apellidoDocente: '',
                direscioniDocente: '',
                telefonoDocente: '',
                materiasDocente: [],
                lunes: [],
                martes: [],
                miercoles: [],
                jueves: [],
                viernes: []
            });

            setMateria("");
            setLunes("");
            setMartes("");
            setMiercoles("");
            setJueves("");
            setViernes("");

        }
    }





    
    useEffect(()=>{
        const materiasResponse = async()=>{
            await getMateriasRequest()
            .then((data)=>{
                 dispatch(readAllMaterias(data));
            })
        }
        materiasResponse();
    },[])





    return(
        <section className='modal-create_docentes'>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Editar Docentes {id.id}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div>
                                <div className="row ">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Nombre Docente" name='nombreDocente' value={request.nombreDocente} onChange={handleName}/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Apellido Docente" name='apellidoDocente' value={request.apellidoDocente} onChange={handleSurName}/>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="DirecionDocente" name='direscioniDocente' value={request.direscioniDocente} onChange={handleAddress}/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Telefono Docente" name='telefonoDocente' value={request.telefonoDocente} onChange={handlePhoneNumber}/>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col">
                                        <select className="form-select" aria-label="Default select example" value={materia} onChange={handleSubjects}>
                                            <option defaultChecked>Materias</option>

                                            {
                                                todasMaterias.length >= 1 ? (
                                                    todasMaterias.map((m, index)=>{
                                                        return(
                                                            <option value={m.nombre} key={index}>{m.nombre}</option>
                                                        )
                                                    })
                                                ):(
                                                    <option className='text-primary text-center'>Cargando...</option>
                                                )
                                               
                                            }
                                        </select>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Horario Lunes" value={lunes} onChange={handleLunes}/>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Horario Martes" value={martes} onChange={handleMartes}/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Horario Miercoles" value={miercoles} onChange={handleMiercoles}/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Horario Jueves" value={jueves} onChange={handleJueves}/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Horario Viernes" value={viernes} onChange={handleViernes}/>
                                    </div>
                                </div>
                               
                            </div>
                            <div className='mt-3'>
                                <button className='btn-enviar-docentes' onClick={(e)=> handleRegistrarDocente(e)}>
                                    {
                                        loadinDocente ? (<div>Editando...</div>):( <div>Editar</div>)
                                    }
                                </button>
                            </div>
                            <div className='text-center text-danger'>
                                {message}
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <button className='button-add-docente' data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i className='bx bxs-edit-alt text-warning fs-2'></i></button>
        </section>
    )
}


export default UpdateDocenteModal