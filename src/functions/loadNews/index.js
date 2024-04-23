export async function loadNews() {
  try {
    const yesterday = new Date(); // Obter a data atual
    yesterday.setDate(yesterday.getDate() - 1); // Subtrair um dia

    const formattedDate = formatDate(yesterday); // Formatar a data no formato YYYY-MM-DD

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=${formattedDate}&sortBy=publishedAt&apiKey=ced886074df34a5cb7a1be2ac4e691fa`
    );
    const data = await response.json();

    if (data.articles) {
      return data.articles;
    } else {
      console.log("Nenhum artigo encontrado");
      return []; // Retorna um array vazio se nenhum artigo for encontrado
    }
  } catch (error) {
    console.error("Ocorreu um erro:", error.message);
    throw error; // Propaga o erro para que seja tratado externamente, se necessário
  }
}

// Função para formatar a data no formato YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
