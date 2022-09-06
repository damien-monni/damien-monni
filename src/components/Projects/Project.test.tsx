import { render } from '@testing-library/react';
import Project from './Project';

test('render the Project component', () => {
  render(
    <Project
      image={{ src: '/fake-img.png', height: 100, width: 100 }}
      imageAlt=""
      skills={[{ name: 'react', color: 'blue' }]}
      title="Fake title"
      subtitle="Fake subtitle"
    />,
  );
});
