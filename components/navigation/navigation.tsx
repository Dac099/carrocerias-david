'use client';
import styles from './navigation.module.css';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [visible, setVisible] = useState(false);

  return (
    <article className={styles.header}>
      <h2 className={styles.header_title}>Carrocerías David</h2>
      <Button 
        icon='pi pi-arrow-right' 
        onClick={() => setVisible(!visible)}
        style={{ fontSize: '0.5rem', height: '100%', width: '30px'}}
      />
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position='left'
        style={{ width: '300px' }}
        header={
          <div style={{ height: '30px'}}>
            <h2 className={styles.sidebar_title} style={{ margin: '0'}}>Menu</h2>
          </div>
        }
        className={styles.sideBar}
      >
        <nav>
          <ul className={styles.sidebar_list}>
            <li>
              <Link 
                href={'/dashboard'} 
                onClick={() => setVisible(false)}
              >
                <i className='pi pi-home'></i>
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href={'/dashboard/quote'} 
                onClick={() => setVisible(false)}
              >
                <i className='pi pi-warehouse'></i>
                Generador
              </Link>
            </li>
            <li>
              <Link 
                href={'/dashboard/quotes'} 
                onClick={() => setVisible(false)}
              >
                <i className='pi pi-database'></i>
                Cotizaciones
              </Link>
            </li>
            <li>
              <Link 
                href={'/dashboard/clients'} 
                onClick={() => setVisible(false)}
              >
                <i className='pi pi-address-book'></i>
                Clientes
              </Link>
            </li>
          </ul>
        </nav>
      </Sidebar>
    </article>
  );
}
