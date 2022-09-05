import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TableRender from './TableRender';

test('render table for future information', () => {
  render(<TableRender />);
  const isTable = document.getElementsByTagName('table')[0];
  expect(isTable).toBeInTheDocument();
});

it('renders TableRender correctly', () => {
  const tree = renderer
    .create(<TableRender />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
