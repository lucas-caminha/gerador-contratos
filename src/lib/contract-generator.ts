import { ContractFormData } from '../types'

function formatDate(dateString: Date): string {
  const date = dateString;

  if (isNaN(date.getTime())) {
    throw new Error("Data inválida");
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function dataPorExtenso(date: Date): string {
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  const data = formatDate(date);

  // Validar e desestruturar a data
  const [dia, mes, ano] = data.split("/").map(Number);

  if (!dia || !mes || !ano || mes < 1 || mes > 12) {
    throw new Error("Data inválida. Certifique-se de que está no formato DD/MM/YYYY.");
  }

  // Converter para o formato por extenso
  const mesPorExtenso = meses[mes - 1];
  return `${dia} de ${mesPorExtenso} de ${ano}`;
}

export function generateContract(formData: ContractFormData): string {
  // Implement the contract generation logic here
  let contractText = `CONTRATO DE ${formData.contractType.toUpperCase()}

Pelo presente instrumento particular, de um lado, ${formData.contratanteNome}, inscrito(a) no ${formData.contratanteTipo === 'pj' ? 'CNPJ' : 'CPF'} sob o número: ${formData.contratanteCpfCnpj}, doravante denominado(a) CONTRATANTE, e de outro lado, ${formData.contratadoNome}, inscrito(a) no ${formData.contratadoTipo === 'pj' ? 'CNPJ' : 'CPF'} sob o número ${formData.contratadoCpfCnpj}, doravante denominado(a) CONTRATADO, têm entre si justo e acertado o presente contrato de prestação de serviços, mediante as seguintes cláusulas:

CLÁUSULA PRIMEIRA - DO OBJETO
O presente contrato tem como objeto a prestação de serviços de [descrever o serviço], conforme detalhado a seguir:
[Descrever o escopo e os detalhes do serviço]

CLÁUSULA SEGUNDA - DO VALOR E FORMA DE PAGAMENTO
Pela prestação dos serviços, o CONTRATANTE pagará ao CONTRATADO o valor de R$${formData.valor}, conforme as condições abaixo:
[Especificar a forma de pagamento: à vista, parcelado, etc.]

CLÁUSULA TERCEIRA - DO PRAZO
O prazo para a execução dos serviços será de ${formData.prazo} dias, com início em ${formatDate(formData.dtInicialPrazo)} e término em ${formatDate(formData.dtFinalPrazo)}.

CLÁUSULA QUARTA - DAS OBRIGAÇÕES DAS PARTES 
Do CONTRATANTE:
[Detalhar responsabilidades, como fornecimento de informações, pagamento no prazo, etc.]
Do CONTRATADO:
[Detalhar responsabilidades, como cumprimento do prazo, qualidade do serviço, etc.]

CLÁUSULA QUINTA - CLÁUSULAS ADICIONAIS
${formData.clausulasAdicionais}

E por estarem assim justos e contratados, assinam o presente instrumento em duas vias de igual teor e forma.




___________________________________________________________________________
${formData.contratanteNome} - ${formData.contratanteCpfCnpj}


___________________________________________________________________________
${formData.contratadoNome} - ${formData.contratadoCpfCnpj}

${formData.cidade}, ${formData.uf}, ${dataPorExtenso(formData.dataContrato)}.

`

  return contractText
}

