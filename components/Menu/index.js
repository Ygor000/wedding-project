import { useState } from "react";
import Link from "next/link";
import styles from './menu.module.css'
import { cormorant, lora, montserrat } from '../../styles/fonts';
import Image from "next/image";

function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>

                <div className={styles.logo}>
                    <Image src="/logo-casamento.png" alt="Logo Mariana e Ygor" fill className={styles.logoImage}/>
                </div>

                <button className={styles.menuToggle} onClick={() => setOpen(!open)}>
                    ☰
                </button>

                <ul className={`${styles.menu} ${open ? styles.active : ""} ${montserrat.className}`}>
                    <li> <Link href="/">INÍCIO</Link> </li>

                    <li> <Link href="/presenca">CONFIRME PRESENÇA</Link> </li>

                    <li> <Link href="/presentes">PRESENTES</Link> </li>

                    <li> <Link href="/instrucoes">ORIENTAÇÕES</Link> </li>

                    <li> <Link href="/album">GALERIA</Link> </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;