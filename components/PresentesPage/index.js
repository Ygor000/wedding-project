import styles from "../PresentesPage/presentesPage.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

const presentes = [
    {
        id: 1,
        nome: "Jantar romântico para dois",
        valor: 285.10,
        imagem: "/jantar-romantico.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/33b54514-0f7e-4aa4-9157-454d682f0b3d/payment-option-form/?source=link&router-request-id=29986afa-6536-4dd5-8f27-fe78485c527d&preference-id=1075737319-e7f1b079-b6ba-4430-abf7-1cbf5ce834fe&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 2,
        nome: "Uma diária da nossa lua de mel",
        valor: 912.30,
        imagem: "/diaria-lua-de-mel.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/cc6bf655-59d2-4363-aba1-75626ec82756/payment-option-form/?source=link&router-request-id=a21d0392-450f-4081-b476-e8e363022074&preference-id=1075737319-cb75d790-073e-4abd-b9ba-880f273162a2&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 3,
        nome: "Air fryer da paz conjugal",
        valor: 570.19,
        imagem: "/air-fryer.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/c132fda7-094e-4858-8327-99f4cc3de56e/payment-option-form/?source=link&router-request-id=9fc2c826-92d4-4060-88c6-991160a6670a&preference-id=1075737319-c4b44788-fca9-44f1-af15-c2770da5bd57&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 4,
        nome: "Um café para começar a vida de casados",
        valor: 55.29,
        imagem: "/cafe-para-casados.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/6aaace7e-ba2f-4085-8d57-08d1555d1a6f/payment-option-form/?source=link&router-request-id=daf39809-2d74-49c0-8250-77d1fe5102cb&preference-id=1075737319-36b2aa23-0c72-4cde-b925-4b07f738b075&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 5,
        nome: "Uma diária naquele hotel que a noiva escolheu sem olhar o preço",
        valor: 1368.99,
        imagem: "/diaria-hotel-noiva.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/59bdc7ad-9222-4118-a145-d70109050971/payment-option-form/?source=link&router-request-id=2190c537-4085-440b-a587-30d80faa49fa&preference-id=1075737319-78426f77-432b-401e-9e6a-dc8ce247fc16&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 6,
        nome: "Passeio surpresa na lua de mel",
        valor: 342.11,
        imagem: "/passeio-surpresa-lua-de-mel.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/b6769984-1fb9-4732-a993-388534b42fdc/payment-option-form/?source=link&router-request-id=2818aa1d-8f39-4f14-bf32-7cb7b0983981&preference-id=1075737319-de07110f-9782-4ced-b1df-b4504335a8b6&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 7,
        nome: "Cota para a nossa casa dos sonhos I",
        valor: 2850.95,
        imagem: "/cota-casa-dos-sonhos-i.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/6f61d324-aecf-46fa-97c6-8826d26c7e6d/payment-option-form/?source=link&router-request-id=1572cac3-53a5-41ea-a367-05fc0696b2cd&preference-id=1075737319-17b757f3-3f74-4446-89a9-babaee467d0f&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 8,
        nome: "Drinks para uma noite especial",
        valor: 171.06,
        imagem: "/drinks-noite-especial.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/ee347ada-8f07-4498-bea1-c25228cd5132/payment-option-form/?source=link&router-request-id=1ad3f78b-90e6-4bc2-b4a4-898178ced5e7&preference-id=1075737319-5b70a38c-f543-4b05-8e95-01fcce059d86&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 9,
        nome: "Experiência inesquecível para dois",
        valor: 1026.34,
        imagem: "/experiencia-inesquecivel.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/72617d66-9bcd-49e5-9711-b8b4be5d903d/payment-option-form/?source=link&router-request-id=fc8438a6-3324-4f86-a2b2-8526e1f8b792&preference-id=1075737319-6bffb4bb-24d3-46e5-b917-4902ff792550&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 10,
        nome: "Conjunto de panelas para fingirmos que sabemos cozinhar",
        valor: 456.15,
        imagem: "/conjunto-panelas.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/c60c0049-b8e0-4c86-8128-271b2738cf4e/payment-option-form/?source=link&router-request-id=801f2e2a-5217-4faa-ad0f-f88dc716c81e&preference-id=1075737319-e3b924e8-8239-47fd-b428-1aa7f5cc5b01&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 11,
        nome: "Um belo empurrãozinho nas passagens",
        valor: 4561.52,
        imagem: "/empurrao-passagens.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/428d1bee-a85f-4e2f-9399-36faddaab1b6/payment-option-form/?source=link&router-request-id=52b31f0d-2e28-42c2-8535-440a159f38ba&preference-id=1075737319-5172fe84-3a0e-4f38-ac1f-c24dff12d361&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 12,
        nome: "Nosso primeiro delivery de casados",
        valor: 205.27,
        imagem: "/primeiro-delivery.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/d7d330b8-659f-488a-b134-ad2d8f100e8c/payment-option-form/?source=link&router-request-id=c3af499a-e1b6-494b-ac44-8b09f9f745eb&preference-id=1075737319-180206d7-bb82-4faf-9ab7-b8ed3bed2aaa&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 13,
        nome: "Um dia inesquecível na lua de mel",
        valor: 627.21,
        imagem: "/inesquecivel-lua-de-mel.png",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/6f8f61cc-c661-4ec0-bb3f-967df14d7101/payment-option-form/?source=link&router-request-id=f6a79ddc-2c1d-4380-87fc-131bd8f30ff5&preference-id=1075737319-3b29a199-62ba-40e5-9dbb-3905ab1d4bee&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 14,
        nome: "Cota para as passagens da lua de mel I",
        valor: 1482.50,
        imagem: "/cota-passagem-lua-de-mel-i",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/0fce63cd-ffbc-43bc-bd5b-5f90320edda2/payment-option-form/?source=link&router-request-id=09e8ad2d-7d89-4830-b8eb-dc647ab65172&preference-id=1075737319-7ca78f26-3b6c-4dc2-b616-b3554e68600a&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 15,
        nome: "Jantar sem olhar o lado direito do cardápio",
        valor: 399.13,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/dcb7ae39-1b2f-44e1-81e3-bb054932fbbf/payment-option-form/?source=link&router-request-id=c33759a5-ccf0-462f-8a08-60455e986d8b&preference-id=1075737319-d80ec278-4c94-4180-b80e-db40fa412154&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 16,
        nome: "Upgrade na lua de mel porque a gente merece",
        valor: 1140.38,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/8b623844-df9c-4ee7-994e-2360ad84b197/payment-option-form/?source=link&router-request-id=025428d9-141c-4bcc-ac19-1c3abf834af2&preference-id=1075737319-c232f618-26b7-40bc-8a82-f5c1a5023c3c&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 17,
        nome: "Café da manhã na lua de mel",
        valor: 114.04,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/69466c53-734e-4a4b-b49b-9e8059e443b8/payment-option-form/?source=link&router-request-id=a5151a30-1857-4c8c-aa09-8afeb6f3135d&preference-id=1075737319-d185f83b-196e-43a2-9a53-0f594e98a0c6&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 18,
        nome: "Ajude os noivos a viajarem sem fazer 17 escalas",
        valor: 5701.90,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/5f46110a-7cb4-4cf4-a079-04c3d552c61a/payment-option-form/?source=link&router-request-id=a485b1d3-e44a-49b0-a05b-c707d67cbc67&preference-id=1075737319-ccff84ea-40d0-4dcb-a048-938ffdb79ab0&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 19,
        nome: "Ajuda para montar nosso primeiro lar",
        valor: 513.17,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/f175112d-6767-462a-9ffd-b3403fb5039f/payment-option-form/?source=link&router-request-id=12feeb13-16da-4e3e-81d6-52cf05558a3b&preference-id=1075737319-b69f2736-44db-4aa3-8f74-d73ffa1979a3&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 20,
        nome: "Um fim de semana especial dentro da lua de mel",
        valor: 1596.53,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/0fb64975-18e2-4ac3-8248-961327909631/payment-option-form/?source=link&router-request-id=4085b0ea-5d06-4ac4-b4e6-faea29c01278&preference-id=1075737319-40094bdf-bee0-458e-9136-87c891342c8d&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 21,
        nome: "Noite de pizza dos recém-casados",
        valor: 285.10,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/20c62022-72a0-400b-90df-353fc2d2bb55/payment-option-form/?source=link&router-request-id=7d14651b-18fe-4dea-8e9d-e2f5cdc578ca&preference-id=1075737319-e11a0fa9-a8ce-4208-8177-f4d9fd5c33b6&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 22,
        nome: "Ajuda para deixar nossa casa com a nossa cara",
        valor: 969.32,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/bf275229-6b4e-48ab-b44c-7019b2bad255/payment-option-form/?source=link&router-request-id=fe29a135-3f10-4083-bbed-25936d6092ea&preference-id=1075737319-f1071e5d-5343-4225-89fb-0de32afda290&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 23,
        nome: "Três diárias da lua de mel",
        valor: 3421.14,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/b865196b-dc34-4379-af6c-919fb6b8406d/payment-option-form/?source=link&router-request-id=0e646007-41bf-4825-9795-9a7ee87f22b4&preference-id=1075737319-3d9dedd4-947b-4ba8-8744-9f11491037c6&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 24,
        nome: "Um brinde aos recém-casados",
        valor: 91.23,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/efb63182-fcb9-4efc-8160-54120efaa02f/payment-option-form/?source=link&router-request-id=db7516f4-e584-4994-828e-d051bd1eefd2&preference-id=1075737319-47168cd3-3dd0-4a72-88be-6d9c41a55ed8&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 25,
        nome: "Um jantar realmente chique na lua de mel",
        valor: 684.23,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/5aaab43c-b175-43b3-8f9a-d2b7e2927e02/payment-option-form/?source=link&router-request-id=c0b100b2-b9f5-40cb-8641-abc298141c07&preference-id=1075737319-513531fb-57a2-4b91-abe3-06ada9074435&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 26,
        nome: "Mala nova para começarmos a acumular milhas juntos",
        valor: 1710.57,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/e2df1592-835e-463d-8657-2a7bacf18087/payment-option-form/?source=link&router-request-id=fb13cfe8-e03b-4041-bebd-3c13bdef3a67&preference-id=1075737319-ee435bad-61d3-40be-8319-1e9ceead7316&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 27,
        nome: "Um dia de turistas apaixonados",
        valor: 399.13,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/4eaf8a34-dba8-4056-8727-932118fdaecc/payment-option-form/?source=link&router-request-id=0e82b0a5-6b11-4172-be0b-97756840fb61&preference-id=1075737319-ccdbe9b0-2a25-461a-81bd-829b133a74ce&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 28,
        nome: "Um senhor upgrade na nossa lua de mel",
        valor: 6842.29,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/a9a1b4ab-5ede-4bb7-9b4f-680cfec4ca9f/payment-option-form/?source=link&router-request-id=4d230e91-ed77-459e-b0ef-85db22402112&preference-id=1075737319-82abe0a0-d01c-4194-8b86-8d52564ce635&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 29,
        nome: "Ajude a encher nossa geladeira pela primeira vez",
        valor: 570.19,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/f1b80efe-4761-45f4-9e74-97ae21c7ee9a/payment-option-form/?source=link&router-request-id=36d7b312-dedc-4fe0-bfdd-34b7979675ca&preference-id=1075737319-84c580bb-dc9f-4708-8894-3c1ee06f2219&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 30,
        nome: "Uma experiência que provavelmente não caberia no orçamento",
        valor: 1938.65,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/1eeb77b4-0a5b-4141-b5fe-de25c9a36207/payment-option-form/?source=link&router-request-id=92088b5b-95e8-40fd-aff5-ef516eaafae0&preference-id=1075737319-64de0093-02cb-4480-bbd7-8c4b10cfa625&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 31,
        nome: "Café da manhã na cama",
        valor: 171.06,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/f8d4c2aa-f55a-4d31-9458-c024ef81f00f/payment-option-form/?source=link&router-request-id=019f00a9-1b69-4d18-9069-914d649a0deb&preference-id=1075737319-db5f5883-d86f-40d0-9a96-93a28d0cd98c&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 32,
        nome: "Uma noite especial na lua de mel",
        valor: 798.27,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/8591f975-e3c3-4929-9b33-880694e07be6/payment-option-form/?source=link&router-request-id=2bfb033e-63ad-49e6-87ad-4cd4adf8177b&preference-id=1075737319-947943f9-997f-4159-a304-1330887dbcdc&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 33,
        nome: "Cota para a lua de mel dos sonhos I",
        valor: 2850.95,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/a7e1e62e-e6bb-4508-83b7-56eb95ac7214/payment-option-form/?source=link&router-request-id=92772304-47cc-4269-80b0-e55610dbae2a&preference-id=1075737319-7697f3ec-7eae-4dd6-8f31-b3d542adb7f7&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 34,
        nome: "Um jantar daqueles que merecem foto",
        valor: 456.15,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/ac8decb3-f741-4a0a-b411-65881ed4b08a/payment-option-form/?source=link&router-request-id=51c37cde-07ab-4adc-835e-3a63f5f9b467&preference-id=1075737319-9a84a6fd-48f5-44cd-913a-9575077b59cb&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 35,
        nome: "Cota para deixar nossa casa mais bonita I",
        valor: 1710.57,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/2b70ac42-a8fc-40f0-97ea-6fb9b43e7b5c/payment-option-form/?source=link&router-request-id=58d5f637-93a5-46d0-8f45-ddef6358d9cb&preference-id=1075737319-d078a50c-c691-4e19-af52-df77d38408a0&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 36,
        nome: "Sobremesa sem precisar dividir",
        valor: 136.85,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/e1e069ed-36f9-4648-96bf-6b0dc908c0e3/payment-option-form/?source=link&router-request-id=cce2c6fd-21c9-46bd-9a3c-6133c70e975f&preference-id=1075737319-d5669947-6c21-49a4-a359-de1a732339a3&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 37,
        nome: "Um passeio daqueles que a gente vai contar por anos",
        valor: 855.29,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/f108a3d3-ff58-42b2-b328-a6ad4911d1dc/payment-option-form/?source=link&router-request-id=7bef90fa-2ec8-4195-8a3f-6231cfba1a8b&preference-id=1075737319-3be06076-033d-436d-9390-8201ddc51a99&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 38,
        nome: "Cota para a nossa casa dos sonhos II",
        valor: 4561.52,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/73584ece-7796-464c-aeff-8f71fe93398d/payment-option-form/?source=link&router-request-id=a27916ed-ef3b-47ae-a959-d35db7e2d420&preference-id=1075737319-094a6e86-b8a6-422c-ab4a-cb4fd89a06d8&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 39,
        nome: "Experiência gastronômica na lua de mel",
        valor: 513.17,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/40d01aa2-0a75-4e77-8ba5-4c067631f3b1/payment-option-form/?source=link&router-request-id=8759e4cc-963a-4ad8-bebe-3f88191f765f&preference-id=1075737319-057e1516-72f8-4c23-8d82-7d8a3d8ccb9a&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 40,
        nome: "Robô aspirador para evitar a primeira discussão sobre quem vai varrer",
        valor: 1368.46,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/c706f3d6-2e13-4641-b8d5-8991a8f13795/payment-option-form/?source=link&router-request-id=a293045f-ee5a-41b1-b0ca-7155f83da005&preference-id=1075737319-5a089eca-751b-48dc-8114-07d26b577129&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 41,
        nome: "Um almoço especial na lua de mel",
        valor: 228.08,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/928ced38-ff2a-4eee-a941-dcdb20bbc00d/payment-option-form/?source=link&router-request-id=d79c7492-2837-4a58-ae2e-cc404fcb2b20&preference-id=1075737319-9fb016f3-6522-436e-b561-4086daf1b68e&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 42,
        nome: "Upgrade daquele hotel que definitivamente não estava no orçamento",
        valor: 3991.33,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/d7ee2acd-500b-4343-830a-629ef6c4d5b9/payment-option-form/?source=link&router-request-id=0b4ddfd3-0268-48b5-a02f-722bebe33948&preference-id=1075737319-475ebfa9-c08d-4d4d-beb1-256d94355742&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 43,
        nome: "Eletrodoméstico que a gente ainda nem sabe que precisa",
        valor: 798.27,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/49720bdd-50a7-442b-b3dc-94b283329497/payment-option-form/?source=link&router-request-id=68b830dd-fc3e-4aa8-9848-8eb95c82ba12&preference-id=1075737319-a3754b8a-07fa-4590-96cd-d13aa705a906&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 44,
        nome: "Cota para as passagens da lua de mel II",
        valor: 2052.69,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/f38cf35c-31a0-4838-afab-6c084a455f24/payment-option-form/?source=link&router-request-id=88413a8c-0c22-4d0b-9089-b479c69c5f59&preference-id=1075737319-0dcd988d-9be9-40fa-8b42-492aad244974&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 45,
        nome: "Um cantinho mais bonito para nossa casa",
        valor: 342.11,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/36f28847-abac-42c9-a0a5-4edf1456d0b7/payment-option-form/?source=link&router-request-id=72de5481-84f1-44a8-9df8-62a7fd832d52&preference-id=1075737319-bfcbdd52-451c-4996-bc54-da2996102708&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 46,
        nome: "Ajude a transformar a lua de mel em viagem de cinema",
        valor: 7982.67,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/c8ef4597-8ac7-4678-8b26-9931ba231260/payment-option-form/?source=link&router-request-id=67eb39a6-5600-4f71-9192-a002db8d7e02&preference-id=1075737319-d1b5dd37-270c-4c4b-89d3-b084d295d03b&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 47,
        nome: "Jogo de cama digno de recém-casados",
        valor: 684.23,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/45b8db25-aa80-4da9-8d48-e5ac6448ee40/payment-option-form/?source=link&router-request-id=8bfbe7bf-96ca-45da-bda3-6f026b11a52d&preference-id=1075737319-0a3a0746-931c-4b60-a67e-09c8816f2938&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 48,
        nome: "Dois dias de hotel na lua de mel",
        valor: 2166.72,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/90b26d19-3359-4208-a351-218aa0565625/payment-option-form/?source=link&router-request-id=a0e431de-4580-4ba3-bd23-5390b84461a0&preference-id=1075737319-dd0fe4d6-9ed6-4d41-88be-2a54cf985348&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 49,
        nome: "Kit sobrevivência pós-casamento",
        valor: 228.08,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/0ab50920-fd56-4b1e-821d-272f0cf5dcc6/payment-option-form/?source=link&router-request-id=d629b228-d4e9-4a64-bdea-ec0d2a2e3a8f&preference-id=1075737319-326471bf-787d-4aea-9100-fc43b191e2b1&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 50,
        nome: "Cota para mobiliar nosso cantinho",
        valor: 3421.14,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/eeae3be6-dbe1-420b-afec-fd0b34cd2cdf/payment-option-form/?source=link&router-request-id=379e9977-c096-4294-8035-e526bd259d35&preference-id=1075737319-7fe533f1-4ebd-49f1-b9e3-a3fcef4810cc&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 51,
        nome: "Passeio especial na lua de mel",
        valor: 570.19,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/277e572c-c3c4-4dd7-adae-211dcc50ab39/payment-option-form/?source=link&router-request-id=fbc32244-fe9c-4750-a4c8-7eb998403389&preference-id=1075737319-ea4669b1-58f5-432e-a1bb-fc4a26eb5d83&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 52,
        nome: "Ajude os noivos a começarem a vida adulta com dignidade",
        valor: 2280.76,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/fa3f36a0-a5d6-4423-8a04-9f1abc9cad7d/payment-option-form/?source=link&router-request-id=e46a802a-777f-47d9-b561-2edb8824a457&preference-id=1075737319-8e78ba31-aadd-4049-801e-0c2b92fdbb89&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 53,
        nome: "Um mimo para a nossa casa nova",
        valor: 205.27,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/d60a5201-10b6-4964-9c7f-44d2fa306b05/payment-option-form/?source=link&router-request-id=070a0bc4-2314-487c-8be6-fc7d18be94a5&preference-id=1075737319-01ea22ba-7245-46d5-802a-2bb480ee12cd&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 54,
        nome: "Cota master da lua de mel",
        valor: 5701.90,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/d8601811-f69f-43bf-9f77-56ce95659c4f/payment-option-form/?source=link&router-request-id=b784bd8e-b02f-4f62-9201-4b1933f2ffb4&preference-id=1075737319-dfd2c7be-47ff-4be8-8a9f-6dfc409107bb&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 55,
        nome: "Ajuda com as malas que certamente passarão do limite",
        valor: 741.25,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/941d8f08-e317-43de-bfbb-53d1bf0cfd38/payment-option-form/?source=link&router-request-id=80c2fc65-7626-4d04-a899-1b80b91d6567&preference-id=1075737319-d09d089d-0279-4437-977d-20cd7281620b&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 56,
        nome: "Cota para a lua de mel dos sonhos II",
        valor: 3991.33,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/fefa648f-0b7c-4eaa-8450-8de0a9c5066f/payment-option-form/?source=link&router-request-id=47fc42d2-8c51-49db-a256-f04fc22aaac9&preference-id=1075737319-bcd65f66-1503-4945-b290-d0fee1816e43&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 57,
        nome: "Um jantar romântico especial na viagem",
        valor: 342.11,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v1/payment/redirect/4caaba17-817a-489a-ae50-ff410b3f8402/payment-option-form/?source=link&router-request-id=ca9447cd-1655-49ea-b73b-e3398f6ede37&preference-id=1075737319-696bae3a-d44b-4aa4-a94a-bd664bc7839e&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 58,
        nome: "Cota para as passagens da lua de mel III",
        valor: 6842.29,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/a47f7773-defb-43f8-a509-5793bf010b1f/payment-option-form/?source=link&router-request-id=b2a0874d-c47c-492f-899a-4a67a30fb7ad&preference-id=1075737319-5384a411-de78-4403-b0fc-0ae088f680c8&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 59,
        nome: "Cota premium para começarmos nossa casa",
        valor: 7982.67,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/650cef2c-47c6-41ea-a24d-deaa7d5665e7/payment-option-form/?source=link&router-request-id=058d3df5-6b08-4b4a-9e48-ff1a963d6f83&preference-id=1075737319-ab2994fa-d117-41a9-ad83-e6d30bcd9420&p=6f99eafcab4287940e391aed3ecce1f6",
    },
    {
        id: 60,
        nome: "Patrocínio oficial dos recém-casados",
        valor: 9123.05,
        imagem: "/images/presentes/passagens.jpg",
        comprado: false,
        unico: false,
        linkPagamento: "https://www.mercadopago.com.br/checkout/v3/payment/redirect/f7f792fa-9722-4963-8154-fba28bbc0260/payment-option-form/?source=link&router-request-id=a96db9c9-60e2-4c6f-896f-bd5070b57c9f&preference-id=1075737319-c0afb943-e9b4-47af-8e9d-89d80a55064b&p=6f99eafcab4287940e391aed3ecce1f6",
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