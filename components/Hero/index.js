import styles from "./hero.module.css";
import Contador from "../Contador";
import { cormorant, lora } from "../../styles/fonts";

export default function Hero() {
    return (
        <section className={styles.hero}>

            <div className={`${styles.homeTitle} ${cormorant.className}`}>

                <h1>Mariana & Ygor</h1>

                <div className={styles.linha}></div>

                <div className={`${styles.dateLocal} ${lora.className}`}>

                    <h3 className={styles.dateTitle}>
                        22 DE MAIO DE 2027
                    </h3>

                    <h3 className={`${styles.localTitle} ${cormorant.className}`}>
                        Vitória • Espírito Santo
                    </h3>

                </div>

                <Contador />

            </div>

        </section>
    );
}