import { render, screen } from '@testing-library/react';
import App from './App';

test('renders then login form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});
