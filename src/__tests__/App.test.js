import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders form', () => {
  render(<App />);
  const label = screen.getByLabelText(/Type your nickname/i);
  expect(label).toBeInTheDocument();
});

test('renders button next', () => {
  render(<App />);
  const button = screen.getByText(/Next/i);
  expect(button).toBeInTheDocument();
});

test('next button switch to next section', async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Next/i));
  const label = await screen.findByLabelText(/Your card's number/i);
  expect(label).toBeInTheDocument();
});

test('type nickname in the input', async () => {
  render(<App />);
  const input = screen.queryByPlaceholderText(/nickname/i);
  fireEvent.change(input, { target: { value: 'JeżJerzy' } });
  expect(input.value).toBe('JeżJerzy');
});
