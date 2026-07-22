"use client"; // Necessário no Next.js para rodar o JavaScript do lado do cliente

import { useState, useEffect } from "react";
import styles from "./contador.module.css";

export default function Contador(){
    const [carregado, setCarregado] = useState(false);

    const [tempoRestante, setTempoRestante] = useState ({
        dias: "00",
        horas: "00",
        minutos: "00",
        segundos: "00",
    });

    // Altere para a data exata do seu evento
    useEffect(() => {
        setCarregado(true);
        
        const dataAlvo = new Date("2027-05-22T17:00:00").getTime();

        const atualizarContador = () => {
            const agora = new Date().getTime();
            const diferenca = dataAlvo - agora

            if (diferenca <= 0){
                setTempoRestante({ 
                    dias: "00", 
                    horas: "00", 
                    minutos: "00", 
                    segundos: "00" 
                });
            return true;
        }

        // Cálculos matemáticos de conversão do tempo
        const d = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const h = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Atualiza o estado com dois algarismos (ex: 05 em vez de 5)
        setTempoRestante({
            dias: String(d).padStart(2, "0"),
            horas: String(h).padStart(2, "0"),
            minutos: String(m).padStart(2, "0"),
            segundos: String(s).padStart(2, "0"),
        });
        return false;
        };
        // Limpa o intervalo se o utilizador mudar de página
        const acabou = atualizarContador();

        if (acabou) return;

        const intervalo = setInterval(() => {
            const terminar = atualizarContador();
            if (terminar) {
                clearInterval(intervalo); // Agora a variável 'intervalo' já existe no escopo correto
            }
        }, 1000);
        return () => clearInterval(intervalo);
    }, []);

    if (!carregado) return null;

    return (
        <div className={styles.conteinerContador}>
            <div className={styles.bloco}>
                <span className={styles.numero}>{tempoRestante.dias}</span>
                <p className={styles.texto}>Dias</p>
            </div>
            <div className={styles.bloco}>
                <span className={styles.numero}>{tempoRestante.horas}</span>
                <p className={styles.texto}>Horas</p>
            </div>
            <div className={styles.bloco}>
                <span className={styles.numero}>{tempoRestante.minutos}</span>
                <p className={styles.texto}>Minutos</p>
            </div>
            <div className={styles.bloco}>
                <span className={styles.numero}>{tempoRestante.segundos}</span>
                <p className={styles.texto}>Segundos</p>
            </div>
        </div>  
    )
}