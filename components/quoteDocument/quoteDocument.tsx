'use client';

import React, { useEffect, useState } from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFDownloadLink
} from '@react-pdf/renderer';
import { QuoteData } from '@/types/dashboard/types';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    paddingBottom: 100
  },
  logo: {
    width: 70,
    height: 70,
    marginRight: 10
  },
  section: {
    margin: 0,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#D1D5DB'
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4169E1',
    marginBottom: 8,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    borderBottomStyle: 'solid'
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    borderBottomStyle: 'solid',
    alignItems: 'center'
  },
  infoRowEven: {
    backgroundColor: '#F9FAFB',
  },
  infoLabel: {
    width: 100,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#374151'
  },
  infoValue: {
    flex: 1,
    fontSize: 11,
    paddingLeft: 10,
    color: '#111827'
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomStyle: 'solid',
    paddingBottom: 10,
    alignItems: 'center'
  },
  headerLeft: {
    width: 80,
    marginRight: 20
  },
  headerRight: {
    flex: 1,
    alignItems: 'center'
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000'
  },
  quoteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  quoteNumber: {
    fontSize: 12,
    marginBottom: 5
  },
  addressText: {
    fontSize: 9,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 2
  },
  footer: {
    position: 'absolute',
    bottom: 5,           // Distancia desde el borde inferior
    left: 30,
    right: 30,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 10,
    color: '#999999', // Gris claro
    textAlign: 'center',
    marginBottom: 3
  },
  codeValue: {
    fontFamily: 'Courier',
    color: '#6B7280',
  },

  priceValue: {
    fontWeight: 'bold',
    color: '#10B981'
  }
});

const QuoteDocument = ({ quoteData }: { quoteData: QuoteData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            src="/carrocerias-logo.jpg"
            style={styles.logo}
          />
          <Text style={{ fontSize: 8, textAlign: 'center', color: '#555555' }}>Venta y mantenimiento de carrocerías</Text>
        </View>

        <View style={styles.headerRight}>
          <Text style={styles.quoteTitle}>Carrocerías David - Cotización</Text>
          <Text style={styles.quoteNumber}>Cotización: {quoteData.quoteId || '00001'}</Text>
          <Text style={styles.addressText}>Cto. Ext. Metropolitano (20 de Noviembre) frente a micheladas</Text>
          <Text style={styles.addressText}>El Consentido de la Frontera. Col. Agrícola Lázaro Cárdenas, Metepec, Méx.</Text>
        </View>
      </View>

      {/* Información del cliente */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cliente</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>ID:</Text>
          <Text style={[styles.infoValue, styles.codeValue]}>{quoteData.clientId}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nombre:</Text>
          <Text style={styles.infoValue}>{quoteData.clientName}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Compañía:</Text>
          <Text style={styles.infoValue}>{quoteData.clientCompany || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Contacto:</Text>
          <Text style={styles.infoValue}>{quoteData.clientContact || 'N/A'}</Text>
        </View>
      </View>

      {/* Información de la cotización */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cotización</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>ID:</Text>
          <Text style={[styles.infoValue, styles.codeValue]}>{quoteData.quoteId}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Descripción:</Text>
          <Text style={styles.infoValue}>{quoteData.quoteDescription}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Precio:</Text>
          <Text style={[styles.infoValue, styles.priceValue]}>${quoteData.price}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Creada el:</Text>
          <Text style={styles.infoValue}>{quoteData.createdAt}</Text>
        </View>
      </View>

      {/* Información del producto */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Producto</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>ID:</Text>
          <Text style={[styles.infoValue, styles.codeValue]}>{quoteData.quoteItemId}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nombre:</Text>
          <Text style={styles.infoValue}>{quoteData.quoteItemName}</Text>
        </View>

        {/* Dimensiones si están disponibles */}
        {quoteData.bodytruckSize && (
          <>
            <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Dimensiones</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Ancho:</Text>
              <Text style={styles.infoValue}>{quoteData.bodytruckSize.width}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Alto:</Text>
              <Text style={styles.infoValue}>{quoteData.bodytruckSize.height}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Largo:</Text>
              <Text style={styles.infoValue}>{quoteData.bodytruckSize.length}</Text>
            </View>
          </>
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Cto. Ext. Metropolitano (20 de Noviembre) frente a micheladas</Text>
        <Text style={styles.footerText}>El Consentido de la Frontera. Col. Agrícola Lázaro Cárdenas, Metepec, Méx.</Text>
        <Text style={styles.footerText}>Contacto: 722 598 9614 | @*carrocerías_*david</Text>
      </View>
    </Page>
  </Document>
);

const PDFDownloadButton = ({ quoteData }: { quoteData: QuoteData }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <button
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          backgroundColor: '#0070f3',
          color: 'white',
        }}
        disabled
      >
        Cargando PDF...
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<QuoteDocument quoteData={quoteData} />}
      fileName={`cotizacion-${quoteData.quoteId}.pdf`}
    >
      Descargar
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
