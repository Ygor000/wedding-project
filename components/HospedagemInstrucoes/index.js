import styles from "../HospedagemInstrucoes/hospedagemInstrucoes.module.css";
import PageNavigation from "../pageNavigation/index";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

function Hospedagem() {
    const hoteis = [
        {
            numero: "01",
            nome: "Ibis Vitória Praia do Canto",
            bairro: "PRAIA DO CANTO",
            descricao: "Rua João da Cruz, 385, Vitória.",
            igreja: "aprox. 16 min de carro",
            primeHall: "aprox. 3 min de carro",
            link: "https://www.booking.com/hotel/br/ibis-vitoria-praia-do-canto.pt-br.html?chal_t=1788307933450&force_referer=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fbr%2Fibis-vitoria-praia-do-canto.pt-br.html"
        },
        {
            numero: "02",
            nome: "Sleep Inn Praia do Canto",
            bairro: "PRAIA DO CANTO",
            descricao: "Av. Nossa Senhora da Penha, 1212, Vitória",
            igreja: "aprox. 13 min de carro",
            primeHall: "aprox. 7 min de carro",
            link: "https://www.booking.com/hotel/br/sleep-inn-praia-do-canto.pt-br.html?aid=1874345&label=canto-beach-CVaZMY94lyjpaJd_ZVKsiwS468191130147%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2395231936498%3Akwd-335839874538%3Alp9197574%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ybu3g3JQEN-ys9DH3hCFZRY&sid=eeb17804a2ca83a096173243e5554d2d&all_sr_blocks=142520501_145284129_0_1_0&checkin=2027-05-22&checkout=2027-05-23&dest_id=255557&dest_type=landmark&dist=0&group_adults=2&group_children=0&hapos=3&highlighted_blocks=142520501_145284129_0_1_0&hpos=3&matching_block_id=142520501_145284129_0_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=142520501_145284129_0_1_0__40950&srepoch=1788307714&srpvid=dd5200f5616205af&type=total&ucfs=1&#map_closed"
        },
        {
            numero: "03",
            nome: "Comfort Suítes Vitória",
            bairro: "PRAIA DO CANTO",
            descricao: "Av. Nossa Senhora da Penha, 1327, Vitória",
            igreja: "aprox. 14 min de carro",
            primeHall: "aprox. 2 min de carro",
            link: "https://www.booking.com/hotel/br/comfort-suites-vitoria.pt-br.html?aid=1874345&label=canto-beach-CVaZMY94lyjpaJd_ZVKsiwS468191130147%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2395231936498%3Akwd-335839874538%3Alp9197574%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ybu3g3JQEN-ys9DH3hCFZRY&sid=eeb17804a2ca83a096173243e5554d2d&all_sr_blocks=130635703_114536425_0_1_0&checkin=2027-05-22&checkout=2027-05-23&dest_id=255557&dest_type=landmark&dist=0&group_adults=2&group_children=0&hapos=2&highlighted_blocks=130635703_114536425_0_1_0&hpos=2&matching_block_id=130635703_114536425_0_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=130635703_114536425_0_1_0__52650&srepoch=1788307708&srpvid=dd5200f5616205af&type=total&ucfs=1&#map_closed"
        },
        {
            numero: "04",
            nome: "Triângulo Apart Hotel",
            bairro: "PRAIA DO CANTO",
            descricao: "Rua Aleixo Neto, 1385, Vitória",
            igreja: "aprox. 15 min de carro",
            primeHall: "aprox. 3 min de carro",
            link: "https://www.booking.com/hotel/br/apartments-vitoria.pt-br.html?aid=1874345&label=canto-beach-CVaZMY94lyjpaJd_ZVKsiwS468191130147%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2395231936498%3Akwd-335839874538%3Alp9197574%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ybu3g3JQEN-ys9DH3hCFZRY&sid=eeb17804a2ca83a096173243e5554d2d&all_sr_blocks=1183810_298324463_2_2_0&checkin=2027-05-22&checkout=2027-05-23&dest_id=255557&dest_type=landmark&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1183810_298324463_2_2_0&hpos=1&matching_block_id=1183810_298324463_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1183810_298324463_2_2_0__29700&srepoch=1788307698&srpvid=dd5200f5616205af&type=total&ucfs=1&"
        },
        {
            numero: "05",
            nome: "Golden Tulip Porto Vitória",
            bairro: "ENSEADA DO SUÁ",
            descricao: "Av. Nossa Senhora dos Navegantes, 635, Vitória",
            igreja: "aprox. 10 min de carro",
            primeHall: "aprox. 7 min de carro",
            link: "https://www.booking.com/hotel/br/golden-tulip-porto-vitoria.pt-br.html?aid=1874345&label=canto-beach-CVaZMY94lyjpaJd_ZVKsiwS468191130147%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2395231936498%3Akwd-335839874538%3Alp9197574%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ybu3g3JQEN-ys9DH3hCFZRY&sid=eeb17804a2ca83a096173243e5554d2d&all_sr_blocks=28665911_88967486_2_1_0&checkin=2027-05-22&checkout=2027-05-23&dest_id=255557&dest_type=landmark&dist=0&group_adults=2&group_children=0&hapos=12&highlighted_blocks=28665911_88967486_2_1_0&hpos=12&matching_block_id=28665911_88967486_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=28665911_88967486_2_1_0__53776&srepoch=1788307720&srpvid=dd5200f5616205af&type=total&ucfs=1&#map_closed"
        },
        {
            numero: "06",
            nome: "Ibis Vitória Praia de Camburi",
            bairro: "JARDIM DA PENHA",
            descricao: "Av. Dante Michelini, 791, Vitória",
            igreja: "aprox. 18 min de carro",
            primeHall: "aprox. 1 min de carro",
            link: "https://www.booking.com/hotel/br/ibis-praia-de-camburi.pt-br.html?aid=1874345&label=canto-beach-CVaZMY94lyjpaJd_ZVKsiwS468191130147%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2395231936498%3Akwd-335839874538%3Alp9197574%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ybu3g3JQEN-ys9DH3hCFZRY&sid=eeb17804a2ca83a096173243e5554d2d&all_sr_blocks=50393402_94483941_2_2_0&checkin=2027-05-22&checkout=2027-05-23&dest_id=255557&dest_type=landmark&dist=0&group_adults=2&group_children=0&hapos=13&highlighted_blocks=50393402_94483941_2_2_0&hpos=13&matching_block_id=50393402_94483941_2_2_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=50393402_94483941_2_2_0__34110&srepoch=1788307720&srpvid=dd5200f5616205af&type=total&ucfs=1&#map_closed"
        },
    ];

    return (
        <section className={styles.section}>

            <div className={styles.headerSection}>

                <Image src="/ensaio-foto-24.png" alt="Imagem de hospedagem" fill className={styles.headerImage} />

                <div className={styles.headerOverlay}></div>

                <div className={styles.headerContent}>

                    <h1 className={`${cormorant.className} ${styles.headerTitle}`}>
                        HOSPEDAGEM
                    </h1>

                    <div className={styles.headerLine}></div>

                    <p className={`${cormorant.className} ${styles.headerText}`}>
                        Para quem vem de longe.
                    </p>

                </div>

            </div>

            <div className={styles.subHeaderSection}>

                <PageNavigation
                    className={styles.hospedagemNavigation} 
                    items={[
                        {
                            label: "LOCAL E HORÁRIO",
                            href: "/instrucoes"
                        },
                        {
                            label: "TRAJES",
                            href: "/trajes"
                        }
                    ]}
                />

                <p className={`${cormorant.className} ${styles.subHeaderText}`}>
                    Selecionamos algumas opções de hospedagem com localização conveniente
                    <br />
                    para que você aproveite cada momento do fim de semana com tranquilidade.
                </p>

                <Image src="/folha.png" alt="Ícone de folha" width={22} height={22} className={styles.subHeaderIcon} />

            </div>

            <div className={styles.hotelsSection}>

                {hoteis.map((hotel) => (

                    <div
                        key={hotel.numero}
                        className={styles.optionHotel}
                    >

                        <div className={styles.indexNumber}>

                            <span className={`${lora.className} ${styles.hotelNumber}`}>
                                {hotel.numero}
                            </span>

                            <div className={styles.numberLine}></div>

                        </div>

                        <div className={styles.indexHotel}>

                            <h2 className={`${lora.className} ${styles.hotelTitle}`}>
                                {hotel.nome}
                            </h2>

                            <h3 className={`${montserrat.className} ${styles.hotelSubtitle}`}>
                                {hotel.bairro}
                            </h3>

                            <p className={`${cormorant.className} ${styles.hotelDescription}`}>
                                {hotel.descricao}
                            </p>

                        </div>

                        <div className={styles.indexLocal}>

                            {/* IGREJA */}

                            <div className={styles.localItem}>

                                <Image src="/catedral.png" alt="Ícone da igreja" width={22} height={22}
                                    className={styles.localIcon} />

                                <div className={styles.localText}>

                                    <h4 className={`${montserrat.className} ${styles.localTitle}`}>
                                        IGREJA SÃO GONÇALO
                                    </h4>

                                    <span className={`${cormorant.className} ${styles.localDescription}`}>
                                        {hotel.igreja}
                                    </span>

                                </div>

                            </div>

                            <div className={styles.localItem}>

                                <Image src="/cerimonial.png" alt="Ícone do cerimonial" width={22}
                                    height={22}
                                    className={styles.localIcon} />

                                <div className={styles.localText}>

                                    <h4 className={`${montserrat.className} ${styles.localTitle}`}>
                                        PRIME HALL
                                    </h4>

                                    <span className={`${cormorant.className} ${styles.localDescription}`}>
                                        {hotel.primeHall}
                                    </span>

                                </div>

                            </div>

                            <div className={styles.localLine}></div>

                        </div>

                        <div className={styles.hotelLink}>

                            <Link href={hotel.link} target="_blank" rel="noopener noreferrer" className={`${montserrat.className} ${styles.hotelLinkButton}`} >
                                <span>
                                    VER HOTEL
                                </span>

                                <Image src="/seta-direita.png" alt="Seta direita" width={18} height={18}
                                    className={styles.arrowIcon} />
                            </Link>

                        </div>

                    </div>

                ))}

            </div>

            <div className={styles.tipSection}>

                {/* BLOCO 1 */}

                <div className={styles.tipTitle}>

                    <Image src="/folha.png" alt="Ícone de folha" width={22} height={22}
                        className={styles.tipIcon} />

                    <h4 className={`${montserrat.className} ${styles.tipHeading}`}>
                        DICA
                    </h4>

                </div>

                <div className={styles.tipText}>

                    <p className={`${cormorant.className} ${styles.tipTextTop}`}>
                        Recomendamos hospedagem nas regiões de Jardim da Penha, Praia do Canto ou Enseada do Suá.
                    </p>

                </div>

                <div className={styles.tipLocation}>

                    <Image src="/gps.png" alt="Ícone de localização" width={22} height={22}
                        className={styles.tipLocationIcon} />

                    <span className={`${montserrat.className} ${styles.tipLocationText}`}>
                        TODOS OS LOCAIS
                        <br />
                        VITÓRIA - ES
                    </span>

                </div>

            </div>

        </section>
    );
}

export default Hospedagem;