import { render, screen } from '@test-utils';
import { LanguageSwitch } from './LanguageSwitch';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';

const user = userEvent.setup();

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    locale: 'en',
    push: jest.fn(),
  })),
}));

test('render the LanguageSwitch component', () => {
  render(<LanguageSwitch />);
});

test('switch language from en to fr', async () => {
  const mockUseRouter = useRouter as jest.Mock;
  const routerPush = jest.fn();
  mockUseRouter.mockReturnValue({ locale: 'en', push: routerPush });

  render(<LanguageSwitch />);
  const button = screen.getByRole('button');
  await user.click(button);

  expect(routerPush).toHaveBeenCalledTimes(1);
  expect(routerPush).toHaveBeenCalledWith(
    { pathname: undefined, query: undefined },
    undefined,
    { locale: 'fr' },
  );
});

test('switch language from fr to en', async () => {
  const mockUseRouter = useRouter as jest.Mock;
  const routerPush = jest.fn();
  mockUseRouter.mockReturnValue({ locale: 'fr', push: routerPush });

  render(<LanguageSwitch />);
  const button = screen.getByRole('button');
  await user.click(button);

  expect(routerPush).toHaveBeenCalledTimes(1);
  expect(routerPush).toHaveBeenCalledWith(
    { pathname: undefined, query: undefined },
    undefined,
    { locale: 'en' },
  );
});
