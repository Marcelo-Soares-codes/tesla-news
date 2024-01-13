// Card.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './index';

// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, 'open', { value: mockOpen });

describe('Card Component', () => {
  it('renders Card correctly', () => {
    const mockData = {
      url: 'https://example.com',
      urlToImage: 'https://example.com/image.jpg',
      title: 'Card Title',
      description: 'Card Description',
      author: 'Card Author',
    };

    render(<Card {...mockData} />);

    // Check if elements are present in the DOM
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Author: Card Author')).toBeInTheDocument();

    const imgElement = screen.getByAltText('Card Title');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://example.com/image.jpg');

    // Save a snapshot of the rendered component
    expect(screen.getByText('Card Title')).toMatchSnapshot();
  });

  it('clicking on Card opens the URL in a new tab', () => {
    const mockData = {
      url: 'https://example.com',
      urlToImage: 'https://example.com/image.jpg',
      title: 'Card Title',
      description: 'Card Description',
      author: 'Card Author',
    };

    render(<Card {...mockData} />);

    // Simulate a click on the Card component
    fireEvent.click(screen.getByText('Card Title'));

    // Check if the window.open function was called with the correct URL
    expect(mockOpen).toHaveBeenCalledWith('https://example.com', '_blank');

    // Save a snapshot of the rendered component after the click
    expect(screen.getByText('Card Title')).toMatchSnapshot();
  });
});
