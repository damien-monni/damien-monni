import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { useForm } from '@formspree/react';

const user = userEvent.setup();

jest.mock('@formspree/react', () => ({
  useForm: jest.fn(() => [{}, jest.fn()]),
}));

// @ts-expect-error
global.IntersectionObserver = class FakeIntersectionObserver {
  observe() {}
  disconnect() {}
};

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

test('The submit button is disabled when submitting the form', () => {
  const mockUseForm = useForm as jest.Mock;
  mockUseForm.mockReturnValue([{ submitting: true }, jest.fn()]);

  render(<ContactForm />);

  expect(screen.getByRole('button', { name: /envoyer/i })).toBeDisabled();
});

test('The contact form is accessible', async () => {
  const { container } = render(<ContactForm />);
  const result = await axe(container);
  expect(result).toHaveNoViolations();
});

test('Request the Formspree API on submit', async () => {
  const mockUseForm = useForm as jest.Mock;
  const formspreeSubmit = jest.fn();
  mockUseForm.mockReturnValue([{}, formspreeSubmit]);

  render(<ContactForm />);

  const email = screen.getByLabelText(/votre e-mail :/i);
  const message = screen.getByLabelText(/votre message :/i);
  const submitButton = screen.getByRole('button', { name: /envoyer/i });

  await user.type(email, 'email@domain.com');
  await user.type(message, 'message');
  await user.click(submitButton);

  expect(formspreeSubmit).toHaveBeenCalledTimes(1);
});

test('Show a success message if succeeded state is true', async () => {
  render(<ContactForm />);
  const email = screen.getByLabelText(/votre e-mail :/i);
  const message = screen.getByLabelText(/votre message :/i);
  const submitButton = screen.getByRole('button', { name: /envoyer/i });

  await user.type(email, 'email@domain.com');
  await user.type(message, 'message');
  await user.click(submitButton);

  expect(
    screen.getByText(/votre message a correctement été envoyé./i),
  ).toBeInTheDocument();

  const dialogCloseButton = screen.getByText(/fermer/i);
  await user.click(dialogCloseButton);

  expect(
    screen.queryByText(/votre message a correctement été envoyé./i),
  ).not.toBeInTheDocument();
});

test('reset the form after success', async () => {
  render(<ContactForm />);
  const email = screen.getByLabelText(/votre e-mail :/i);
  const message = screen.getByLabelText(/votre message :/i);
  const submitButton = screen.getByRole('button', { name: /envoyer/i });

  await user.type(email, 'email@domain.com');
  await user.type(message, 'message');
  await user.click(submitButton);

  expect(email).toHaveValue('');
  expect(message).toHaveValue('');
});
