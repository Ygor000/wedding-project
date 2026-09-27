import styles from "../PresentesPage/presentesPage.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

const presentes = [
    {
        id: 1,
        nome: "Jantar romântico na lua de mel",
        valor: 300,
        imagem: "/jantar-romantico-japao.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://mercadopago.com.br/payment-link/v1/go?link-id=71b023f2-8a89-4cdc-a5d4-25d918dda7fe&router-request-id=491bdfad-db7d-43e0-a4b8-fa58531bd8d7",
    },
    {
        id: 2,
        nome: "Passagens de viagem Japão",
        valor: 8000,
        imagem: "/japao.png",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 3,
        nome: "Diária do hotel no Japão",
        valor: 650,
        imagem: "/hotel-japao.png",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 4,
        nome: "Conjunto de panelas",
        valor: 400,
        imagem: "/conjunto-de-panelas.png",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 5,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 6,
        nome: "Passeio romântico",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 7,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 8,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 9,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 10,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 11,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 12,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 13,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 14,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 15,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 16,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 17,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 18,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 19,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 20,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 21,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 22,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 23,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 24,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 25,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 26,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 27,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 28,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 29,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 30,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 31,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 32,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 33,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 34,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 35,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 36,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 37,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 38,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 39,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 40,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 41,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 42,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 43,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 44,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 45,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 46,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 47,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 48,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 49,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 50,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 51,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 52,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 53,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 54,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 55,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 56,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 57,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 58,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 59,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },
    {
        id: 60,
        nome: "Air fryer",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "",
    },

];

function Presentes() {
    const [presenteSelecionado, setPresenteSelecionado] = useState(null);

    const formatarValor = (valor) => {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    const abrirPresente = (presente) => {
        if (!presente.comprado) {
            setPresenteSelecionado(presente);
        }
    };

    const fecharPresente = () => {
        setPresenteSelecionado(null);
    };

    return (
        <main className={styles.presentes}>

            {/* FUNDO */}
            <div className={styles.background}>
                <Image
                    src="/galeria/20260419-MarianaYgor-NiinaLopes-17.jpg"
                    alt=""
                    fill
                    priority
                    className={styles.backgroundImage}
                />

                <div className={styles.backgroundOverlay} />
            </div>

            {/* CONTEÚDO */}
            <section className={styles.content}>

                {/* <div className={styles.intro}>
                    <h1 className={`${styles.title} ${cormorant.className}`}>
                        Lista de Presentes
                    </h1>

                    <p className={`${styles.subtitle} ${lora.className}`}>
                        Sua presença é o nosso maior presente, mas, caso queira
                        nos presentear, preparamos algumas sugestões com carinho.
                    </p>
                </div> */}

                {/* PRESENTES */}
                <div className={styles.grid}>
                    {presentes.map((presente) => (
                        <article
                            className={`${styles.card} ${
                                presente.comprado ? styles.cardComprado : ""
                            }`}
                            key={presente.id}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    src={presente.imagem}
                                    alt={presente.nome}
                                    fill
                                    className={styles.giftImage}
                                />
                            </div>

                            <div className={styles.cardContent}>
                                <h2
                                    className={`${styles.giftName} ${montserrat.className}`}
                                >
                                    {presente.nome}
                                </h2>

                                <p
                                    className={`${styles.price} ${lora.className}`}
                                >
                                    {formatarValor(presente.valor)}
                                </p>

                                {presente.comprado ? (
                                    <span
                                        className={`${styles.boughtButton} ${cormorant.className}`}
                                    >
                                        Comprado
                                    </span>
                                ) : (
                                    <button
                                        className={`${styles.detailsButton} ${cormorant.className}`}
                                        onClick={() => abrirPresente(presente)} 
                                    >
                                        Ver detalhes
                                    </button>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* MODAL */}
            {presenteSelecionado && (
                <div
                    className={styles.modalOverlay}
                    onClick={fecharPresente}
                >
                    <div
                        className={styles.modal}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={fecharPresente}
                            aria-label="Fechar"
                        >
                            ×
                        </button>

                        <div className={styles.modalImage}>
                            <Image
                                src={presenteSelecionado.imagem}
                                alt={presenteSelecionado.nome}
                                fill
                                className={styles.giftImage}
                            />
                        </div>

                        <div className={styles.modalContent}>
                            <h2
                                className={`${styles.modalTitle} ${montserrat.className}`}
                            >
                                {presenteSelecionado.nome}
                            </h2>

                            <p
                                className={`${styles.modalPrice} ${lora.className}`}
                            >
                                Seu presente:{" "}
                                {formatarValor(presenteSelecionado.valor)}
                            </p>

                            <a
                                href={presenteSelecionado.linkPagamento || "#"} target="_blank" rel="noopener noreferrer"
                                className={`${styles.paymentButton} ${cormorant.className}`}
                            >
                                Fazer o pagamento
                            </a>

                            <p
                                className={`${styles.paymentInfo} ${lora.className}`}
                            >
                                Pix ou cartão de crédito
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
export default Presentes;