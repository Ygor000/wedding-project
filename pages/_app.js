import '../styles/styles.css';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    style: ['italic']
})

export default function MyApp({ Component, pageProps }) {
    return(
        <main className={cormorant.className}>
            <Component {...pageProps} />
        </main>
    ); 
}

// Component são as páginas
// pageProps são as propriedades passadas para as paginas