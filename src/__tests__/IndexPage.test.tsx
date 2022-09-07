import { render } from '@testing-library/react';
import IndexPage from '../pages/index';

jest.mock('@formspree/react', () => ({
  useForm: () => [{}, jest.fn()],
}));

test('render the IndexPage component', () => {
  render(<IndexPage />);
});
