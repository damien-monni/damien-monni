import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  /**
   * Class name to add custom styles to the button.
   */
  className?: string;

  /**
   * Color of the button based on the theme.
   */
  color?: 'default' | 'primary' | 'secondary';
}

export default function Chip({
  className,
  color = 'default',
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <div className={clsx('flex', className)}>
      <p
        className={clsx(
          'text-xs uppercase rounded-full px-3 py-1.5 whitespace-nowrap',
          color === 'primary'
            ? 'bg-primary-main text-primary-contrastText'
            : color === 'secondary'
            ? 'bg-secondary-main text-secondary-contrastText'
            : 'bg-primary-text text-white',
        )}
      >
        {children}
      </p>
    </div>
  );
}
