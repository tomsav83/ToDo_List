import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the heading', () => {
  render(<App />);
  const element = screen.getByText(/Toms Todo List/i);
  expect(element).toBeInTheDocument();
});
