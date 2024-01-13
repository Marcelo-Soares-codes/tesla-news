import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonLoadMore } from './index';

describe('ButtonLoadMore Component', () => {
  it('renders ButtonLoadMore correctly', () => {
    const onClickMock = jest.fn();
    const { container } = render(<ButtonLoadMore onClick={onClickMock} disabled={false} />);

    // Verifica se o componente foi renderizado corretamente
    expect(container).toMatchSnapshot();

    // Verifica se o texto do botão está correto
    expect(screen.getByText('Load More')).toBeInTheDocument();

    // Verifica se o botão está habilitado
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');

    // Simula um clique no botão
    fireEvent.click(screen.getByRole('button'));

    // Verifica se a função onClick foi chamada após o clique no botão
    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders ButtonLoadMore correctly when disabled', () => {
    const onClickMock = jest.fn();
    render(<ButtonLoadMore onClick={onClickMock} disabled={true} />);

    // Verifica se o botão está desabilitado
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
