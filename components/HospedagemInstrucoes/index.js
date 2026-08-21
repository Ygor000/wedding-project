import styles from "../HospedagemInstrucoes/hospedagemInstrucoes.module.css";
import PageNavigation from "../pageNavigation/index";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

function Hospedagem() {
    const hoteis = [
        {
            numero: "01",
            nome: "Quality Hotel",
            bairro: "JARDIM DA PENHA",
            descricao: "Conforto e praticidade a poucos minutos dos locais da celebração.",
            igreja: "aprox. 12 min de carro",
            primeHall: "aprox. 5 min de carro",
            link: "https://www.booking.com/hotel/br/quality-aeroporto-vita3ria.pt-br.html?aid=354415&label=quality-aeroporto-vita3ria-cpMrRFuq_yDvBfiHRNcMWwS104323717947%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-31745961685%3Alp9197543%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbC4OlOULAnvcrFmvh1xnqM&sid=220fbb7934943bc2cf719a4519e59cae&dest_id=-679351&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1787013272&srpvid=694a04096ceb0110&type=total&ucfs=1&"
        },
        {
            numero: "02",
            nome: "Praia do Canto Apart Hotel",
            bairro: "PRAIA DO CANTO",
            descricao: "Apartamentos amplos e localização privilegiada perto da área.",
            igreja: "aprox. 8 min de carro",
            primeHall: "aprox. 7 min de carro",
            link: "https://www.booking.com/hotel/br/praia-do-canto-apart.pt-br.html?aid=356980&label=gog235jc-10CAsoIEIUcHJhaWEtZG8tY2FudG8tYXBhcnRILVgDaCCIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AubRjtQGwAIB0gIkZWY2ZTk4NzAtMTNlMC00YTdiLWI5MzgtNTIyMTVjOGZjMmZm2AIB4AIB&sid=220fbb7934943bc2cf719a4519e59cae&dest_id=-679351&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1787013359&srpvid=7c170433b74600fe&type=total&ucfs=1&"
        },
        {
            numero: "03",
            nome: "Hotel Senac Ilha do Boi",
            bairro: "ILHA DO BOI",
            descricao: "Vista para o mar e fácil acesso à Terceira Ponte.",
            igreja: "aprox. 10 min de carro",
            primeHall: "aprox. 6 min de carro",
            link: "https://www.booking.com/hotel/br/senac-ilha-do-boi.pt-br.html?aid=356980&label=gog235jc-10CAsoIEIRc2VuYWMtaWxoYS1kby1ib2lILVgDaCCIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Ao_SjtQGwAIB0gIkMjIyYmRjMmYtNDU3My00MzUyLTg3MjYtYmE2YzYzNzE2NWFm2AIB4AIB&sid=220fbb7934943bc2cf719a4519e59cae&dest_id=-679351&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1787013398&srpvid=d7570448d51a01cb&type=total&ucfs=1&"
        },
        {
            numero: "04",
            nome: "Nobile Suites Diamond",
            bairro: "JARDIM DA PENHA",
            descricao: "Estrutura completa e ótima localização para o fim de semana.",
            igreja: "aprox. 13 min de carro",
            primeHall: "aprox. 4 min de carro",
            link: "https://www.booking.com/hotel/br/bristol-diamond-suites.pt-br.html?aid=356980&label=gog235jc-10CAsoIEIWYnJpc3RvbC1kaWFtb25kLXN1aXRlc0gtWANoIIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCrdKO1AbAAgHSAiRjMWE2Mzg4Zi1lYjQ5LTQyN2ItYjM5My01NTE0ZjVhMDM1ZWXYAgHgAgE&sid=220fbb7934943bc2cf719a4519e59cae&dest_id=-679351&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1787013437&srpvid=f9350457c8740212&type=total&ucfs=1&"
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

                <p className={`${cormorant.className} ${styles.subHeaderText}`}>
                    Selecionamos algumas opções de hospedagem com localização conveniente
                    <br />
                    para que você aproveite cada momento do fim de semana com tranquilidade.
                </p>

                <Image src="/folha.png" alt="Ícone de folha" width={22} height={22} className={styles.subHeaderIcon} />

            </div>

            <PageNavigation
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
                        Recomendamos hospedagem nas regiões de Jardim da Penha,
                    </p>

                    <p className={`${cormorant.className} ${styles.tipTextBottom}`}>
                        Praia do Canto ou Enseada do Suá.
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