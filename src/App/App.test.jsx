import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Season/i);
  expect(linkElement).toBeInTheDocument();
});

test('render element with tables by class name "render"', () => {
  render(<App />);
  const classElement = document.getElementsByClassName('render')[0];
  expect(classElement).toBeInTheDocument();
});
