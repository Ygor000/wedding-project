import styles from "../LocalInstrucoes/localinformacao.module.css";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

function Instrucoes(){
    return(
        <section className={styles.section}>

            <div className={styles.headerSection}>

                <Image src="/ensaio-foto-24.png" alt="Imagem de fundo" fill loading="eager" className={styles.headerImage} />

                <div className={styles.headerOverlay}></div>

                <div className={styles.headerContent}>

                    <h1 className={`${cormorant.className} ${styles.headerTitle}`}>
                        LOCAL E HORÁRIO
                    </h1>

                    <div className={styles.headerLine}></div>

                    <p className={`${cormorant.className} ${styles.headerText}`}>
                        Onde estaremos esperando por você.
                    </p>

                </div>

            </div>

            <div className={`${styles.locationSection} ${styles.churchSection}`}>

                <div className={styles.locationInfoWrapperChurch}>

                    <div className={styles.locationInfoChurch}>

                        <Image src="/folha.png" alt="Ícone de folha" width={22} height={22} className={styles.leafIcon} />

                        <h3 className={`${montserrat.className} ${styles.locationSubtitle}`}>
                            CERIMÔNIA
                        </h3>

                        <h1 className={`${cormorant.className} ${styles.locationTitle}`}>
                            Igreja São Gonçalo
                        </h1>

                        <div className={styles.locationLine}></div>

                        <div className={styles.detail}>

                            <Image src="/calendario.png" alt="Ícone de calendario" width={22} height={22} className={styles.detailIcon} />

                            <div className={styles.detailText}>
                                <span className={`${montserrat.className} ${styles.detailLabel}`}>
                                    22 DE MAIO DE 2027 • 16H30
                                </span>
                            </div>

                        </div>

                        <div className={styles.detail}>

                            <Image src="/gps-pesado.png" alt="Ícone de gps" width={22} height={22} className={styles.detailIcon} />

                            <div className={styles.detailText}>
                                <span className={`${montserrat.className} ${styles.detailLabel}`}>
                                    CENTRO, VITÓRIA - ES
                                </span>
                            </div>

                        </div>

                        <Link href="https://www.google.com/maps/place/Igreja+de+S%C3%A3o+Gon%C3%A7alo/@-20.3200512,-40.3419873,17z/data=!3m1!4b1!4m6!3m5!1s0xb83dbaa9c07877:0x5feef9e2978e2486!8m2!3d-20.3200562!4d-40.3394124!16s%2Fg%2F11ddxbl4g4?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" className={`${montserrat.className} ${styles.locationLink}`} >
                        
                            <Image src="/gps.png" alt="Ícone de GPS" width={22} height={22} className={styles.linkIcon} />

                            <span>
                                VER NO GOOGLE MAPS
                            </span>
                        </Link>

                    </div>

                </div>

                <div className={styles.mapContainer}>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.5218083627333!2d-40.34198732387556!3d-20.32005115057468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83dbaa9c07877%3A0x5feef9e2978e2486!2sIgreja%20de%20S%C3%A3o%20Gon%C3%A7alo!5e0!3m2!1spt-PT!2sbr!4v1786745227598!5m2!1spt-PT!2sbr" width={600} height={450} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className={styles.map}>
                    </iframe>

                </div>

            </div>

            <div className={`${styles.locationSection} ${styles.hallSection}`}>

                <div className={styles.mapContainer}>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.4214909004886!2d-40.292477523876286!3d-20.282813649393766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb819b6319f9d8f%3A0xba87146d779d46d1!2sPrime%20Hall%20Buffet%20e%20Eventos!5e0!3m2!1spt-PT!2sbr!4v1786745776909!5m2!1spt-PT!2sbr" width={600} height={450} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className={styles.map}>
                    </iframe>

                </div>

                <div className={styles.locationInfoHall}>

                    <Image src="/folha.png" alt="Ícone de folha" width={22} height={22} className={styles.leafIcon} />

                    <h3 className={`${montserrat.className} ${styles.locationSubtitle}`}>
                        RECEPÇÃO
                    </h3>

                    <h1 className={`${cormorant.className} ${styles.locationTitle}`}>
                        Prime Hall
                    </h1>

                    <div className={styles.locationLine}></div>

                    <div className={styles.detail}>

                        <Image src="/calendario.png" alt="Ícone de calendário" width={22} height={22} className={styles.detailIcon} />

                        <div className={styles.detailText}>

                            <span className={`${montserrat.className} ${styles.detailLabel}`}>
                                18h30 às 2h30
                            </span>

                        </div>

                    </div>

                    <div className={styles.detail}>

                        <Image src="/gps-pesado.png" alt="Ícone de gps" width={25} height={25} className={styles.detailIcon} />

                        <div className={styles.detailText}>

                            <span className={`${montserrat.className} ${styles.detailLabel}`}>
                                JARDIM DA PENHA, VITÓRIA - ES
                            </span>

                        </div>

                    </div>

                    <Link href="https://www.google.com/maps/place/Prime+Hall+Buffet+e+Eventos/@-20.2828136,-40.2924775,17z/data=!3m1!4b1!4m6!3m5!1s0xb819b6319f9d8f:0xba87146d779d46d1!8m2!3d-20.2828187!4d-40.2899026!16s%2Fg%2F11j2917xjb?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" className={`${montserrat.className} ${styles.locationLink}`} >

                        <Image src="/gps.png" alt="ícone de gps" width={22} height={22} className={styles.linkIcon} />

                        <span>
                            VER NO GOOGLE MAPS
                        </span>

                    </Link>

                </div>

            </div>

        </section>
    )
}
export default Instrucoes;