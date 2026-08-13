import styles from "../InformacaoHero/informacao.module.css";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

function Informacao(){
    return (

        <section className={styles.section}>

            <div className={styles.imageContainer}>
                < Image src="/hero-informacao-casamento.png" alt="Imagem de ensaio pré wedding" fill className={styles.weddingImage} />
            </div>

            <div className={styles.backgroundContainer}>

                <div className={styles.content}>

                    <h3 className={`${montserrat.className} ${styles.title}`}>
                        TUDO PARA O GRANDE DIA
                    </h3>

                    <div className={styles.iconRow}>

                        <div className={styles.iconContainer}>

                            <div className={styles.generalIcon}>
                                <Image src="/gps.png" width={80} height={80} className={styles.iconImage} />
                            </div>

                            <span className={`${montserrat.className} ${styles.textIcon}`}>
                                LOCAL E HORÁRIOS
                            </span>

                        </div>

                        <div className={styles.line}></div>

                        <div className={styles.iconContainer}>

                            <div className={styles.generalIcon}>
                                <Image src="/hospedagem.png" width={100} height={100} className={styles.iconImage} />
                            </div>

                            <span className={`${montserrat.className} ${styles.textIcon}`}>
                                HOSPEDAGEM
                            </span>

                        </div>

                        <div className={styles.line}></div>

                        <div className={styles.iconContainer}>

                            <div className={styles.generalIcon}>
                                <Image src="/traje.png" width={80} height={80} className={styles.iconImage}/>
                            </div>

                            <span className={`${montserrat.className} ${styles.textIcon}`}>
                                TRAJES
                            </span>

                        </div>

                    </div>

                    <h4 className={`${cormorant.className} ${styles.subtitle}`}>
                        Reunimos as principais informações para você aproveitar cada momento.
                    </h4>

                </div>

            </div>

        </section>
    )
}
export default Informacao;