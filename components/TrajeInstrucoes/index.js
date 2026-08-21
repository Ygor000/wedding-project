import styles from "../TrajeInstrucoes/trajeInstrucoes.module.css";
import PageNavigation from "../pageNavigation/index";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

function Trajes() {
    return (
<section className={styles.section}>

            {/* =========================
                CABEÇALHO
            ========================== */}

            <div className={styles.headerSection}>

                <Image src="/ensaio-foto-24.png" alt="Imagem de fundo" fill loading="eager" className={styles.headerImage} />

                <div className={styles.headerOverlay}></div>

                <div className={styles.headerContent}>

                    <h1 className={`${cormorant.className} ${styles.headerTitle}`}>
                        TRAJES
                    </h1>

                    <div className={styles.headerLine}></div>

                    <p className={`${cormorant.className} ${styles.headerText}`}>
                        Para celebrar com a gente.
                    </p>

                </div>

            </div>


            {/* =========================
                CONTEÚDO
            ========================== */}

            <div className={styles.contentSection}>

                {/* =========================
                    PAGE NAVIGATION
                ========================== */}

                <PageNavigation
                        items={[
                            {
                                label: "LOCAL E HORÁRIO",
                                href: "/instrucoes"
                            },
                            {
                                label: "HOSPEDAGEM",
                                href: "/hospedagem"
                            }
                    ]} 
                />


                {/* =========================
                    SUBCABEÇALHO
                ========================== */}

                <div className={styles.subHeaderSection}>

                    <h2 className={`${cormorant.className} ${styles.subHeaderTitle}`}>
                        O TRAJE É SOCIAL.
                    </h2>

                    <div className={styles.subHeaderLine}></div>

                    <p className={`${cormorant.className} ${styles.subHeaderText}`}>
                        Queremos que você se sinta elegante e confortável
                        <br />
                        para aproveitar cada momento.
                    </p>

                    <Image src="/folha.png" alt="Ícone de folha" width={22} height={22} className={styles.subHeaderIcon} />

                </div>


                {/* =========================
                    PARA ELAS
                ========================== */}

                <div className={styles.sheSection}>

                    {/* BLOCO 1 */}

                    <div className={styles.oneShe}>

                        <h3 className={`${cormorant.className} ${styles.sectionTitle}`}>
                            PARA ELAS
                        </h3>

                        <div className={styles.sectionLine}></div>

                        <p className={`${cormorant.className} ${styles.sectionText}`}>
                            Vestidos longos ou midi, macacões e conjuntos sociais
                            <br />
                            são bem-vindos.
                        </p>

                        <p className={`${cormorant.className} ${styles.sectionText}`}>
                            Tecidos leves e sofisticados combinam
                            <br />
                            com a ocasião.
                        </p>

                    </div>


                    {/* BLOCO 2 */}

                    <div className={styles.twoShe}>

                        <h4 className={`${montserrat.className} ${styles.listTitle}`}>
                            BOAS ESCOLHAS
                        </h4>

                        <div className={styles.listLine}></div>

                        <div className={styles.clothingItem}>

                            <Image src="/vestido-longo.png" alt="Vestido longo" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Vestidos longos
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/vestido-midi.png" alt="Vestido midi" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Vestidos midi
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/macacao-alfaiataria.png" alt="Macacão de Alfaiataria" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Macacões de alfaiataria
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/sandalias.png" alt="Sandálias ou sapatos sociais" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Sandálias ou sapatos sociais
                            </span>

                        </div>

                    </div>


                    {/* BLOCO 3 */}

                    <div className={styles.threeShe}>

                        <h4 className={`${montserrat.className} ${styles.listTitle}`}>
                            EVITE
                        </h4>

                        <div className={styles.listLine}></div>

                        <div className={styles.clothingItem}>

                            <Image src="/vestido-longo.png" alt="Vestido longo" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Branco
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/vestido-longo.png" alt="Vestido longo" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Off-white
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/vestido-longo.png" alt="Vestido longo" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Marfim
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/vestido-longo.png" alt="Vestido longo" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Creme
                            </span>

                        </div>

                        <p className={`${cormorant.className} ${styles.smallNote}`}>
                            E tons muito claros.
                        </p>

                    </div>

                </div>


                {/* =========================
                    PARA ELES
                ========================== */}

                <div className={styles.heSection}>

                    {/* BLOCO 1 */}

                    <div className={styles.oneHe}>

                        <h3 className={`${cormorant.className} ${styles.sectionTitle}`}>
                            PARA ELES
                        </h3>

                        <div className={styles.sectionLine}></div>

                        <p className={`${cormorant.className} ${styles.sectionText}`}>
                            Terno completo com camisa social
                            <br />
                            e gravata.
                        </p>

                    </div>


                    {/* BLOCO 2 */}

                    <div className={styles.twoHe}>

                        <h4 className={`${montserrat.className} ${styles.listTitle}`}>
                            BOAS ESCOLHAS
                        </h4>

                        <div className={styles.listLine}></div>

                        <div className={styles.clothingItem}>

                            <Image src="/terno.png" alt="Terno" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Ternos em tons escuros
                                <br />
                                ou médios
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/camisa-social.png" alt="Camisa social" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Camisa social
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/gravata.png" alt="Gravata" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Gravata
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/sapato-social.png" alt="Sapato social" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Sapato social
                            </span>

                        </div>

                    </div>


                    {/* BLOCO 3 */}

                    <div className={styles.threeHe}>

                        <h4 className={`${montserrat.className} ${styles.listTitle}`}>
                            EVITE
                        </h4>

                        <div className={styles.listLine}></div>

                        <div className={styles.clothingItem}>

                            <Image src="/camisa-polo.png" alt="Camisa polo" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Camisa polo
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/jeans.png" alt="Jeans" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Jeans
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/tenis-esportivo.png" alt="Tênis esportivo" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Tênis esportivo
                            </span>

                        </div>

                        <div className={styles.clothingItem}>

                            <Image src="/sapatos-casuais.png" alt="Sapato casual" width={22} height={22} />

                            <span className={`${cormorant.className}`}>
                                Sapatos casuais
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Trajes;