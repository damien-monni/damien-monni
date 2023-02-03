import { render } from '@test-utils';
import SkillChip from './SkillChip';

test('render the SkillChip component', () => {
  render(<SkillChip src="/fake-url.png" />);
});
