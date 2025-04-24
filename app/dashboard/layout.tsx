import styles from './layout.module.css';
import { ReactNode } from 'react';
import { Navigation } from '@/components/navigation/navigation';

type Props = {
  children: ReactNode
};

export default function DashboardLayout({ children }: Props) {
  return (
    <section className={styles.layoutContainer}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </section>
  );
}
