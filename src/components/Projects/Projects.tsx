import clsx from 'clsx';
import KeepBlogging from './KeepBlogging';
import KeepTesting from './KeepTesting';

interface ProjectsProps {
  className?: string;
}

export default function Projects({ className }: ProjectsProps) {
  return (
    <section className={clsx(className)}>
      <h2>Quelques réalisations</h2>

      <KeepBlogging className="my-20" />
      <KeepTesting className="my-20" />
    </section>
  );
}
