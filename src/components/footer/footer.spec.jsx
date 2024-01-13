import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './index';

describe('Footer Component', () => {
  it('renders Footer correctly', () => {
    render(<Footer />);

    // Verifica se o componente foi renderizado corretamente
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    // Verifica se o texto está presente no componente
    expect(screen.getByText('Produced by Marcelo Soares')).toBeInTheDocument();

    // Verifica se o link do GitHub está presente no componente
    expect(screen.getByRole('link', { name: /marcelo-soares-codes/i })).toBeInTheDocument();

    // Verifica se a imagem do GitHub está presente no componente
    expect(screen.getByAltText('@Marcelo-Soares-codes')).toBeInTheDocument();
  });
});
