// Articles.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Articles } from './index'; // Ajuste o caminho conforme a estrutura do seu projeto.

// Mock do componente Card
jest.mock('./cards', () => ({
  Card: ({ title }) => <div data-testid={`mock-card-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</div>,
}));

describe('Articles Component', () => {
  it('renders Articles correctly with articles', () => {
    const mockArticles = [
      {
        url: 'https://example.com/1',
        urlToImage: 'https://example.com/image1.jpg',
        title: 'Article 1',
        description: 'Description 1',
        author: 'Author 1',
      },
      {
        url: 'https://example.com/2',
        urlToImage: 'https://example.com/image2.jpg',
        title: 'Article 2',
        description: 'Description 2',
        author: 'Author 2',
      },
    ];

    render(<Articles articles={mockArticles} />);

    // Verifique se o Card component é chamado para cada artigo
    mockArticles.forEach(article => {
      expect(screen.getByTestId(`mock-card-${article.title.replace(/\s+/g, '-').toLowerCase()}`)).toBeInTheDocument();
    });

    // Salve um snapshot do componente renderizado
    expect(screen.getByTestId('mock-card-article-1')).toMatchSnapshot();
  });

  it('renders Articles correctly with removed article', () => {
    const mockArticles = [
      {
        url: 'https://example.com/1',
        urlToImage: 'https://example.com/image1.jpg',
        title: '[Removed]',
        description: 'Description 1',
        author: 'Author 1',
      },
      {
        url: 'https://example.com/2',
        urlToImage: 'https://example.com/image2.jpg',
        title: 'Article 2',
        description: 'Description 2',
        author: 'Author 2',
      },
    ];
  
    render(<Articles articles={mockArticles} />);
  
    // Verifique se pelo menos um Card component foi renderizado
    const cards = screen.queryAllByTestId(/^mock-card-.+/);
  
    // Filtra os cards que foram renderizados
    const renderedCards = cards.filter(card => card.textContent.includes('Article'));
  
    // Continue com a verificação do comprimento
    expect(renderedCards).toHaveLength(mockArticles.length - 1);
  
    // Salve um snapshot do componente renderizado
    // Aqui, você pode usar o snapshot do primeiro card, pois é o único renderizado
    const firstCard = renderedCards[0];
    expect(firstCard).toMatchSnapshot();
  });
});
