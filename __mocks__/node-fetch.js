module.exports = jest.fn().mockImplementation(() => ({
  json: async () => ({
    articles: [
      { id: 1, title: 'Article 1' },
      { id: 2, title: 'Article 2' },
      // Adicione mais artigos conforme necessário
    ],
  }),
}));
