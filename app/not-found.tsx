import styles from './notfound.module.css';
import Link from 'next/link';

export default function NotFound(){
  return (
    <article className={styles.container}>
      <p>Página no encontrada</p>
      <Link href={'/dashboard'}>Regresar al dashboard</Link>
    </article>
  );
}