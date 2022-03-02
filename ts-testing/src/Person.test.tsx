import { render, screen } from '@testing-library/react';
import App from './App';
//importing the component we're testing
import { Person } from './Person'

test('renders a name', () => {
  render(<Person name='Jack' />);
  const divElement = screen.getByRole('contentinfo');
  expect(divElement).toHaveTextContent('The name is Jack');
  expect(divElement).toHaveAttribute('role', 'contentinfo');
});
