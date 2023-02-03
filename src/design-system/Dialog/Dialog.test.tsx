import { render, screen } from '@test-utils';
import userEvent from '@testing-library/user-event';
import SystemDialog from './Dialog';

// @ts-expect-error
global.IntersectionObserver = class FakeIntersectionObserver {
  observe() {}
  disconnect() {}
};

test('A click on the close button closes the Dialog', async () => {
  const user = userEvent.setup();

  const onClose = jest.fn();
  render(<SystemDialog title="My title" open onClose={onClose} />);

  const closeButton = screen.getByText(/fermer/i);
  await user.click(closeButton);

  expect(onClose).toHaveBeenCalledTimes(1);
});

test('The title renders in the dialog', () => {
  render(<SystemDialog open title="My title" onClose={jest.fn()} />);
  expect(screen.getByText('My title')).toBeInTheDocument();
});
