export async function loadNews() {
  try {
    const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-12-13&sortBy=publishedAt&apiKey=ced886074df34a5cb7a1be2ac4e691fa");
    const data = await response.json();

    if (data.articles) {
      return data.articles;
    } else {
      console.log('Nenhum artigo encontrado');
      return []; // Retorna um array vazio se nenhum artigo for encontrado
    }
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
    throw error; // Propaga o erro para que seja tratado externamente, se necessário
  }
}