import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './index';

describe('Header Component', () => {
  it('renders Header correctly', () => {
    const handleChangeMock = jest.fn();
    const searchValue = 'Test Search';

    render(<Header searchValue={searchValue} handleChange={handleChangeMock} />);

    // Verifica se o componente foi renderizado corretamente
    expect(screen.getByTestId('header')).toBeInTheDocument();

    // Verifica se o título está presente
    expect(screen.getByText('TeslaNews')).toBeInTheDocument();

    // Verifica se o componente SearchTitle está presente
    expect(screen.getByTestId('search-title')).toBeInTheDocument();

    // Verifica se os links da barra de navegação estão presentes
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Tesla')).toBeInTheDocument();
  });
});
