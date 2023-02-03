import { render } from '@test-utils';
import Service from './Service';

test('render the Service component', () => {
  render(<Service title="Test service" />);
});
