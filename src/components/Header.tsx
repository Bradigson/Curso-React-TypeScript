import { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/styles/ResponsiveDesign/Header.scss';

const Header = ()=>{

    const [menu, setMenu] = useState(false);

    const handleMenu = ()=>{
        setMenu(!menu);
    }

    return(
        <header>
            <nav className={`${menu ? 'change' : ''}${' navbar'}`}>
                <div className="hamburger-menu" onClick={handleMenu}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>

                <ul className="list">
                    <li>
                        <Link to="" className="header_uri">
                            Home
                            <i className='bx bxs-home-alt-2'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="header_uri">
                            Skills
                            <i className='bx bx-dumbbell'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="header_uri">
                            Services
                            <i className='bx bxs-receipt' ></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="header_uri">
                            Proyects
                            <i className='bx bxs-briefcase-alt-2'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="header_uri">
                            Hobbies
                            <i className='bx bx-run'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="header_uri">
                            Contact me
                            <i className='bx bxs-phone-call' ></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;