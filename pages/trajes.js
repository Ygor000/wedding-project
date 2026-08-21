import Head from 'next/head';
import Menu from '../components/Menu';
import Trajes from '../components/TrajeInstrucoes/index';

function Home(){
    return (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Site sobre o casamento de Mariana e Ygor" />
            <meta name="author" content="Ygor" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Mariana e Ygor - Dicas e Instruções</title>
        </Head>

        <Trajes />

        <Menu />

    </div>
    )
}

export default Home;