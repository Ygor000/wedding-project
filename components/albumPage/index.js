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
import foto21 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-17.jpg";
import foto22 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-18.jpg";
import foto23 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-19.jpg";
import foto24 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-19-2.jpg";
import foto25 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-20.jpg";
import foto26 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-21.jpg";
import foto27 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-22.jpg";
import foto28 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-23.jpg";
import foto29 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-24.jpg";
import foto30 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-25.jpg";
import foto31 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-26.jpg";
import foto32 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-27.jpg";
import foto33 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-27-2.jpg";
import foto34 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-28.jpg";
import foto35 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-29.jpg";
import foto36 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-29-2.jpg";
import foto37 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-30.jpg";
import foto38 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-30-2.jpg";
import foto39 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-31.jpg";
import foto40 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-32.jpg";
import foto41 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-33.jpg";
import foto42 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-34.jpg";
import foto43 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-35.jpg";
import foto44 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-36.jpg";
import foto45 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-37.jpg";
import foto46 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-38.jpg";
import foto47 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-39.jpg";
import foto48 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-40.jpg";
import foto49 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-41.jpg";
import foto50 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-41-2.jpg";
import foto51 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-42.jpg";
import foto52 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-43.jpg";
import foto53 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-44.jpg";
import foto54 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-45.jpg";
import foto55 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-46.jpg";
import foto56 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-47.jpg";
import foto57 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-48.jpg";
import foto58 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-49.jpg";
import foto59 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-49-2.jpg";
import foto60 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-50.jpg";
import foto61 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-51.jpg";
import foto62 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-52.jpg";
import foto63 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-53.jpg";
import foto64 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-53-2.jpg";
import foto65 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-54.jpg";
import foto66 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-55.jpg";
import foto67 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-56.jpg";
import foto68 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-57.jpg";
import foto69 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-58.jpg";
import foto70 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-59.jpg";
import foto71 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-60.jpg";
import foto72 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-61.jpg";
import foto73 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-62.jpg";
import foto74 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-63.jpg";
import foto75 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-64.jpg";
import foto76 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-65.jpg";
import foto77 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-66.jpg";
import foto78 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-67.jpg";
import foto79 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-68.jpg";
import foto80 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-69.jpg";
import foto81 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-70.jpg";
import foto82 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-71.jpg";
import foto83 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-72.jpg";
import foto84 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-73.jpg";
import foto85 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-74.jpg";
import foto86 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-75.jpg";
import foto87 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-76.jpg";
import foto88 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-77.jpg";
import foto89 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-78.jpg";
import foto90 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-78-2.jpg";
import foto91 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-79.jpg";
import foto92 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-80.jpg";
import foto93 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-81.jpg";
import foto94 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-82.jpg";
import foto95 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-83.jpg";
import foto96 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-84.jpg";
import foto97 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-85.jpg";
import foto98 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-85-2.jpg";
import foto99 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-86.jpg";
import foto100 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-87.jpg";
import foto101 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-87-2.jpg";
import foto102 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-88.jpg";
import foto103 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-89.jpg";
import foto104 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-90.jpg";
import foto105 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-91.jpg";
import foto106 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-92.jpg";
import foto107 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-93.jpg";
import foto108 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-94.jpg";
import foto109 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-94-2.jpg";
import foto110 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-95.jpg";
import foto111 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-96.jpg";
import foto112 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-97.jpg";
import foto113 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-98.jpg";
import foto114 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-99.jpg";
import foto115 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-100.jpg";
import foto116 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-101.jpg";
import foto117 from "../../public/galeria/20260419-MarianaYgor-NiinaLopes-102.jpg";



/* ========================================
   FOTOS DA GALERIA
======================================== */

const fotos = [
    foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10,
    foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19,
    foto20, foto21, foto22, foto23, foto24, foto25, foto26, foto27, foto28,
    foto29, foto30, foto31, foto32, foto33, foto34, foto35, foto36, foto37,
    foto38, foto39, foto40, foto41, foto42, foto43, foto44, foto45, foto46,
    foto47, foto48, foto49, foto50, foto51, foto52, foto53, foto54, foto55,
    foto56, foto57, foto58, foto59, foto60, foto61, foto62, foto63, foto64,
    foto65, foto66, foto67, foto68, foto69, foto70, foto71, foto72, foto73,
    foto74, foto75, foto76, foto77, foto78, foto79, foto80, foto81, foto82,
    foto83, foto84, foto85, foto86, foto87, foto88, foto89, foto90, foto91,
    foto92, foto93, foto94, foto95, foto96, foto97, foto98, foto99, foto100,
    foto101, foto102, foto103, foto104, foto105, foto106, foto107, foto108, foto109,
    foto110, foto111, foto112, foto113, foto114, foto115, foto116, foto117
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