import styles from './page.module.css';
import { QuoteForm } from '@/types/dashboard/types';

type Props = {
  searchParams: Promise<QuoteForm>
};

export default async function Page({searchParams}: Props){
  const data = await searchParams;
  console.log(data);
  
  return (
    <article className={styles.container}>
      <section className={styles.headerQuote}>

        <h2>Carrocerías David</h2>

        <div className={styles.quoteMeta}>
          <p>
            {Math.random()}            
          </p>
          <p>
            {new Date().toLocaleDateString('es-mx', {
              weekday: 'short', 
              year: 'numeric', 
              day: 'numeric'
            })}
          </p>
        </div>

      </section>

      <hr />

      <section className={styles.bodyQuote}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td colSpan={2} className={styles.rowTitle}>
                Información del cliente
              </td>
            </tr>
            <tr>
              <th>Nombre</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Compañía</th>
              <td>{data.company}</td>
            </tr>
            <tr>
              <th>Correo</th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th>Teléfono</th>
              <td>{data.phone}</td>
            </tr>
          </tbody>
        </table>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td colSpan={2} className={styles.rowTitle}>
                Datos
                {data.type === 'article'
                  ? ' del producto'
                  : data.type === 'service'
                  ? ' del servicio'
                  : ' de la carrocería'
                }
              </td>
            </tr>
            <tr>
              <th>Precio</th>
              <td>{data.price}</td>
            </tr>
            <tr>
              <th>Entrega estimada</th>
              <td>{data.deliveryDate}</td>
            </tr>
            {
              (data.type === 'article' || data.type === 'service') &&
              <tr>
                <th>
                  {
                    data.type === 'service'
                    ? 'Servicio'
                    : 'Articulo'
                  }
                </th>
                <td>
                  {data.product ?? data.service}
                </td>
              </tr>
            }
            {
              data.type === 'truckbody' &&
              <>
                <tr>
                  <td colSpan={2} className={styles.rowTitle}>Medidas de carrocería</td>
                </tr>
                <tr>
                  <th>Ancho</th>
                  <td>{data.width}</td>
                </tr>
                <tr>
                  <th>Alto</th>
                  <td>{data.height}</td>
                </tr>
                <tr>
                  <th>Largo</th>
                  <td>{data.length}</td>
                </tr>
              </>
            }
          </tbody>
        </table>
      </section>
      
      <section className={styles.description}>
        <p>
          Descripción 
          {
            data.type === 'article' 
            ? ' del articulo'
            : data.type === 'service'
            ? ' del servicio'
            : ' de la carrocería'
          }
        </p>
        <p>{data.description}</p>
      </section>
      
      {data.type === 'truckbody' && 
        <section className={styles.terms}>
          <p style={{fontStyle: 'italic'}}>Notas extra</p>
          <p>
            El pago de la carrocería se realiza en dos exposiciones. El primer 
            pago debe de cubrir el 50% del total del monto, una vez entregada 
            la carrocería se realiza el pago por el sobrante del monto (50%).
          </p>
        </section>
      }
    </article>
  );
}