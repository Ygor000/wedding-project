import Link from "next/link";
import { montserrat } from "../../styles/fonts";
import styles from "./pageNavigation.module.css";

function PageNavigation({ items }) {
    return (
        <nav className={styles.infoNavigation}>

            {items.map((item) => (

                <Link
                    key={item.href}
                    href={item.href}
                    className={`${montserrat.className} ${styles.navigationItem}`}
                >
                    <span className={styles.navigationLine}></span>

                    {item.label}

                </Link>

            ))}

        </nav>
    );
}

export default PageNavigation;