import { ContractFormData } from '../../types';
import { formatDate, dataPorExtenso } from '../utils/dateFormatters'

export function generatePrestacaoServicosContract(formData: ContractFormData): string {
  let texto = `CONTRATO DE PRESTAÇÃO DE SERVIÇOS

Pelo presente instrumento particular, de um lado, ${formData.contratanteNome}, inscrito(a) no ${formData.contratanteTipo === 'pj' ? 'CNPJ' : 'CPF'} sob o número ${formData.contratanteCpfCnpj}, doravante denominado(a) CONTRATANTE, e de outro lado, ${formData.contratadoNome}, inscrito(a) no ${formData.contratadoTipo === 'pj' ? 'CNPJ' : 'CPF'} sob o número ${formData.contratadoCpfCnpj}, doravante denominado(a) CONTRATADO, têm entre si justo e acertado o presente contrato de prestação de serviços, mediante as seguintes cláusulas:

CLÁUSULA PRIMEIRA - DO OBJETO
O presente contrato tem como objeto a prestação de ${formData.tituloServico}, conforme detalhado a seguir:
Os serviços serão realizados no endereço indicado pelo(a) CONTRATANTE, situado em ${formData.enderecoServico}, ou em outro local previamente acordado entre as partes. O(a) CONTRATANTE deverá fornecer acesso ao local, bem como as condições necessárias para que o serviço seja executado, incluindo informações detalhadas sobre as demandas e eventuais restrições no ambiente de trabalho. O(a) CONTRATADO(a), por sua vez, deverá cumprir com as normas de segurança, manter o local organizado e garantir a qualidade do serviço prestado. Este contrato não inclui serviços adicionais ou ajustes que não estejam expressamente mencionados no escopo acordado. Qualquer alteração ou adição aos serviços deverá ser formalizada por escrito e poderá implicar em revisão de valores e prazos previamente estabelecidos. Ambas as partes comprometem-se a cumprir suas obrigações, visando a entrega do serviço dentro das condições pactuadas e garantindo a satisfação do(a) CONTRATANTE quanto à execução do trabalho.

CLÁUSULA SEGUNDA - DO VALOR E FORMA DE PAGAMENTO
Pela prestação dos serviços, o CONTRATANTE pagará ao CONTRATADO o valor de R$${formData.valor}, conforme as condições abaixo:
[Especificar a forma de pagamento: à vista, parcelado, etc.]

CLÁUSULA TERCEIRA - DO PRAZO
O prazo para a execução dos serviços será de ${formData.prazo} ${formData.prazoUnidade}, com início em ${formatDate(formData.dtInicialPrazo)} e término em ${formatDate(formData.dtFinalPrazo)}. O CONTRATADO compromete-se a cumprir o cronograma estabelecido, salvo casos fortuitos ou de força maior, devidamente comunicados ao CONTRATANTE com antecedência. Eventuais alterações no prazo deverão ser previamente acordadas entre as partes, por meio de aditivo contratual, observando os limites legais e as necessidades específicas do serviço. O não cumprimento do prazo sem justificativa poderá acarretar penalidades previstas neste contrato.

CLÁUSULA QUARTA - DAS OBRIGAÇÕES DAS PARTES 
Do CONTRATANTE:
O CONTRATANTE compromete-se a fornecer todas as informações necessárias para a execução dos serviços contratados, incluindo, mas não se limitando a, dados técnicos, documentos e acesso aos locais onde o serviço será realizado. Além disso, o CONTRATANTE deverá efetuar o pagamento do valor estipulado no prazo acordado, conforme as condições estabelecidas neste contrato. O CONTRATANTE também se responsabiliza por comunicar ao CONTRATADO quaisquer alterações ou necessidades adicionais relacionadas ao serviço contratado, dentro de um tempo hábil para que o CONTRATADO possa tomar as medidas necessárias.

Do CONTRATADO:
O CONTRATADO compromete-se a executar os serviços de acordo com as especificações acordadas, respeitando os prazos estabelecidos e a qualidade exigida. O CONTRATADO deverá utilizar materiais e equipamentos adequados, além de empregar a mão de obra necessária para o bom cumprimento do objeto do contrato. Em caso de impossibilidade de cumprimento do prazo, o CONTRATADO deverá informar o CONTRATANTE com antecedência, propondo uma nova previsão de entrega. O CONTRATADO também se responsabiliza por manter sigilo sobre todas as informações fornecidas pelo CONTRATANTE, bem como por garantir que o serviço seja executado de maneira profissional e conforme as normas técnicas aplicáveis.
`;

  if (formData.clausulasAdicionais && formData.clausulasAdicionais.trim() !== '') {
    texto += `
CLÁUSULA QUINTA - CLÁUSULAS ADICIONAIS 
${formData.clausulasAdicionais}
`;
  }

  texto += `

E por estarem assim justos e contratados, assinam o presente instrumento em duas vias de igual teor e forma.


___________________________________________________________________________
${formData.contratanteNome} - ${formData.contratanteCpfCnpj}


___________________________________________________________________________
${formData.contratadoNome} - ${formData.contratadoCpfCnpj}

${formData.cidade}, ${formData.uf}, ${dataPorExtenso(formData.dataContrato)}.
`;

  return texto;
}

