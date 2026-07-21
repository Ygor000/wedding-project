import { useState } from "react";
import Link from "next/link";

function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="max-width">

                <div className="logo">
                    <Link href="/">Logo</Link>
                </div>

                <ul className="btn-menu">
                    <li>
                        <Link href="/">INÍCIO</Link>
                    </li>

                    <li>
                        <Link href="/presenca">CONFIRME PRESENÇA</Link>
                    </li>

                    <li>
                        <Link href="/presentes">PRESENTES</Link>
                    </li>

                    <li>
                        <Link href="/instrucoes">DICAS E INSTRUÇÕES</Link>
                    </li>

                    <li>
                        <Link href="/album">ÁLBUM DE FOTOS</Link>
                    </li>

                    <li>
                        <Link href="/historia">NOSSA HISTÓRIA</Link>
                    </li>
                </ul>

                    {/* ☰ */}

            </div>
        </nav>
    );
}

export default Menu;