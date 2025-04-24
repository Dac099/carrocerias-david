import Link from 'next/link';
import styles from './navigation.module.css';
import { HiUsers as ClientsIcon } from "react-icons/hi2";
import { TbTransform as GeneratorIcon } from "react-icons/tb";
import { FaToiletPaper as QuotesIcon } from "react-icons/fa";
import { IoMdHome as HomeIcon } from "react-icons/io";

export function Navigation() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.listNav}>
        <li>
          <Link className={styles.listItem} href={'/dashboard'}>
            <HomeIcon className={styles.listIcon} />
            Inicio
          </Link>
        </li>
        <li>
          <Link className={styles.listItem} href={'/dashboard/quote'}>
            <GeneratorIcon className={styles.listIcon} />
            Generador
          </Link>
        </li>
        <li>
          <Link className={styles.listItem} href={'/dashboard/quotes'}>
            <QuotesIcon className={styles.listIcon} />
            Cotizaciones
          </Link>
        </li>
        <li>
          <Link className={styles.listItem} href={'/dashboard/clients'}>
            <ClientsIcon className={styles.listIcon} />
            Clientes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
