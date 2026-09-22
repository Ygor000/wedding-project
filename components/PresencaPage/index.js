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

    const inputRef = useRef(null);

    // Abre o campo para digitar o nome
    function abrirPesquisa() {
        setModoPesquisa(true);
        setPesquisa("");
        setResultados([]);
        setConvidadoSelecionado(null);

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

    return (
        <main className={styles.presenca}>
            <section className={styles.content}>

                {/* ANTES DE CLICAR EM "DIGITE SEU NOME" */}
                {!modoPesquisa && (
                    <>
                        <button
                            type="button"
                            className={`${styles.titleButton} ${lora.className}`}
                            onClick={abrirPesquisa}
                        >
                            Digite seu nome
                            <span className={styles.dot}>.</span>
                        </button>

                        <p className={styles.instruction}>
                            Pedimos que confirme o mais rápido que puder,
                            assim que tiver certeza!
                        </p>
                    </>
                )}

                {/* DEPOIS QUE CLICA EM "DIGITE SEU NOME" */}
                {modoPesquisa && (
                    <>
                        <div className={styles.searchArea}>
                            <input
                                ref={inputRef}
                                type="text"
                                value={pesquisa}
                                onChange={(event) => {
                                    setPesquisa(event.target.value);
                                    setConvidadoSelecionado(null);
                                }}
                                className={styles.nameInput}
                                placeholder="Digite seu nome"
                                autoComplete="off"
                            />
                        </div>

                        {/* ENQUANTO ESTÁ PROCURANDO */}
                        {carregando && (
                            <p className={styles.status}>
                                Procurando...
                            </p>
                        )}

                        {/* NOMES ENCONTRADOS */}
                        {!carregando &&
                            !convidadoSelecionado &&
                            resultados.length > 0 && (
                                <div className={styles.results}>
                                    {resultados.map((convidado) => (
                                        <button
                                            key={convidado.id}
                                            type="button"
                                            className={styles.guestResult}
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

                        {/* NENHUM CONVIDADO ENCONTRADO */}
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
                                <p className={styles.greeting}>
                                    {nomeExibicao}! Que bom que você vai!
                                </p>

                                <button
                                    type="button"
                                    className={styles.confirmButton}
                                >
                                    Clique aqui e confirme a sua presença!
                                </button>

                                <button
                                    type="button"
                                    className={styles.declineButton}
                                >
                                    Não comparecerei!
                                </button>
                            </div>
                        )}
                    </>
                )}
            </section>
        </main>
    );
}
