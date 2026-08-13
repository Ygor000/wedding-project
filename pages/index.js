import Head from 'next/head';
import Menu from '../components/Menu/index';
import Hero from '../components/Hero/index';
import Historia from '../components/HistoriaHero/index';
import SoundButton from "../components/SoundButton/index";
import { useRef } from 'react';
import { MEDIA } from '../config/media';
import Informacao from '../components/InformacaoHero/index';
import Presentes from '../components/PresentesHero/index';

function Home(){
    const videoRef = useRef(null);

    return (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Site sobre casamento" />
            <meta name="author" content="Ygor" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Mariana e Ygor</title>
        </Head>

        {/* Página de fundo */}
        <div className="background">
            <video className="backgroundVideo" ref={videoRef} muted autoPlay loop playsInline>
                <source src={MEDIA.backgroundVideo}
                type="video/mp4"/>
        </video>
        </div>

        <div className="videoOverlay"></div>

        {/* Conteúdo */}
        <main>
            <Hero />

            <Historia />

            <Informacao />

            <Presentes />
        </main>

        <Menu />

        <SoundButton  videoRef={videoRef}/>
    </div>
    );
}

export default Home;