import { act, render, screen } from '@testing-library/react';
import Legal from './Legal';

// @ts-expect-error
global.IntersectionObserver = class FakeIntersectionObserver {
  observe() {}
  disconnect() {}
};

test('render the Legal component', () => {
  render(<Legal />);
});

test('open the legal drawer', () => {
  render(<Legal />);
  act(() => {
    screen.getByTestId('open-button').click();
  });

  act(() => {
    screen.getByTestId('close-button').click();
  });
});
