import {Routes, Route} from 'react-router-dom';
import SectionOne from '../components/SectionOne';



const Rutas = ()=>{
    return(
        <Routes>
            <Route index element={<SectionOne/>}/>
        </Routes>
    )
}

export default Rutas;