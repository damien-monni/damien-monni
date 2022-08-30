import { render, screen } from '@testing-library/react';
import TextField from './TextField';

test('render an input element by default', () => {
  render(<TextField label="Label" />);

  expect(screen.getByLabelText(/label/i)).toBeInstanceOf(HTMLInputElement);
});

test('render a textarea if the "multiline" prop is provided', () => {
  render(<TextField label="Label" multiline />);

  expect(screen.getByLabelText(/label/i)).toBeInstanceOf(HTMLTextAreaElement);
});

test('render a "My label" label', () => {
  render(<TextField label="My label" />);

  expect(screen.getByLabelText(/my label/i));
});
