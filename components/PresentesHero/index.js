import styles from "../PresentesHero/presenteshero.module.css";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

function Presentes(){
    return (
        <section className={styles.section}>

            <div className={styles.topSection}>

                <div className={styles.topImage}>
                    <Image
                        src="/ensaio-foto-04.jpg" alt="Foto de frente pré wedding" fill className={styles.image} />
                </div>

                <div className={styles.topContent}>

                    <div className={styles.content}>
                        <h1 className={`${cormorant.className} ${styles.title}`}>
                                <span>LISTA DE </span>
                                <span>PRESENTES</span>
                        </h1>

                        <p className={`${cormorant.className} ${styles.text}`}>
                            <span className={styles.firstLine}>Para aqueles que desejarem nos presentear, </span>
                            preparamos algumas sugestões com carinho.
                        </p>

                        <Link href="/presentes" className={`${montserrat.className} ${styles.linkPresentes}`}>
                            VER LISTA DE PRESENTES
                        </Link>
                    </div>

                </div>

            </div>

            <div className={styles.bottomSection}>

                <Image
                    src="/ensaio-foto-23.png" alt="Foto entre os troncos pré wedding" fill className={styles.bottomImage} />

                <div className={styles.bottomOverlay}></div>

                <div className={styles.bottomContent}>

                    <h1 className={`${cormorant.className} ${styles.bottomTitle}`}>
                        ESPERAMOS POR VOCÊ
                    </h1>

                    <p className={`${cormorant.className} ${styles.bottomText}`}>
                        Confirme sua presença para celebrarmos juntos este dia.
                    </p>

                    <Link
                        href="/presenca" className={`${montserrat.className} ${styles.linkPresenca}`} >
                        CONFIRMAR PRESENÇA
                    </Link>

                </div>

            </div>

        </section>
    )
}
export default Presentes;