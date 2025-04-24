import styles from './page.module.css';
import { getClientsData } from '@/actions/clients';
import { BiSolidUserPin as UserIcon } from "react-icons/bi";
import { formatDateToSpanish } from '@/utils/helpers';

export default async function Page() {
  const clientsData = await getClientsData();
  return (
    <section className={styles.mainContainer}>
      {clientsData.map(client => (
        <article
          className={styles.clientCard}
          key={client.clientId}
        >
          <div className={styles.icon}>
            <UserIcon size={45} />
          </div>

          <table className={styles.clientTable}>
            <tbody>
              <tr className={styles.tableRow}>
                <th>Nombre</th>
                <td>{client.clientName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th>Contacto</th>
                <td>{client.clientContact}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th>Cotizaciones</th>
                <td>{client.totalQuotes}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th>Agregado</th>
                <td>{formatDateToSpanish(client.createdAt)}</td>
              </tr>
            </tbody>
          </table>

        </article>
      ))}
    </section>
  );
}
