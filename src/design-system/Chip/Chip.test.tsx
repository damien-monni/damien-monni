import { render, screen } from '@test-utils';
import Chip from './Chip';

test('renders a chip with the text "My chip"', () => {
  render(<Chip>My chip</Chip>);

  screen.getByText('My chip');
});

test('render a chip with the secondary color', () => {
  render(<Chip color="secondary">My chip</Chip>);

  expect(screen.getByText('My chip')).toHaveClass('bg-secondary-main');
});
