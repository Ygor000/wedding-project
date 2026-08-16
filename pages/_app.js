import '../styles/styles.css';
import Rodape from '../components/Rodape/index';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />

            <Rodape />
        </>
    );
}

export default MyApp;