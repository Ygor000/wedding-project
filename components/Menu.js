import { useState } from "react";
import Link from "next/link";
import { cormorant, lora, montserrat } from '../styles/fonts';

function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="max-width">

                <div className="logo">
                    <Link href="/">
                        <img src="/logo-casamento.png" alt="Logo Mariana e Ygor" width={80} height={80} />
                    </Link>
                </div>

                <button className="menu-toggle" onClick={() => setOpen(!open)}>
                    ☰
                </button>

                <ul className={`${montserrat.className} btn-menu`}>
                    <li> <Link href="/">INÍCIO</Link> </li>

                    <li> <Link href="/presenca">CONFIRME PRESENÇA</Link> </li>

                    <li> <Link href="/presentes">PRESENTES</Link> </li>

                    <li> <Link href="/instrucoes">ORIENTAÇÕES</Link> </li>

                    <li> <Link href="/album">GALERIA</Link> </li>
                </ul>

                    {/* ☰ */}

            </div>
        </nav>
    );
}

export default Menu;