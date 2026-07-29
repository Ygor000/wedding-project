import styles from "../HistoriaHero/historiahero.module.css";
import Image from "next/image";

function Historia(){
    return (
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <Image src="/veu-em-cima.png" alt="Efeito de véu" fill className={styles.Image}/>
            </div>

            <div className={styles.content}>
                <h3>Nossa História</h3>

                <h1>O começo de tudo.</h1>

                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
            </div>

        </section>
    )
}

export default Historia;