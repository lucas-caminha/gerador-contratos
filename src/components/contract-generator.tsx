"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Importações de componentes UI
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/Progress"

// Importações de componentes personalizados
import { SelectContractType } from './select-contract-type'
import { PartyInformation } from './party-information'
import { ContractPreview } from './contract-preview'

// Importações de tipos e funções
import { ContractType, PartyType, ContractFormData } from '../types'
import { generateContract } from '../lib/contract-generator'

const formSchema = z.object({
  contractType: z.enum(['servicos', 'locacao', 'compravenda']),
  contratanteTipo: z.enum(['pj', 'pf']),
  contratadoTipo: z.enum(['pj', 'pf']),
  contratanteNome: z.string().min(1, "Nome é obrigatório"),
  contratanteCpfCnpj: z.string().min(1, "CPF/CNPJ é obrigatório"),
  contratadoNome: z.string().min(1, "Nome é obrigatório"),
  contratadoCpfCnpj: z.string().min(1, "CPF/CNPJ é obrigatório"),
  valor: z.string().min(1, "Valor é obrigatório"),
  prazo: z.string().min(1, "Prazo é obrigatório"),
  clausulasAdicionais: z.string().optional(),
  cidade: z.string().optional(),
  dataContrato: z.date().optional(),
})

export default function ContractGenerator() {
  const [step, setStep] = useState(1)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contractType: 'servicos',
      contratanteTipo: 'pj',
      contratadoTipo: 'pj',
      contratanteNome: '',
      contratanteCpfCnpj: '',
      contratadoNome: '',
      contratadoCpfCnpj: '',
      valor: '',
      prazo: '',
      clausulasAdicionais: '',
      cidade: '',
      dataContrato: new Date(),
    },
  })

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
    // Handle form submission
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SelectContractType control={form.control} />
      case 2:
        return <PartyInformation control={form.control} />
      case 3:
        const formData = form.getValues() as ContractFormData
        return <ContractPreview formData={formData} generateContract={generateContract} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl mx-auto shadow-xl">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Gerador de Contratos</CardTitle>
          <p className="text-sm opacity-90">Crie contratos personalizados em minutos</p>
        </CardHeader>
        <Progress value={(step / 3) * 100} className="w-full bg-green-200 mt-4 mb-2" indicatorClassName="bg-green-600" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="p-6 pt-4">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Etapa {step} de 3</h2>
              <p className="text-sm text-gray-600">
                {step === 1 && "Selecione o tipo de contrato"}
                {step === 2 && "Preencha as informações das partes"}
                {step === 3 && "Revise e finalize seu contrato"}
              </p>
            </div>
            {renderStep()}
          </CardContent>
          <CardFooter className="flex justify-between bg-gray-50 rounded-b-lg p-4">
            {step > 1 && (
              <Button type="button" onClick={prevStep} variant="outline">
                Voltar
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={nextStep} className="ml-auto">
                Avançar
              </Button>
            ) : (
              <>
                <Button type="button" variant="outline" onClick={() => console.log("Compartilhando por e-mail:", form.getValues())}>
                  Compartilhar por E-mail (Em Desenvolvimento...)
                </Button>
              </>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

