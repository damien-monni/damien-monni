import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import { axe } from 'jest-axe';

test('The form renders an input of type email', () => {
  render(<ContactForm />);
  const emailInput = screen.getByLabelText(/votre e-mail :/i);
  expect(emailInput).toHaveAttribute('type', 'email');
});

test('The form renders a textarea for the message', () => {
  render(<ContactForm />);
  const messageTextarea = screen.getByLabelText(/votre message :/i);
  expect(messageTextarea).toBeInstanceOf(HTMLTextAreaElement);
});

test('The form as a submit button', () => {
  render(<ContactForm />);
  const submitButton = screen.getByRole('button', { name: /envoyer/i });
  expect(submitButton).toBeInstanceOf(HTMLButtonElement);
});

test('The contact form is accessible', async () => {
  const { container } = render(<ContactForm />);
  const result = await axe(container);
  expect(result).toHaveNoViolations();
});
