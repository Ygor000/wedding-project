import styles from "../albumPage/album.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cormorant, lora, montserrat } from "../../styles/fonts";

function Album(){
    return (
        <main className={styles.album}>

            {/* GALERIA QUE ROLA SOBRE O FUNDO */}
            <section className={styles.gallery}>

                {/* FOTO 1 */}
                <div className={`${styles.photo} ${styles.photoOne}`}>
                    <Image
                        src="/galeria/20260419-MarianaYgor-NiinaLopes-1.jpg"
                        alt="Mariana e Ygor"
                        fill
                        sizes="(max-width: 800px) 62vw, 28vw"
                        className={styles.galleryImage}
                    />
                </div>


                {/* FOTO 2 */}
                <div className={`${styles.photo} ${styles.photoTwo}`}>
                    <Image
                        src="/galeria/20260419-MarianaYgor-NiinaLopes-2.jpg"
                        alt="Mariana e Ygor"
                        fill
                        sizes="(max-width: 800px) 62vw, 28vw"
                        className={styles.galleryImage}
                    />
                </div>


                {/* FOTO 3 */}
                <div className={`${styles.photo} ${styles.photoThree}`}>
                    <Image
                        src="/galeria/20260419-MarianaYgor-NiinaLopes-3.jpg"
                        alt="Mariana e Ygor"
                        fill
                        sizes="(max-width: 800px) 55vw, 24vw"
                        className={styles.galleryImage}
                    />
                </div>


                {/* FOTO 4 */}
                <div className={`${styles.photo} ${styles.photoFour}`}>
                    <Image
                        src="/galeria/20260419-MarianaYgor-NiinaLopes-4.jpg"
                        alt="Mariana e Ygor"
                        fill
                        sizes="(max-width: 800px) 64vw, 30vw"
                        className={styles.galleryImage}
                    />
                </div>

                {/* FOTO 5 */}
                {/* <div className={`${styles.photo} ${styles.photoFive}`}>
                    <Image
                        src="/galeria/20260419-MarianaYgor-NiinaLopes-5.jpg"
                        alt="Mariana e Ygor"
                        fill
                        sizes="(max-width: 800px) 64vw, 30vw"
                        className={styles.galleryImage}
                    />
                </div> */}

            </section>

        </main>
    );
}

export default Album;