import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TableRender from './TableRender';

test('render table sceleton for world champions', () => {
  render(<TableRender />);
  const isTable = screen.getAllByRole('table')[0];
  expect(isTable).toBeInTheDocument();
});

it('renders TableRender correctly', () => {
  const tree = renderer
    .create(<TableRender />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
