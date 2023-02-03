import { render, screen } from '@test-utils';
import { useRouter } from 'next/router';
import Topbar from './Topbar';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    locale: 'en',
  })),
}));

test('render the Topbar component', () => {
  render(<Topbar />);
});

test('show a WIP warning message if the locale is english', async () => {
  const mockUseRouter = useRouter as jest.Mock;
  const routerPush = jest.fn();
  mockUseRouter.mockReturnValue({ locale: 'en', push: routerPush });

  render(<Topbar />);

  expect(
    screen.getByText(
      /The English version of this website is currently a work in progress/,
    ),
  ).toBeInTheDocument();
});

test('Do not show a WIP warning message if the locale is french', () => {
  const mockUseRouter = useRouter as jest.Mock;
  const routerPush = jest.fn();
  mockUseRouter.mockReturnValue({ locale: 'fr', push: routerPush });

  render(<Topbar />);

  expect(
    screen.queryByText(
      /The English version of this website is currently a work in progress/,
    ),
  ).not.toBeInTheDocument();
});

test('Handle undefined locale returned by useRouter', () => {
  const mockUseRouter = useRouter as jest.Mock;
  const routerPush = jest.fn();
  mockUseRouter.mockReturnValue({ locale: undefined, push: routerPush });

  render(<Topbar />);
});
