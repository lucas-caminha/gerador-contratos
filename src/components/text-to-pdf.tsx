import React, { useState, useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet, pdf, Font } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

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
const PDFContent: React.FC<{ text: string }> = ({ text }) => (
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generatePDF = async () => {
    const blob = await pdf(<PDFContent text={text} />).toBlob();
    saveAs(blob, fileName);
  };

  if (!isClient) {
    return null; // ou um placeholder, se preferir
  }

  return (
    <div>
      <button onClick={generatePDF}>Baixar PDF</button>
    </div>
  );
};

export default TextToPDF;

