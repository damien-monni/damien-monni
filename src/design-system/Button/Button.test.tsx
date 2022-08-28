import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders a button HTML element with "My button" text', () => {
  render(<Button>My button</Button>);

  const button = screen.getByText('My button');
  expect(button).toBeInstanceOf(HTMLButtonElement);
  expect(button).toHaveTextContent('My button');
});
