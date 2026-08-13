import styles from "../HistoriaHero/historiahero.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cormorant, lora, montserrat } from "../../styles/fonts";

const imagens = [
    "/ensaio-foto-01.jpg", "/ensaio-foto-02.jpg", "/ensaio-foto-04.jpg",
    "/ensaio-foto-05.jpg", "/ensaio-foto-06.jpg", "/ensaio-foto-07.jpg", "/ensaio-foto-08.jpg",
    "/ensaio-foto-09.jpg", "/ensaio-foto-10.jpg", "/ensaio-foto-11.jpg", "/ensaio-foto-12.jpg",
    "/ensaio-foto-13.jpg", "/ensaio-foto-14.jpg", "/ensaio-foto-15.jpg", "/ensaio-foto-16.jpg",
    "/ensaio-foto-17.jpg", "/ensaio-foto-18.jpg", "/ensaio-foto-19.jpg"
];

function Historia(){

    const [visiveis, setVisiveis] = useState(imagens.slice(0, 3));
    

    useEffect(() => {
    let proximaImagem = 3;

    const intervalo = setInterval(() => {
        setVisiveis((atuais) => {
            const novas = [...atuais];

            const posicao = Math.floor(Math.random() * 3);

            let novaImagem = imagens[proximaImagem];

            while (novas.includes(novaImagem)) {
                proximaImagem++;

                if (proximaImagem >= imagens.length) {
                    proximaImagem = 0;
                }

                novaImagem = imagens[proximaImagem];
            }

            novas[posicao] = novaImagem;

            proximaImagem++;

            if (proximaImagem >= imagens.length) {
                proximaImagem = 0;
            }

            return novas;
        });
    }, 4000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <Image src="/veu-compacto.png" alt="Efeito de véu" fill className={styles.image}/>
            </div>
            <div className={styles.layout}>
                <div className={styles.content}>
                    <h3 className={`${montserrat.className} ${styles.subtitle}`}>O COMEÇO DE TUDO</h3>

                    <h1 className={`${cormorant.className} ${styles.titleOne}`}><span>UMA</span> <span>HISTÓRIA</span> <span>ESCRITA</span> <span>A DOIS.</span></h1>

                    <p className={`${montserrat.className} ${styles.text}`}><span>O MESMO RISO, OS MESMOS SONHOS </span>E, DESDE O INÍCIO, A CERTEZA<span></span>  <span>DE QUE SERIA PARA FICAR.</span></p>
                </div>

                <div className={styles.imageSection}>
                    <div className={styles.imageArray}>
                        {visiveis.map((imagem, index) => (
                            <div key={index} className={styles.imageCard}>
                                <Image src={imagem} alt={`Ensaio ${index + 1}`} fill className={`${styles.galleryImage}`} />
                            </div>
                        ))}
                    </div>
                
                    <div className={styles.timelineContainer}>    
                        <div className={styles.item}>
                            <h4 className={`${montserrat.className} ${styles.data}`}>22 DE MAIO DE 2021</h4>
                            <div className={`${styles.circle} ${styles.circleNamoro}`}></div>
                            <h3 className={`${cormorant.className} ${styles.momento}`}>NAMORO</h3>
                        </div>

                        <div className={styles.item}>
                            <h4 className={`${montserrat.className} ${styles.data}`}>16 DE FEVEREIRO DE 2026</h4>
                            <div className={`${styles.circle} ${styles.circleNoivado}`}></div>
                            <h3 className={`${cormorant.className} ${styles.momento}`}>NOIVADO</h3>
                        </div>

                        <div className={styles.item}>
                            <h4 className={`${montserrat.className} ${styles.data}`}>22 DE MAIO DE 2027</h4>
                            <div className={`${styles.circle} ${styles.circleCasamento}`}></div>
                            <h3 className={`${cormorant.className} ${styles.momento}`}>CASAMENTO</h3>
                        </div>

                        <div className={styles.line}></div>

                        <div className={`${montserrat.className} ${styles.divPresenca}`}>
                            <Link href="/" className={styles.presenca}>
                                CONFIRMAR PRESENÇA
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Historia;