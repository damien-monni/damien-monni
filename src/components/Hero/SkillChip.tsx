import clsx from 'clsx';

interface SkillChipProps {
  className?: string;
  classes?: {
    img?: string;
  };
  src: string;
}

export default function SkillChip({ className, classes, src }: SkillChipProps) {
  return (
    <div
      className={clsx(
        'w-16 h-16 p-3 bg-white shadow-2xl rounded-full flex-shrink-0 flex items-center justify-center z-20',
        className,
      )}
    >
      <picture>
        <img
          className={clsx('w-full h-full', classes?.img)}
          src={src}
          alt="React icon"
        />
      </picture>
    </div>
  );
}
