import { ContractFormData } from '../../types';

import { formatDate, dataPorExtenso } from '../utils/dateFormatters'

export function generatePrestacaoServicosContract(formData: ContractFormData): string {
  return `CONTRATO DE PRESTAÇÃO DE SERVIÇOS

Pelo presente instrumento particular, de um lado, ${formData.contratanteNome}, inscrito(a) no ${formData.contratanteTipo === 'pj' ? 'CNPJ' : 'CPF'} sob o número: ${formData.contratanteCpfCnpj}, doravante denominado(a) CONTRATANTE, e de outro lado, ${formData.contratadoNome}, inscrito(a) no ${formData.contratadoTipo === 'pj' ? 'CNPJ' : 'CPF'} sob o número ${formData.contratadoCpfCnpj}, doravante denominado(a) CONTRATADO, têm entre si justo e acertado o presente contrato de prestação de serviços, mediante as seguintes cláusulas:
\n
CLÁUSULA PRIMEIRA - DO OBJETO
O presente contrato tem como objeto a prestação de serviços de [descrever o serviço], conforme detalhado a seguir:
[Descrever o escopo e os detalhes do serviço]
\n
CLÁUSULA SEGUNDA - DO VALOR E FORMA DE PAGAMENTO
Pela prestação dos serviços, o CONTRATANTE pagará ao CONTRATADO o valor de R$${formData.valor}, conforme as condições abaixo:
[Especificar a forma de pagamento: à vista, parcelado, etc.]
\n
CLÁUSULA TERCEIRA - DO PRAZO
O prazo para a execução dos serviços será de ${formData.prazo} ${formData.prazoUnidade}, com início em ${formatDate(formData.dtInicialPrazo)} e término em ${formatDate(formData.dtFinalPrazo)}.
\n
CLÁUSULA QUARTA - DAS OBRIGAÇÕES DAS PARTES 
Do CONTRATANTE:
[Detalhar responsabilidades, como fornecimento de informações, pagamento no prazo, etc.]
Do CONTRATADO:
[Detalhar responsabilidades, como cumprimento do prazo, qualidade do serviço, etc.]
\n
CLÁUSULA QUINTA - CLÁUSULAS ADICIONAIS
${formData.clausulasAdicionais}
\n
E por estarem assim justos e contratados, assinam o presente instrumento em duas vias de igual teor e forma.




___________________________________________________________________________
${formData.contratanteNome} - ${formData.contratanteCpfCnpj}


___________________________________________________________________________
${formData.contratadoNome} - ${formData.contratadoCpfCnpj}

${formData.cidade}, ${formData.uf}, ${dataPorExtenso(formData.dataContrato)}.
`
}

