"use client";

import styles from "./quoteDetails.module.css";
import { QuoteData } from "@/types/dashboard/types";
import { useState } from "react";
import { updateQuoteById } from '@/actions/quotes';
import PDFDownloadButton from '../quoteDocument/quoteDocument';

type Props = {
  quoteData: QuoteData;
};

export function QuoteDetails({ quoteData }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(quoteData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await updateQuoteById(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating quote:", error);
    }
  };

  return (
    <article className={styles.mainContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <fieldset disabled={!isEditing}>
          <legend>Información del cliente</legend>
          <div>
            <label htmlFor="clientId">ID:</label>
            <input
              type="text"
              id="clientId"
              name="clientId"
              value={formData.clientId}
              onChange={handleInputChange}
              disabled={true}
            />
          </div>
          <div>
            <label htmlFor="clientName">Nombre:</label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="clientCompany">Compañía:</label>
            <input
              type="text"
              id="clientCompany"
              name="clientCompany"
              value={formData.clientCompany || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="clientContact">Contacto:</label>
            <input
              type="text"
              id="clientContact"
              name="clientContact"
              value={formData.clientContact || ""}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>

        <fieldset disabled={!isEditing}>
          <legend>Información de la cotización</legend>
          <div>
            <label htmlFor="quoteId">ID:</label>
            <input
              type="text"
              id="quoteId"
              name="quoteId"
              value={formData.quoteId}
              onChange={handleInputChange}
              disabled={true}
            />
          </div>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price">Precio:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="quoteDescription">Descripción:</label>
            <input
              type="text"
              id="quoteDescription"
              name="quoteDescription"
              value={formData.quoteDescription || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="createdAt">Fecha de creación</label>
            <input
              type="date"
              id="createdAt"
              name="createdAt"
              value={formData.createdAt || ""}
              disabled={true}
            />
          </div>
        </fieldset>

        <fieldset disabled={!isEditing}>
          <legend>Información del item</legend>
          <div>
            <label htmlFor="quoteItemId">ID:</label>
            <input
              type="text"
              id="quoteItemId"
              name="quoteItemId"
              value={formData.quoteItemId}
              onChange={handleInputChange}
              disabled={true}
            />
          </div>
          <div>
            <label htmlFor="quoteItemName">Nombre:</label>
            <input
              type="text"
              id="quoteItemName"
              name="quoteItemName"
              value={formData.quoteItemName}
              onChange={handleInputChange}
            />
          </div>
          {formData.bodytruckSize && (
            <>
              <legend>Dimensiones de la carrocería</legend>
              <div>
                <label htmlFor="width">Ancho:</label>
                <input
                  type="number"
                  id="width"
                  name="bodytruckSize.width"
                  value={formData.bodytruckSize.width}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="height">Alto:</label>
                <input
                  type="number"
                  id="height"
                  name="bodytruckSize.height"
                  value={formData.bodytruckSize.height}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="length">Largo:</label>
                <input
                  type="number"
                  id="length"
                  name="bodytruckSize.length"
                  value={formData.bodytruckSize.length}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
        </fieldset>

        <section className={styles.controls}>
          {!isEditing && (
            <button type="button" onClick={() => setIsEditing(true)}>
              Editar
            </button>
          )}
          {isEditing && <button type="submit">Guardar</button>}
          {isEditing && <button type="button" onClick={() => setIsEditing(false)}>Cancelar</button>}
          {!isEditing && <PDFDownloadButton quoteData={quoteData} />}
        </section>
      </form>
    </article>
  );
}
