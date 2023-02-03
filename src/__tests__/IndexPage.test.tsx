import IndexPage, { getStaticProps } from '../pages/index';
import { render } from '../test-utils';

jest.mock('@formspree/react', () => ({
  useForm: () => [{}, jest.fn()],
}));

test('render the IndexPage component', () => {
  render(<IndexPage />);
});

test('getStaticProps should return the correct props', async () => {
  const { props } = await getStaticProps({ locale: 'en' });
  expect(props).toHaveProperty('_nextI18Next');
});
