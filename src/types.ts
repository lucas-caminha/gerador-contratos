export type ContractType = 'servicos' | 'locacao' | 'compravenda'
export type PartyType = 'pj' | 'pf'

export interface ContractFormData {
  contractType: ContractType
  contratanteTipo: PartyType
  contratadoTipo: PartyType
  contratanteNome: string
  contratanteCpfCnpj: string
  contratadoNome: string
  contratadoCpfCnpj: string
  valor: string
  prazo: string
  clausulasAdicionais: string
  cidade: string
  dataContrato: Date
  // Add other form fields as needed
}

