export function formatDate(dateString: Date): string {
  const date = dateString;

  if (isNaN(date.getTime())) {
    throw new Error("Data inválida");
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function dataPorExtenso(date: Date): string {
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

