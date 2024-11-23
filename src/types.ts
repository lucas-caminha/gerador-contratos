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
  prazoUnidade : string
  clausulasAdicionais: string
  cidade: string
  uf: string
  dataContrato: Date
  dtInicialPrazo : Date
  dtFinalPrazo : Date
  tituloServico: string
  enderecoServico: string
  descServico: string
}

