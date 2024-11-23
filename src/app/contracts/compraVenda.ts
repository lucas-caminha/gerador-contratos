import { ContractFormData } from '../../types';
import { formatDate, dataPorExtenso } from '../utils/dateFormatters' 

export function generateCompraVendaContract(formData: ContractFormData): string {
  return `CONTRATO DE COMPRA E VENDA

Pelo presente instrumento particular, de um lado, ${formData.contratanteNome}, inscrito(a) no ${formData.contratanteTipo === 'pj' ? 'CNPJ' : 'CPF'} sob o número: ${formData.contratanteCpfCnpj}, doravante denominado(a) VENDEDOR(A), e de outro lado, ${formData.contratadoNome}, inscrito(a) no ${formData.contratadoTipo === 'pj' ? 'CNPJ' : 'CPF'} sob o número ${formData.contratadoCpfCnpj}, doravante denominado(a) COMPRADOR(A), têm entre si justo e acertado o presente contrato de compra e venda, mediante as seguintes cláusulas:

CLÁUSULA PRIMEIRA - DO OBJETO
O presente contrato tem como objeto a venda de [descrever o produto ou bem], conforme detalhado a seguir:
[Descrever as características do produto ou bem]

CLÁUSULA SEGUNDA - DO VALOR E FORMA DE PAGAMENTO
O COMPRADOR pagará ao VENDEDOR o valor de R$${formData.valor}, conforme as condições abaixo:
[Especificar a forma de pagamento: à vista, parcelado, etc.]

CLÁUSULA TERCEIRA - DA ENTREGA
A entrega do objeto deste contrato será realizada em ${formatDate(formData.dtInicialPrazo)}.

CLÁUSULA QUARTA - DAS OBRIGAÇÕES DAS PARTES 
Do VENDEDOR:
[Detalhar responsabilidades, como entrega do produto, garantia, etc.]
Do COMPRADOR:
[Detalhar responsabilidades, como pagamento no prazo, recebimento do produto, etc.]

CLÁUSULA QUINTA - CLÁUSULAS ADICIONAIS
${formData.clausulasAdicionais}

E por estarem assim justos e contratados, assinam o presente instrumento em duas vias de igual teor e forma.




___________________________________________________________________________
${formData.contratanteNome} - ${formData.contratanteCpfCnpj}


___________________________________________________________________________
${formData.contratadoNome} - ${formData.contratadoCpfCnpj}

${formData.cidade}, ${formData.uf}, ${dataPorExtenso(formData.dataContrato)}.
`
}

