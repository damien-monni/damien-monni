import Chip, { ChipProps } from '../../design-system/Chip/Chip';

export type SkillName = 'React' | 'Graph QL' | 'AWS';

interface SkillProps {
  name: SkillName;
}

const nameColorMap: { [name: string]: ChipProps['color'] } = {
  React: 'orange',
  'Graph QL': 'purple',
  AWS: 'blue',
};

export default function Skill({ name }: SkillProps) {
  return (
    <Chip color={nameColorMap[name]} className="mr-2" textNormal>
      {name}
    </Chip>
  );
}
