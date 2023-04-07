import '../assets/styles/mobile/header.component.scss';
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';




const cookies = new Cookies();
const Header = ()=>{

    const [menu, setMenu] = useState(false);

    const handleMenu = ()=>{
        setMenu(!menu);
    }

    return(
        <header className='header'>
            <nav className={`${menu ? 'change' : ''}${' navbar'}`}>
                <div className="hamburger-menu" onClick={handleMenu}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <div className='ms-4'>
                    <b>{cookies.get('username')}</b>
                </div>
                <ul className="list">
                    <li onClick={handleMenu}>
                        <Link to="/home" className="header_uri">
                            Estudiantes
                            <i className='bx bxs-user-badge'></i>
                        </Link>
                    </li>
                    <li onClick={handleMenu}>
                        <Link to="/docentes" className="header_uri">
                            Decentes
                            <i className='bx bxs-user'></i>
                        </Link>
                    </li>
                    <li onClick={handleMenu}>
                        <Link to="" className="header_uri">
                            Materias
                            <i className='bx bx-folder-plus'></i>
                        </Link>
                    </li>
                    <li onClick={handleMenu}>
                        <Link to="/" className="header_uri">
                            LogOut
                            <i className='bx bx-log-out-circle'></i>
                        </Link>
                    </li>
                </ul>
            </nav>


            <nav className='navbar_desk-top'>
                <ul className='navbar_desk-top_list'>
                        <li >
                            <Link to="/home" className="header_uri">
                                Estudiantes
                                <i className='bx bxs-user-badge ms-4'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/docentes" className="header_uri">
                                Decentes
                                <i className='bx bxs-user ms-4'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="header_uri">
                                Materias
                                <i className='bx bx-folder-plus ms-4'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="header_uri">
                                LogOut
                                <i className='bx bx-log-out-circle ms-4'></i>
                            </Link>
                        </li>
                </ul>

            </nav>
    </header>
    )
}


export default Header;