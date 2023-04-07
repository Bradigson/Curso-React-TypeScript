import {Routes, Route} from 'react-router-dom';
import Login from '../components/login.component';
import Home from '../components/home.component';
import SignUp from '../components/signup.component';
import EstudianteModal from '../components/modals/students.modals';
import RegistrarEstudiante from '../components/registrar.estudiante.component';
import EditarEstudiantes from '../components/editar.studiante.component';
import Docentes from '../components/docente.component';

const Rutas = ()=>{
    return(
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="modal-students/:userid" element={<EstudianteModal/>}/>
            <Route path="registrar_estudiante" element={<RegistrarEstudiante/>}/>
            <Route path='ediart_estudiantes/:estudentId' element={<EditarEstudiantes/>}/>
            <Route path='docentes' element={<Docentes/>}/>
        </Routes>
    )
}

export default Rutas;