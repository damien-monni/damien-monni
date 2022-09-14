import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export interface ChipProps {
  /**
   * Class name to add custom styles to the button.
   */
  className?: string;

  /**
   * Color of the button based on the theme.
   */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'orange'
    | 'blue'
    | 'purple'
    | 'green'
    | 'amber'
    | 'violet'
    | 'rose';

  textNormal?: boolean;
}

export default function Chip({
  className,
  color = 'default',
  textNormal = false,
  children,
}: PropsWithChildren<ChipProps>) {
  return (
    <div className={clsx('flex', className)}>
      <p
        className={clsx(
          'text-xs rounded-full px-3 py-1.5 mt-0 mb-0 whitespace-nowrap',
          textNormal ? '' : 'uppercase',
          color === 'primary'
            ? 'bg-primary-main text-primary-contrastText'
            : color === 'secondary'
            ? 'bg-secondary-main text-secondary-contrastText'
            : color === 'orange'
            ? 'bg-orange-500 text-white'
            : color === 'blue'
            ? 'bg-blue-500 text-white'
            : color === 'purple'
            ? 'bg-purple-500 text-white'
            : color === 'green'
            ? 'bg-green-600 text-white'
            : color === 'amber'
            ? 'bg-amber-500 text-white'
            : color === 'rose'
            ? 'bg-rose-500 text-white'
            : color === 'violet'
            ? 'bg-violet-500 text-white'
            : 'bg-primary-text text-white',
        )}
      >
        {children}
      </p>
    </div>
  );
}
