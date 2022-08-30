import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders a button HTML element', () => {
  render(<Button>My button</Button>);

  const button = screen.getByText('My button');
  expect(button).toBeInstanceOf(HTMLButtonElement);
});

test('renders a button with the text "My button"', () => {
  render(<Button>My button</Button>);

  screen.getByText('My button');
});
