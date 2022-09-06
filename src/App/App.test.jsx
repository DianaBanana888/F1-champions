import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render champions table and check if there is a header "Season"', () => {
  render(<App />);
  const linkElement = screen.getByText(/Season/i);
  expect(linkElement).toBeInTheDocument();
});
