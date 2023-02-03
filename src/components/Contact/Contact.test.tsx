import { render, screen } from '@test-utils';
import Contact from './Contact';

jest.mock('@formspree/react', () => ({
  useForm: () => [{}, jest.fn()],
}));

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
