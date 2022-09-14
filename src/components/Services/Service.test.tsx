import { render } from '@testing-library/react';
import Service from './Service';

test('render the Service component', () => {
  render(<Service title="Test service" />);
});
