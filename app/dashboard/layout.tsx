import Link from 'next/link';
import styles from './styles.module.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode
};

export default function DashboardLayout({children}: Props){
  return (
    <section className={styles.layoutContainer}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.listNav}>
            <li >
              <Link className={styles.listItem} href={'/dashboard/quote'}>Generador</Link>
            </li>
            <li >
              <Link className={styles.listItem} href={'/dashboard/quotes'}>Cotizaciones</Link>
            </li>
            <li >
              <Link className={styles.listItem} href={'/dashboard/clients'}>Clientes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </section>
  );
}