import styles from "../albumPage/album.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cormorant, lora, montserrat } from "../../styles/fonts";

import foto1 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-1.jpg";
import foto2 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-2.jpg";
import foto3 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-3.jpg";
import foto4 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-4.jpg";
import foto5 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-4-2.jpg";
import foto6 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-5.jpg";
import foto7 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-5-2.jpg";
import foto8 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-6.jpg";
import foto9 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-7.jpg";
import foto10 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-8.jpg";
import foto11 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-8-2.jpg";
import foto12 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-9.jpg";
import foto13 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-10.jpg";
import foto14 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-10-2.jpg";
import foto15 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-11.jpg";
import foto16 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-12.jpg";
import foto17 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-13.jpg";
import foto18 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-14.jpg";
import foto19 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-15.jpg";
import foto20 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-16.jpg";


/* ========================================
   FOTOS DA GALERIA
======================================== */

const fotos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
    foto16,
    foto17,
    foto18,
    foto19,
    foto20
];


/* ========================================
   PÁGINA ÁLBUM
======================================== */

function Album() {

    return (
        <main className={styles.album}>

            <section className={styles.gallery}>

                {fotos.map((foto, index) => (

                    <div
                        key={index}
                        className={styles.photo}
                    >

                        <Image
                            src={foto}
                            alt={`Mariana e Ygor - foto ${index + 1}`}
                            sizes="
                                (max-width: 480px) 100vw,
                                (max-width: 800px) 50vw,
                                33vw
                            "
                            className={styles.galleryImage}
                        />

                    </div>

                ))}

            </section>

        </main>
    );
}

export default Album;