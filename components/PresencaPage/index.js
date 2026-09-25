import styles from "../PresencaPage/presencaPage.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

export default function Presenca() {
    const [pesquisa, setPesquisa] = useState("");
    const [modoPesquisa, setModoPesquisa] = useState(false);
    const [resultados, setResultados] = useState([]);
    const [convidadoSelecionado, setConvidadoSelecionado] = useState(null);
    const [carregando, setCarregando] = useState(false);
    const [enviandoResposta, setEnviandoResposta] = useState(null);
    const [respostaEnviada, setRespostaEnviada] = useState(null);
    const [erroResposta, setErroResposta] = useState("");

    const inputRef = useRef(null);

    // Abre o campo para digitar o nome
    function abrirPesquisa() {
        setModoPesquisa(true);
        setPesquisa("");
        setResultados([]);
        setConvidadoSelecionado(null);
        setRespostaEnviada(null);
        setErroResposta("");

        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }

    // Busca os convidados enquanto a pessoa digita
    useEffect(() => {
        // Só pesquisa a partir de 2 caracteres
        if (!modoPesquisa || pesquisa.trim().length < 2) {
            setResultados([]);
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                setCarregando(true);

                const response = await fetch(
                    `/api/convidados/buscar?q=${encodeURIComponent(
                        pesquisa.trim()
                    )}`
                );

                if (!response.ok) {
                    throw new Error("Erro ao buscar convidados");
                }

                const data = await response.json();

                setResultados(data);
            } catch (error) {
                console.error("Erro ao buscar convidados:", error);
                setResultados([]);
            } finally {
                setCarregando(false);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [pesquisa, modoPesquisa]);

    // Quando a pessoa encontra e seleciona o próprio nome
    function selecionarConvidado(convidado) {
        setConvidadoSelecionado(convidado);
        setResultados([]);
        setRespostaEnviada(null);
        setErroResposta("");

        const nomeCompleto = [convidado.nome, convidado.sobrenome]
            .filter(Boolean)
            .join(" ");

        setPesquisa(nomeCompleto);
    }

    // Se houver apelido, usa o apelido.
    // Se apelido estiver "" ou null, usa o nome.
    const nomeExibicao =
        convidadoSelecionado?.apelido?.trim() ||
        convidadoSelecionado?.nome ||
        "";

async function responderPresenca(confirmacao) {
    if (!convidadoSelecionado || enviandoResposta !== null) {
        return;
    }

    try {
        setEnviandoResposta(confirmacao);
        setErroResposta("");

        const response = await fetch("/api/convidados/responder", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: convidadoSelecionado.id,
                confirmacao,
            }),
        });

        if (!response.ok) {
            throw new Error("Não foi possível registrar a resposta.");
        }

        const convidadoAtualizado = await response.json();

        setConvidadoSelecionado(convidadoAtualizado);
        setRespostaEnviada(confirmacao);

    } catch (error) {
        console.error("Erro ao registrar presença:", error);

        setErroResposta(
            "Não foi possível registrar sua resposta. Tente novamente."
        );
    } finally {
        setEnviandoResposta(null);
    }
}
    return (
        <main className={styles.presenca}>
            <section className={styles.content}>

                {/* ÁREA FIXA DO CAMPO DE BUSCA */}
                <div className={styles.searchHeader}>

                    {!modoPesquisa ? (
                        <button
                            type="button"
                            className={`${styles.titleButton} ${lora.className}`}
                            onClick={abrirPesquisa}
                        >
                            Digite seu nome
                            <span className={styles.dot}>...</span>
                        </button>
                    ) : (
                        <input
                            ref={inputRef}
                            type="text"
                            value={pesquisa}
                            onChange={(event) => {
                                setPesquisa(event.target.value);
                                setConvidadoSelecionado(null);
                            }}
                            className={`${styles.nameInput} ${lora.className}`}
                            placeholder="Digite seu nome..."
                            autoComplete="off"
                        />
                    )}

                </div>


                {/* TEXTO INICIAL */}
                {!modoPesquisa && (
                    <p className={`${styles.instruction} ${lora.className}`}>
                        Pedimos que confirme o mais rápido que puder,
                        assim que tiver certeza!
                    </p>
                )}


                {/* TUDO QUE APARECE ABAIXO DO INPUT */}
                {modoPesquisa && (
                    <div className={styles.searchContent}>

                        {/* {carregando && (
                            <p className={styles.status}>
                                Procurando...
                            </p>
                        )} */}


                        {/* NOMES ENCONTRADOS */}
                        {!carregando &&
                            !convidadoSelecionado &&
                            resultados.length > 0 && (

                                <div
                                    className={`${styles.results} ${montserrat.className}`}
                                >
                                    {resultados.map((convidado) => (

                                        <button
                                            key={convidado.id}
                                            type="button"
                                            className={`${styles.guestResult} ${montserrat.className}`}
                                            onClick={() =>
                                                selecionarConvidado(convidado)
                                            }
                                        >
                                            {convidado.nome}{" "}
                                            {convidado.sobrenome}
                                        </button>
                                    ))}
                                </div>
                            )}


                        {/* NENHUM RESULTADO */}
                        {!carregando &&
                            !convidadoSelecionado &&
                            pesquisa.trim().length >= 2 &&
                            resultados.length === 0 && (

                                <p className={styles.status}>
                                    Nenhum convidado encontrado.
                                </p>
                            )}


                        {/* CONVIDADO SELECIONADO */}
                        {convidadoSelecionado && (
                            <div className={styles.confirmation}>

                                {respostaEnviada === null ? (
                                    <>
                                        <p className={`${styles.greeting} ${montserrat.className}`}>
                                            Oi, {nomeExibicao}! Que bom que você vai!
                                        </p>

                                        <button
                                            type="button"
                                            className={`${styles.confirmButton} ${montserrat.className}`}
                                            onClick={() => responderPresenca(true)}
                                            disabled={enviandoResposta !== null}
                                        >
                                            {enviandoResposta === true
                                                ? "Confirmando..."
                                                : "Clique aqui e confirme a sua presença!"
                                            }
                                        </button>

                                        <button
                                            type="button"
                                            className={`${styles.declineButton} ${montserrat.className}`}
                                            onClick={() => responderPresenca(false)}
                                            disabled={enviandoResposta !== null}
                                        >
                                            {enviandoResposta === false
                                                ? "Registrando..."
                                                : "Não comparecerei!"
                                            }
                                        </button>

                                        {erroResposta && (
                                            <p className={`${styles.responseError} ${montserrat.className}`}>
                                                {erroResposta}
                                            </p>
                                        )}
                                    </>
                                ) : respostaEnviada === true ? (
                                    <div className={styles.responseMessage}>
                                        <p className={`${styles.responseTitle} ${lora.className}`}>
                                            Presença confirmada!
                                        </p>

                                        <p className={`${styles.responseText} ${montserrat.className}`}>
                                            Estamos muito felizes em celebrar esse dia com você.
                                        </p>
                                    </div>
                                ) : (
                                    <div className={styles.responseMessage}>
                                        <p className={`${styles.responseTitle} ${lora.className}`}>
                                            Resposta registrada.
                                        </p>

                                        <p className={`${styles.responseText} ${montserrat.className}`}>
                                            Sentiremos sua falta, mas agradecemos por nos avisar!
                                        </p>
                                    </div>
                                )}

                            </div>
                        )}

                    </div>
                )}

            </section>
        </main>
    );
}
