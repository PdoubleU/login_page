import { fireEvent, render, screen } from '@testing-library/react';
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

test('type incorrect nickname', async () => {
  render(<App />);
  const input = screen.queryByPlaceholderText(/nickname/i);
  fireEvent.change(input, { target: { value: '!!' } });
  fireEvent.click(screen.getByText(/Next/i));

  const result = await screen.findByText(
    /Nickname/i //need to fix this RegExp, findByText doesnt match multiline string in the doc
  );
  expect(result).toBeInTheDocument();
});
