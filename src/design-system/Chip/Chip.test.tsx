import { render, screen } from '@testing-library/react';
import Chip from './Chip';

test('renders a button with the text "My button"', () => {
  render(<Chip>My chip</Chip>);

  screen.getByText('My chip');
});
