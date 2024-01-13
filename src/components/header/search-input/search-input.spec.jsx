import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchTitle } from './index';

describe('SearchTitle Component', () => {
  it('renders SearchTitle correctly', () => {
    const handleChangeMock = jest.fn();
    const searchValue = 'Test Search';

    render(<SearchTitle searchValue={searchValue} handleChange={handleChangeMock} />);

    // Verifica se o componente foi renderizado corretamente
    expect(screen.getByTestId('search-title')).toBeInTheDocument();

    // Verifica se a imagem de pesquisa está presente
    expect(screen.getByAltText('Search')).toBeInTheDocument();

    // Verifica se o valor do campo de entrada é o esperado
    expect(screen.getByPlaceholderText('Search')).toHaveValue(searchValue);

    // Simula uma mudança no campo de entrada
    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'New Search' } });

    // Verifica se a função handleChange foi chamada com o novo valor
    expect(handleChangeMock).toHaveBeenCalledWith('New Search');
  });
});
