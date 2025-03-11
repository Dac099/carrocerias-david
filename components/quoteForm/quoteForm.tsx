'use client';
import styles from './quoteForm.module.css';
import Form from 'next/form';
import { useState, useEffect } from 'react';
import { Service } from '@/types/dashboard/types';

export function QuoteForm(){
  const [typeForm, setTypeForm] = useState<Service>();
  const [titleQuote, setTitleQuote] = useState<string>('Nueva cotización');

  useEffect(() => {
    switch(typeForm){
      case 'article':
        setTitleQuote('Venta de producto');
        break;
      case 'service':
        setTitleQuote('Servicio o mantenimiento');
        break;
      case 'truckbody':
        setTitleQuote('Venta de carrocería')
    }
  }, [typeForm]);

  return (
    <Form action={''} className={styles.form}>
      <h4 className={styles.titleSection}>Tipo de cotización</h4>
      <section className={styles.typeSection}>
        <div className={styles.typeOption}>
          <input 
            type="radio" 
            name="type" 
            id="service" 
            value={'service'}
            onChange={(e) => setTypeForm(e.target.value as Service)}
          />
          <label htmlFor="service">Servicio</label>
        </div>
        <div className={styles.typeOption}>
          <input 
            type="radio" 
            name="type" 
            id="article" 
            value={'article'}
            onChange={(e) => setTypeForm(e.target.value as Service)}
          />
          <label htmlFor="article">Producto</label>
        </div>
        <div className={styles.typeOption}>
          <input 
            type="radio" 
            name="type" 
            id="truckbody" 
            value={'truckbody'}
            onChange={(e) => setTypeForm(e.target.value as Service)}
          />
          <label htmlFor="truckbody">Carrocería</label>
        </div>
      </section>

      <h4 className={styles.titleSection}>Datos a cotizar</h4>
      <section>
        <label htmlFor="title">Nombre de la cotización</label>
        <input 
          type="text" 
          name="title" 
          id="title"
          value={titleQuote}
          disabled 
        />
      </section>
    </Form>
  );
}