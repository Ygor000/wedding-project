import Head from 'next/head';
import Menu from '../components/Menu';
import { useRef, useState } from 'react';

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
            <title>Mariana e Ygor </title>
        </Head>

        <video className="backgroundVideo" ref={videoRef} muted autoPlay loop playsInline>
            <source src="https://clgaaguawywgbjrtklsx.supabase.co/storage/v1/object/public/Save%20the%20date/IMG_8110.mp4"
            type="video/mp4"/>
        </video>

        <div className="videoOverlay"></div>

        <div className="homeTitle">
            <h1>Mariana e Ygor</h1>
        </div>

        <button className={`soundButton ${somAtivo ? 'ativo' : ''}`} onClick={ativarSom}>
           {somAtivo ? '🔊' : '🔇'}
        </button>

        <Menu className="menu-btn" />
    </div>
    );
}

export default Home;