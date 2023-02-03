import { render, screen } from '@test-utils';
import userEvent from '@testing-library/user-event';
import Drawer from './Drawer';

// @ts-expect-error
global.IntersectionObserver = class FakeIntersectionObserver {
  observe() {}
  disconnect() {}
};

test('A click on the close button closes the Drawer', async () => {
  const user = userEvent.setup();

  const onClose = jest.fn();
  render(<Drawer title="My title" open onClose={onClose} />);

  const closeButton = screen.getByTestId('close-button');
  await user.click(closeButton);

  expect(onClose).toHaveBeenCalledTimes(1);
});

test('The title renders in the drawer', () => {
  render(<Drawer open title="My title" onClose={jest.fn()} />);
  expect(screen.getByText('My title')).toBeInTheDocument();
});

test('The content renders in the drawer', () => {
  render(
    <Drawer open title="My title" onClose={jest.fn()}>
      <p>Body of the drawer</p>
    </Drawer>,
  );
  expect(screen.getByText('Body of the drawer')).toBeInTheDocument();
});
