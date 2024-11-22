import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';

// Registrar uma fonte personalizada
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
});

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Roboto',
  },
});

// Componente para o conteúdo do PDF
const PDFContent = ({ text }: { text: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Page>
  </Document>
);

// Componente principal
interface TextToPDFProps {
  text: string;
  fileName?: string;
}

const TextToPDF: React.FC<TextToPDFProps> = ({ text, fileName = 'documento.pdf' }) => {
  return (
    <div>
      <PDFDownloadLink document={<PDFContent text={text} />} fileName={fileName}>
        {({ blob, url, loading, error }) => 
          loading ? 'Gerando PDF...' : 'Baixar PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default TextToPDF;

