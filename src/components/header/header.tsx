import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { useRouter } from "next/router";

const Header = memo(() => {
    const route:any = useRouter();
    return (
        <header className="header">
            <nav className="header_nav">
                <div className="header_nav-log" onClick={()=>route.push('/home') }>
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbXedxEJCoQ8Yrd43J_dFO_Neo2_yol51rQ&s"
                        alt="_logo"
                        width={100}
                        height={100}
                    />
                </div>

                <ul className="header_nav-ul">
                    <li className="header_nav-ul_li">
                        <Link href="/comprartarjeta">Comprar</Link>
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
                    <li className="header_nav-ul_li">
                        <Link href="">Mis Viajes</Link>
                    </li>
                </ul>

                <div className="header_nav-buttos">
                    <div className="header_nav-buttos_email">{"example@hotmail.com"}</div>
                    <button className="header_nav-buttos_setting">
                        <i className="bx bx-cog"></i>
                    </button>
                </div>
            </nav>
        </header>
    );
});

export default Header;