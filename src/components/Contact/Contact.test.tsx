import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders a direct email link', () => {
  render(<Contact />);
  const emailLink = screen.getByRole('link', {
    name: /contact@damien-monni.com/i,
  });
  expect(emailLink).toHaveAttribute('href', 'mailto:contact@damien-monni.com');
});

test('renders a contact form', () => {
  render(<Contact />);
  const contactForm = screen.getByRole('form');
  expect(contactForm).toBeInTheDocument();
});
