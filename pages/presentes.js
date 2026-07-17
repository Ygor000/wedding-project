import Head from 'next/head';
import Menu from '../components/Menu';

function Home(){
    return (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Site sobre o casamento de Mariana e Ygor" />
            <meta name="author" content="Ygor" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Mariana e Ygor - Presente</title>
        </Head>
        <Menu />
        Bem vindo
    </div>
    )
}

export default Home;