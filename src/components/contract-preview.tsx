import React, { useState, useEffect } from 'react'
import { ContractFormData } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import { Document, Page, Text, View, StyleSheet, pdf, Font, Image } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'
import { Textarea } from "@/components/ui/textarea"

// Register custom fonts
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
  ]
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 50,
  },
  header: {
    marginBottom: 20,
    borderBottom: '1 solid #000000',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 700,
    color: '#333333',
  },
  logo: {
    width: 50,
    height: 50,
  },
  content: {
    marginTop: 20,
    marginBottom: 20,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 700,
    marginBottom: 10,
    color: '#444444',
    textTransform: 'uppercase',
  },
  paragraph: {
    fontSize: 12,
    fontFamily: 'Roboto',
    lineHeight: 1.5,
    color: '#555555',
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    textAlign: 'center',
    color: '#888888',
    borderTop: '1 solid #CCCCCC',
    paddingTop: 10,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#888888',
  },
})

// Create the PDF document component
const ContractPDF = ({ contractText }: { contractText: string }) => {
  const paragraphs = contractText.split('\n')

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.content}>
          {paragraphs.map((paragraph, index) => {
            if (paragraph.toUpperCase() === paragraph) {
              return <Text key={index} style={styles.sectionTitle}>{paragraph}</Text>
            } else {
              return <Text key={index} style={styles.paragraph}>{paragraph}</Text>
            }
          })}
        </View>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  )
}

interface ContractPreviewProps {
  formData: ContractFormData
  generateContract: (formData: ContractFormData) => string
}

export function ContractPreview({ formData, generateContract }: ContractPreviewProps) {
  const [editableContractText, setEditableContractText] = useState('')

  useEffect(() => {
    const initialContractText = generateContract(formData)
    setEditableContractText(initialContractText)
  }, [formData, generateContract])

  const handleDownloadPDF = async () => {
    const blob = await pdf(<ContractPDF contractText={editableContractText} />).toBlob()
    saveAs(blob, 'contrato.pdf')
  }

  const handleContractTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableContractText(e.target.value)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Visualização e Edição do Contrato</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={editableContractText}
            onChange={handleContractTextChange}
            className="w-full h-96 p-4 font-mono text-sm"
            placeholder="O texto do contrato aparecerá aqui. Você pode editá-lo conforme necessário."
          />
        </CardContent>
      </Card>
      <div className="flex justify-center space-x-4">
        <Button className="w-40" onClick={handleDownloadPDF}>
          <Download className="mr-2 h-4 w-4" /> Baixar PDF
        </Button>
      </div>
    </div>
  )
}

