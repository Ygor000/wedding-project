import Head from 'next/head';
import Menu from '../components/Menu';
import { useRef, useState } from 'react';
import { MEDIA } from '../config/media';
import Contador from '../components/contador';
import { cormorant, lora } from '../styles/fonts';

function Home(){
    const videoRef = useRef(null);

    const [somAtivo, setSomAtivo] = useState(false)

    function ativarSom() {
    if (videoRef.current) {
        const novoEstado = !somAtivo;

        videoRef.current.muted = !novoEstado;
        videoRef.current.play();

        setSomAtivo(novoEstado);
    }
}
    return (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Site sobre casamento" />
            <meta name="author" content="Ygor" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Mariana e Ygor</title>
        </Head>

        <video className="backgroundVideo" ref={videoRef} muted autoPlay loop playsInline>
            <source src={MEDIA.backgroundVideo}
            type="video/mp4"/>
        </video>

        <div className="videoOverlay"></div>

        <div className={`${cormorant.className} homeTitle`}>
            <h1>Mariana & Ygor</h1>

            <div className="linha"></div>

            <div className={`${lora.className} dateLocal`}>
                <h3 className="dateTitle">22 DE MAIO DE 2027</h3>
                <h3 className="localTitle">VITÓRIA - ES</h3>
            </div>
        </div>

        <Contador/>

        <button className={`soundButton ${somAtivo ? 'ativo' : ''}`} onClick={ativarSom}>
           {somAtivo ? '🔊' : '🔇'}
        </button>

        <Menu className="menu-btn" />
    </div>
    );
}

export default Home;