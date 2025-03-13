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
    <Form action={'/viewer'} className={styles.form}>
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
      <section className={styles.basicField}>
        <label htmlFor="title">Nombre de la cotización</label>
        <input 
          type="text" 
          name="title" 
          id="title"
          value={titleQuote}
          disabled 
        />
      </section>

      <section className={styles.basicField}>
        <label htmlFor="price">Precio</label>
        <input type="number" name="price" id="price" min={0} step={0.0001}/>
      </section>

      <section className={styles.basicField}>
        <label htmlFor="deliveryDate">Fecha aproximada de entrega</label>
        <input type="date" name="deliveryDate" id="deliveryDate" />
      </section>

      {typeForm === 'article' &&
        <section className={styles.basicField}>
          <label htmlFor="product">Producto vendido</label>
          <input type="text" name="product" id="product" placeholder='Nombre del producto'/>
        </section>
      }

      {typeForm === 'service' &&
        <section className={styles.basicField}>
          <label htmlFor="serviceSold">Servicio vendido</label>
          <input type="text" name="service" id="serviceSold" placeholder='Nombre del servicio'/>
        </section>
      }

      {typeForm === 'truckbody' &&
        <section className={styles.measureField}>
          <div>
            <label htmlFor="width">Ancho</label>
            <input type="number" name="width" id="width" min={0} step={0.01}/>
          </div>
          <div>
            <label htmlFor="height">Alto</label>
            <input type="number" name="height" id="height" min={0} step={0.01}/>
          </div>
          <div>
            <label htmlFor="length">Largo</label>
            <input type="number" name="length" id="length" min={0} step={0.01}/>
          </div>
        </section>
      }

      <section className={styles.textField}>
        <label htmlFor="description">Descripción del trabajo</label>
        <textarea name="description" id="description" rows={10}></textarea>
      </section>

      <h4 className={styles.titleSection}>Datos de cliente</h4>
      <section className={styles.basicField}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" />
      </section>

      <section className={styles.basicField}>
        <label htmlFor="company">Empresa</label>
        <input type="text" name="company" id="company" />
      </section>

      <section className={styles.basicField}>
        <label htmlFor="phone">Teléfono</label>
        <input type="tel" name="phone" id="phone" />
      </section>

      <section className={styles.basicField}>
        <label htmlFor="email">Correo</label>
        <input type="email" name="email" id="email" />
      </section>

      <button type='submit' className={styles.submitBtn}>Generar cotización</button>
    </Form>
  );
}