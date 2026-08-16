import styles from "../Rodape/rodape.module.css";
import Image from "next/image";
import Link from "next/link";
import { cormorant, lora, montserrat } from "../../styles/fonts";

function Rodape(){
    return (
        <footer className={`${montserrat.className} ${styles.rodape}`}>
            Developed by Ygor Arten and Mariana Mantovanelli
        </footer>
    )
}
export default Rodape;