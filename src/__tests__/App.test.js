import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Email address/i);
  expect(linkElement).toBeInTheDocument();
});
