import { render } from '@testing-library/react';
import SkillChip from './SkillChip';

test('render the SkillChip component', () => {
  render(<SkillChip src="/fake-url.png" />);
});
