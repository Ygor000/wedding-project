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

                <p>A nossa história começou com uma certeza que chegou antes mesmo das palavras. De algum modo, desde o início, nós dois já sabíamos: seria sério, seria inteiro, seria para ficar.

                Com o tempo, descobrimos que amar não é encontrar alguém exatamente igual. É reconhecer no outro o mesmo riso, os mesmos sonhos e, ainda assim, aprender a acolher temperamentos tão diferentes. É construir um lugar seguro onde podemos dividir tudo: os planos, as dúvidas, os dias extraordinários e a beleza dos dias comuns.

                Juntos, atravessamos fronteiras, colecionamos sabores e vimos o mundo se tornar um pouco maior. E foi diante de um pôr do sol uruguaio que um novo capítulo começou a ser escrito.

                Escolhemos o dia 22 de maio para celebrar o amor que, anos antes, escolheu essa mesma data para ganhar nome.

                Agora, seguimos em direção ao que sempre sonhamos: uma vida inteira de parceria, uma família para chamar de nossa e um mundo ainda por conhecer, sempre juntos.</p>
            </div>

        </section>
    )
}

export default Historia;