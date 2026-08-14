import styles from "../LocalInstrucoes/localinformacao.module.css";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

function Instrucoes(){
    return(
        <section className={styles.section}>

            {/* =========================
                CABEÇALHO
            ========================== */}

            <div className={styles.headerSection}>

                <Image src="/ensaio-foto-24.png" alt="Imagem de fundo" fill className={styles.headerImage} />

                <div className={styles.headerOverlay}></div>

                <div className={styles.headerContent}>

                    <h1 className={`${cormorant.className} ${styles.headerTitle}`}>
                        LOCAL E HORÁRIO
                    </h1>

                    <div className={styles.headerLine}></div>

                    <p className={`${montserrat.className} ${styles.headerText}`}>
                        Onde estaremos esperando por você.
                    </p>

                </div>

            </div>


            {/* =========================
                IGREJA
            ========================== */}

            <div className={`${styles.locationSection} ${styles.churchSection}`}>

                {/* INFORMAÇÕES DA IGREJA */}

                <div className={styles.locationInfo}>

                    <Image src="/folha.png" alt="ícone de folha" width={45} height={45} className={styles.leafIcon} />

                    <h3 className={`${montserrat.className} ${styles.locationSubtitle}`}>
                        CERIMÔNIA
                    </h3>

                    <h1 className={`${cormorant.className} ${styles.locationTitle}`}>
                        Igreja São Gonçalo
                    </h1>

                    <div className={styles.locationLine}></div>

                    {/* DATA */}

                    <div className={styles.detail}>

                        <Image src="/data.png" alt="Ícone de data" width={25} height={25} className={styles.detailIcon} />

                        <div className={styles.detailText}>

                            <span className={`${cormorant.className} ${styles.detailLabel}`}>
                                22 DE MAIO DE 2027 • 16H30
                            </span>

                        </div>

                    </div>

                    {/* ENDEREÇO */}

                    <div className={styles.detail}>

                        <Image src="/endereco.png"  alt="ícone de endereço" width={25} height={25} className={styles.detailIcon} />

                        <div className={styles.detailText}>

                            <span className={`${montserrat.className} ${styles.detailLabel}`}>
                                CENTRO, VITÓRIA - ES
                            </span>

                        </div>

                    </div>

                    {/* BOTÃO */}

                    <Link href="#" className={`${montserrat.className} ${styles.locationLink}`} >

                        <Image src="/mapa.png" alt="Ícone de gps" width={22} height={22} className={styles.linkIcon} />

                        <span>
                            VER NO GOOGLE MAPS
                        </span>

                    </Link>

                </div>


                {/* GOOGLE MAPS */}

                <div className={styles.mapContainer}>

                    <iframe src="SUA_URL_DO_GOOGLE_MAPS" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" 
                    className={styles.map}>
                    </iframe>

                </div>

            </div>


            {/* =========================
                PRIME HALL
            ========================== */}

            <div className={`${styles.locationSection} ${styles.hallSection}`}>

                {/* GOOGLE MAPS */}

                <div className={styles.mapContainer}>

                    <iframe src="SUA_URL_DO_GOOGLE_MAPS" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                        className={styles.map}>
                    </iframe>

                </div>


                {/* INFORMAÇÕES DO PRIME HALL */}

                <div className={styles.locationInfo}>

                    <Image src="/folha.png" alt="Ícone de folha" width={45} height={45} className={styles.leafIcon} />

                    <h3 className={`${montserrat.className} ${styles.locationSubtitle}`}>
                        RECEPÇÃO
                    </h3>

                    <h1 className={`${cormorant.className} ${styles.locationTitle}`}>
                        Prime Hall
                    </h1>

                    <div className={styles.locationLine}></div>

                    {/* DATA */}

                    <div className={styles.detail}>

                        <Image src="/data.png" alt="Ícone de data" width={25} height={25} className={styles.detailIcon} />

                        <div className={styles.detailText}>

                            <span className={`${montserrat.className} ${styles.detailLabel}`}>
                                APÓS A CERIMÔNIA
                            </span>

                        </div>

                    </div>

                    {/* ENDEREÇO */}

                    <div className={styles.detail}>

                        <Image src="/endereco.png" alt="Ícone de endereço" width={25} height={25} className={styles.detailIcon} />

                        <div className={styles.detailText}>

                            <span className={`${montserrat.className} ${styles.detailLabel}`}>
                                JARDIM DA PENHA, VITÓRIA - ES
                            </span>

                        </div>

                    </div>

                    {/* BOTÃO */}

                    <Link href="#" className={`${montserrat.className} ${styles.locationLink}`} >

                        <Image src="/mapa.png" alt="" width={22} height={22} className={styles.linkIcon} />

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