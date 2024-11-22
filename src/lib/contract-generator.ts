import { ContractFormData } from '../types'

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Data inválida");
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function generateContract(formData: ContractFormData): string {
  // Implement the contract generation logic here
  let contractText = `CONTRATO DE ${formData.contractType.toUpperCase()}

Pelo presente instrumento particular, de um lado, ${formData.contratanteNome}, inscrito(a) no ${formData.contratanteTipo === 'pj' ? 'CNPJ' : 'CPF'} sob o número: ${formData.contratanteCpfCnpj}, 
doravante denominado(a) CONTRATANTE, e de outro lado, ${formData.contratadoNome}, inscrito(a) no ${formData.contratadoTipo === 'pj' ? 'CNPJ' : 'CPF'} sob o número ${formData.contratadoCpfCnpj}, 
doravante denominado(a) CONTRATADO, têm entre si justo e acertado o presente contrato de prestação de serviços, mediante as seguintes cláusulas:

CLÁUSULA PRIMEIRA - DO OBJETO
O presente contrato tem como objeto a prestação de serviços de [descrever o serviço], conforme detalhado a seguir:
[Descrever o escopo e os detalhes do serviço]

CLÁUSULA SEGUNDA - DO VALOR E FORMA DE PAGAMENTO
Pela prestação dos serviços, o CONTRATANTE pagará ao CONTRATADO o valor de R$ ${formData.valor}, conforme as condições abaixo:
[Especificar a forma de pagamento: à vista, parcelado, etc.]

CLÁUSULA TERCEIRA - DO PRAZO
O prazo para a execução dos serviços será de ${formData.prazo} dias, com início em [Data de Início] e término em [Data de Término].

CLÁUSULA QUARTA - DAS OBRIGAÇÕES DAS PARTES
Do CONTRATANTE:
[Detalhar responsabilidades, como fornecimento de informações, pagamento no prazo, etc.]
Do CONTRATADO:
[Detalhar responsabilidades, como cumprimento do prazo, qualidade do serviço, etc.]

CLÁUSULA QUINTA - CLÁUSULAS ADICIONAIS (OPCIONAL)
[Incluir quaisquer cláusulas adicionais, como multas, confidencialidade, rescisão, etc.]

E por estarem assim justos e contratados, assinam o presente instrumento em duas vias de igual teor e forma.

${formData.cidade}, ${formatDate(formData.dataContrato)}.

CONTRATANTE:
Nome: ${formData.contratanteNome}
CPF/CNPJ: ${formData.contratanteCpfCnpj}
Assinatura:

CONTRATADO:
Nome: ${formData.contratadoNome}
CPF/CNPJ: ${formData.contratadoCpfCnpj}
Assinatura:

`

  return contractText
}

