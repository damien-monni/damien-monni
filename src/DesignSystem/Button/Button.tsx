import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Color of the button based on the theme.
   */
  color?: 'default' | 'primary' | 'secondary';

  /**
   * Size of the button
   */
  size?: 'normal' | 'large';
}

export default function Button({
  color = 'default',
  size = 'normal',
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={clsx(
        'text-sm rounded-sm',
        'uppercase',
        color === 'primary'
          ? 'bg-primary-main text-primary-contrastText'
          : color === 'secondary'
          ? 'bg-secondary-main text-secondary-contrastText'
          : 'bg-primary-text text-white',
        size === 'normal' ? 'px-10 py-2' : 'px-8 py-4',
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
