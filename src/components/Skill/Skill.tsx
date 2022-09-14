import Chip, { ChipProps } from '../../design-system/Chip/Chip';

export type SkillName =
  | 'React'
  | 'Graph QL'
  | 'AWS'
  | 'Node.js'
  | 'PostgreSQL'
  | 'MongoDB'
  | 'DynamoDB'
  | 'Typescript';

interface SkillProps {
  name: SkillName;
  className?: string;
}

const nameColorMap: { [name: string]: ChipProps['color'] } = {
  React: 'orange',
  'Graph QL': 'purple',
  AWS: 'amber',
  'Node.js': 'green',
  PostgreSQL: 'blue',
  MongoDB: 'secondary',
  DynamoDB: 'rose',
  Typescript: 'violet',
};

export default function Skill({ name, className }: SkillProps) {
  return (
    <Chip color={nameColorMap[name]} className={className} textNormal>
      {name}
    </Chip>
  );
}
