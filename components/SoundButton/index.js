import { useState } from "react";
import styles from "./soundbutton.module.css";

function SoundButton({ videoRef }) {
    const [somAtivo, setSomAtivo] = useState(false);

    function ativarSom() {
        if (!videoRef.current) return;

        const novoEstado = !somAtivo;

        videoRef.current.muted = !novoEstado;
        videoRef.current.play();

        setSomAtivo(novoEstado);
    }

    return (
        <button
            className={`${styles.soundButton} ${somAtivo ? styles.ativo : ""}`}
            onClick={ativarSom}
            aria-label={somAtivo ? "Desativar som" : "Ativar som"}
        >
            {somAtivo ? "🔊" : "🔇"}
        </button>
    );
}

export default SoundButton;