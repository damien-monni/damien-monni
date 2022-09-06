import { render, screen } from '@testing-library/react';
import FormSuccess from './FormSuccess';

test('render a success message', () => {
  render(<FormSuccess />);
  screen.getByText(/votre message a correctement été envoyé/i);
});
