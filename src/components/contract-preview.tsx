import React, { useState, useEffect } from 'react'
import { ContractFormData } from '../types'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Printer } from 'lucide-react'
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer'
import { saveAs } from 'file-saver'
import { Textarea } from "@/components/ui/textarea"

// Define styles for the PDF
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
    marginBottom: 10,
  },
})

// Create the PDF document component
const ContractPDF = ({ contractText }: { contractText: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>{contractText}</Text>
      </View>
    </Page>
  </Document>
)

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

