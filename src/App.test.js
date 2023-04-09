import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
  render(<App />);
  const title = await screen.findByText(/Lo último buscado/i);
  expect(title).toBeInTheDocument();
});
