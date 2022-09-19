import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders a button HTML element', () => {
  render(<Button>My button</Button>);

  const button = screen.getByRole('button');
  expect(button).toBeInstanceOf(HTMLButtonElement);
});

test('renders a button with the primary color', () => {
  render(<Button color="primary">My button</Button>);
  expect(screen.getByRole('button')).toHaveClass('bg-primary-main');
});

test('renders a button with the secondary color', () => {
  render(<Button color="secondary">My button</Button>);
  expect(screen.getByRole('button')).toHaveClass('bg-secondary-main');
});

test('renders a button with a small size', () => {
  render(<Button size="small">My button</Button>);
  expect(screen.getByText('My button')).toHaveClass('px-6 py-2');
});

test('renders a button with a large size', () => {
  render(<Button size="large">My button</Button>);
  expect(screen.getByText('My button')).toHaveClass('px-8 py-4');
});

test('renders a button with an icon', () => {
  render(
    <Button icon={<ArrowDownTrayIcon data-testid="button-icon" />}>
      My button
    </Button>,
  );
  expect(screen.getByTestId('button-icon')).toBeInTheDocument();
});

test('render a loader instead of the button text if loading', () => {
  render(<Button loading>My button</Button>);
  expect(screen.getByText('My button')).toHaveClass('opacity-0');
  expect(screen.getByText('My button')).not.toHaveClass('opacity-1');
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});

test('button is disabled when loading', () => {
  render(<Button loading>My button</Button>);
  expect(screen.getByRole('button')).toBeDisabled();
});
