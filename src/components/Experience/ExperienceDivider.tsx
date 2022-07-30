import clsx from 'clsx';

interface ExperienceDividerProps {
  className?: string;
}

export default function ExperienceDivider({
  className,
}: ExperienceDividerProps) {
  return (
    <picture className={clsx('flex w-full max-w-xl mx-auto', className)}>
      <img src="/img/experience-divider.svg" alt="" />
    </picture>
  );
}
