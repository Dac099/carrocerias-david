import styles from './page.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <article className={styles.pageContainer}>
      <section className={`${styles.hero} ${styles.card}`}>
        <Image
          alt='Logo Carrocerías David'
          src={'/carrocerias-logo.jpg'}
          width={200}
          height={180}
        />
        <p>Panel de administrador</p>
      </section>

      <section className={`${styles.lastClients} ${styles.card}`}>
        <p>Últimos clientes</p>
        <article className={styles.listElements}>

        </article>
      </section>

      <section className={`${styles.lastQuotes} ${styles.card}`}>
        <p>Últimas cotizaciones</p>
        <article className={styles.listElements}>

        </article>
      </section>
    </article>
  );
}
