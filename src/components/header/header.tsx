import Link from "next/link"

const Header = ()=>{
    return(
        <header className="header">

            <nav className="header_nav">

                <div className="header_nav-log">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbXedxEJCoQ8Yrd43J_dFO_Neo2_yol51rQ&s" alt="_logo"/>
                </div>
                

                <ul className="header_nav-ul">
                    <li  className="header_nav-ul_li">
                        <Link href="">Comprar</Link>
                    </li>
                    <li className="header_nav-ul_li">
                        <Link href="">Recargar</Link>
                    </li>
                    <li className="header_nav-ul_li">
                        <Link href="">Lineas</Link>
                    </li>
                    <li className="header_nav-ul_li">
                        <Link href="">Horario</Link>
                    </li>
                </ul>

                <div className="header_nav-buttos">

                    <div className="header_nav-buttos_email">{"example@hotmail.com"}</div>
                    <button className="header_nav-buttos_setting">
                        <i className='bx bx-cog'></i>
                    </button>

                </div>

            </nav>

        </header>
    )
}

export default Header;