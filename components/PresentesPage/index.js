import styles from "../PresentesPage/presentesPage.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

const presentes = [
    {
        id: 1,
        nome: "Jantar romântico para dois",
        valor: 280,
        imagem: "/um.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/70bed562-a2a0-401a-88a1-5f8ca301c599",
    },
    {
        id: 2,
        nome: "Uma diária da nossa lua de mel",
        valor: 890,
        imagem: "/dois.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/499bc531-b517-4544-a712-fe6b3ee8313d",
    },
    {
        id: 3,
        nome: "Air fryer da paz conjugal",
        valor: 560,
        imagem: "/tres.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/7f0cdccc-b28a-48e2-a940-ffbde67c8fde",
    },
    {
        id: 4,
        nome: "Um café para começar a vida de casados",
        valor: 60,
        imagem: "/quatro.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/a098474f-4b00-4a3c-b8df-1eba56db6def",
    },
    {
        id: 5,
        nome: "Uma diária naquele hotel que a noiva escolheu sem olhar o preço",
        valor: 1335,
        imagem: "/cinco.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/1c3de2e2-8783-4029-af75-023a7d7bb263",
    },
    {
        id: 6,
        nome: "Passeio surpresa na lua de mel",
        valor: 335,
        imagem: "/seis.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/ab98497e-efb4-4b39-969e-ff1a303dc95f",
    },
    {
        id: 7,
        nome: "Cota para a nossa casa dos sonhos I",
        valor: 2780,
        imagem: "/sete.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/3961bbaf-b714-450e-b280-ae99f560b3f2",
    },
    {
        id: 8,
        nome: "Drinks para uma noite especial",
        valor: 170,
        imagem: "/oito.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/0d09d1f2-86c2-4ca1-84a4-6906101aa576",
    },
    {
        id: 9,
        nome: "Experiência inesquecível para dois",
        valor: 1000,
        imagem: "/nove.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/15ef5903-a991-414b-a9df-80e32a2525c4",
    },
    {
        id: 10,
        nome: "Conjunto de panelas para fingirmos que sabemos cozinhar",
        valor: 445,
        imagem: "/dez.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/59bbc97e-5556-4ff0-85da-1c37f375da1a",
    },
    {
        id: 11,
        nome: "Um belo empurrãozinho nas passagens",
        valor: 4450,
        imagem: "/onze.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/cf9f6f8b-5d61-483d-84a3-5f0ed02502a1",
    },
    {
        id: 12,
        nome: "Nosso primeiro delivery de casados",
        valor: 200,
        imagem: "/doze.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/a1b3e87e-11a3-434e-a189-08aa4e75fecf",
    },
    {
        id: 13,
        nome: "Um dia inesquecível na lua de mel",
        valor: 615,
        imagem: "/treze.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/3be848f0-efbf-4adf-9e5c-aafa480d2abc",
    },
    {
        id: 14,
        nome: "Cota para as passagens da lua de mel I",
        valor: 1445,
        imagem: "/quatorze.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/f6d6523a-3392-40fe-ac80-502990c06396",
    },
    {
        id: 15,
        nome: "Jantar sem olhar o lado direito do cardápio",
        valor: 390,
        imagem: "/quinze.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/f8c25be9-227a-432f-b4c5-c531a14c85fa",
    },
    {
        id: 16,
        nome: "Upgrade na lua de mel porque a gente merece",
        valor: 1115,
        imagem: "/dezesseis.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/c1e9f06e-304e-43cd-a60e-ebd35f42b17d",
    },
    {
        id: 17,
        nome: "Café da manhã na lua de mel",
        valor: 115,
        imagem: "/dezessete.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/6bb1e981-926e-4ee1-84ab-cf1f2c49921d",
    },
    {
        id: 18,
        nome: "Ajude os noivos a viajarem sem fazer 17 escalas",
        valor: 5560,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/8d3baf2c-df59-4430-b08d-455fbf156d36",
    },
    {
        id: 19,
        nome: "Ajuda para montar nosso primeiro lar",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/24b64d35-e49f-4704-b00b-ec52f393cc31",
    },
    {
        id: 20,
        nome: "Um fim de semana especial dentro da lua de mel",
        valor: 1560,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/54cb9674-9773-43ee-99fa-f0edf1e2df85",
    },
    {
        id: 21,
        nome: "Noite de pizza dos recém-casados",
        valor: 280,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/70bed562-a2a0-401a-88a1-5f8ca301c599",
    },
    {
        id: 22,
        nome: "Ajuda para deixar nossa casa com a nossa cara",
        valor: 945,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/7e08df16-e010-4525-95ec-5b4a8cedcb89",
    },
    {
        id: 23,
        nome: "Três diárias da lua de mel",
        valor: 3340,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/917f2551-9534-428d-9424-38c19f4d39ab",
    },
    {
        id: 24,
        nome: "Um brinde aos recém-casados",
        valor: 90,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/92f02d5b-f9f9-4130-be1f-17a3ca01e8b6",
    },
    {
        id: 25,
        nome: "Um jantar realmente chique na lua de mel",
        valor: 670,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/7444b69a-2aa8-456a-9bbe-0a2a426a520d",
    },
    {
        id: 26,
        nome: "Mala nova para começarmos a acumular milhas juntos",
        valor: 1670,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/7c12968d-2385-4b19-99fc-98c955ae4a2c",
    },
    {
        id: 27,
        nome: "Um dia de turistas apaixonados",
        valor: 390,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/f8c25be9-227a-432f-b4c5-c531a14c85fa",
    },
    {
        id: 28,
        nome: "Um senhor upgrade na nossa lua de mel",
        valor: 6670,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/44644685-1ee8-4a3a-b9b1-99908c87f660",
    },
    {
        id: 29,
        nome: "Ajude a encher nossa geladeira pela primeira vez",
        valor: 560,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/7f0cdccc-b28a-48e2-a940-ffbde67c8fde",
    },
    {
        id: 30,
        nome: "Uma experiência que provavelmente não caberia no orçamento",
        valor: 1890,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/7e0174dd-35f1-4793-9c15-7d0fc2b92e8b",
    },
    {
        id: 31,
        nome: "Café da manhã na cama",
        valor: 170,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/0d09d1f2-86c2-4ca1-84a4-6906101aa576",
    },
    {
        id: 32,
        nome: "Uma noite especial na lua de mel",
        valor: 780,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/f36ae719-21fc-4483-a6a3-1ae7087371f0",
    },
    {
        id: 33,
        nome: "Cota para a lua de mel dos sonhos I",
        valor: 2780,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/3961bbaf-b714-450e-b280-ae99f560b3f2",
    },
    {
        id: 34,
        nome: "Um jantar daqueles que merecem foto",
        valor: 445,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/59bbc97e-5556-4ff0-85da-1c37f375da1a",
    },
    {
        id: 35,
        nome: "Cota para deixar nossa casa mais bonita I",
        valor: 1670,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/7c12968d-2385-4b19-99fc-98c955ae4a2c",
    },
    {
        id: 36,
        nome: "Sobremesa sem precisar dividir",
        valor: 135,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/52f83ae9-3ee3-4d14-84d8-48b6a7d8b6f2",
    },
    {
        id: 37,
        nome: "Um passeio daqueles que a gente vai contar por anos",
        valor: 835,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/498b2091-ee99-4a5e-b89b-802948932ebe",
    },
    {
        id: 38,
        nome: "Cota para a nossa casa dos sonhos II",
        valor: 4450,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/cf9f6f8b-5d61-483d-84a3-5f0ed02502a1",
    },
    {
        id: 39,
        nome: "Experiência gastronômica na lua de mel",
        valor: 500,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/24b64d35-e49f-4704-b00b-ec52f393cc31",
    },
    {
        id: 40,
        nome: "Robô aspirador para evitar a primeira discussão sobre quem vai varrer",
        valor: 1335,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/1c3de2e2-8783-4029-af75-023a7d7bb263",
    },
    {
        id: 41,
        nome: "Um almoço especial na lua de mel",
        valor: 225,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/9e77c9a0-9284-45a2-bb29-5c868caba69a",
    },
    {
        id: 42,
        nome: "Upgrade daquele hotel que definitivamente não estava no orçamento",
        valor: 3890,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/f9e83c62-bfea-4161-906a-5f4eaf236f6a",
    },
    {
        id: 43,
        nome: "Eletrodoméstico que a gente ainda nem sabe que precisa",
        valor: 780,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/f36ae719-21fc-4483-a6a3-1ae7087371f0",
    },
    {
        id: 44,
        nome: "Cota para as passagens da lua de mel II",
        valor: 2000,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/3a166975-c900-4972-bcd3-0fd3aa243f26",
    },
    {
        id: 45,
        nome: "Um cantinho mais bonito para nossa casa",
        valor: 335,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/ab98497e-efb4-4b39-969e-ff1a303dc95f",
    },
    {
        id: 46,
        nome: "Ajude a transformar a lua de mel em viagem de cinema",
        valor: 7780,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/b2c9a2cf-33ce-4957-b64a-d2b7bb933e50",
    },
    {
        id: 47,
        nome: "Jogo de cama digno de recém-casados",
        valor: 670,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/7444b69a-2aa8-456a-9bbe-0a2a426a520d",
    },
    {
        id: 48,
        nome: "Dois dias de hotel na lua de mel",
        valor: 2115,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/a9b29cc2-e13e-4968-9f8e-3d6fd0d60161",
    },
    {
        id: 49,
        nome: "Kit sobrevivência pós-casamento",
        valor: 225,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/9e77c9a0-9284-45a2-bb29-5c868caba69a",
    },
    {
        id: 50,
        nome: "Cota para mobiliar nosso cantinho",
        valor: 3340,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/917f2551-9534-428d-9424-38c19f4d39ab",
    },
    {
        id: 51,
        nome: "Passeio especial na lua de mel",
        valor: 560,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/7f0cdccc-b28a-48e2-a940-ffbde67c8fde",
    },
    {
        id: 52,
        nome: "Ajude os noivos a começarem a vida adulta com dignidade",
        valor: 2230,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/a2927e20-dbbc-4998-b398-920fe2e8c7df",
    },
    {
        id: 53,
        nome: "Um mimo para a nossa casa nova",
        valor: 200,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/a1b3e87e-11a3-434e-a189-08aa4e75fecf",
    },
    {
        id: 54,
        nome: "Cota master da lua de mel",
        valor: 5560,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/8d3baf2c-df59-4430-b08d-455fbf156d36",
    },
    {
        id: 55,
        nome: "Ajuda com as malas que certamente passarão do limite",
        valor: 725,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/c1feda04-cc82-4b83-83fb-3fb076f2efc0",
    },
    {
        id: 56,
        nome: "Cota para a lua de mel dos sonhos II",
        valor: 3890,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/f9e83c62-bfea-4161-906a-5f4eaf236f6a",
    },
    {
        id: 57,
        nome: "Um jantar romântico especial na viagem",
        valor: 335,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/ab98497e-efb4-4b39-969e-ff1a303dc95f",
    },
    {
        id: 58,
        nome: "Cota para as passagens da lua de mel III",
        valor: 6670,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/44644685-1ee8-4a3a-b9b1-99908c87f660",
    },
    {
        id: 59,
        nome: "Cota premium para começarmos nossa casa",
        valor: 7780,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/b2c9a2cf-33ce-4957-b64a-d2b7bb933e50",
    },
    {
        id: 60,
        nome: "Patrocínio oficial dos recém-casados",
        valor: 8890,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://link.picpay.com/p/768516ef-bd90-49f8-91d2-cc638405f566",
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

                            {/* FORMAS DE PAGAMENTO */}
                            <div className={styles.paymentMethods}>
                                <Image
                                    src="/mastercard.png"
                                    alt="Mastercard"
                                    width={32}
                                    height={22}
                                    className={styles.paymentIcon}
                                />

                                <Image
                                    src="/visa.png"
                                    alt="Visa"
                                    width={38}
                                    height={22}
                                    className={styles.paymentIcon}
                                />

                                <Image
                                    src="/pix.png"
                                    alt="Pix"
                                    width={26}
                                    height={26}
                                    className={styles.paymentIcon}
                                />
                            </div>

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