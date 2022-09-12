import { PropsWithChildren, useMemo } from 'react';
import clsx from 'clsx';
import Loader from '../Loader/Loader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Color of the button based on the theme.
   */
  color?: 'default' | 'primary' | 'secondary';

  /**
   * Size of the button
   */
  size?: 'normal' | 'large';

  /**
   * Loading state of the button
   * If true, a loader will show instead of the button children
   */
  loading?: boolean;
}

export default function Button({
  color = 'default',
  size = 'normal',
  loading = false,
  children,
  disabled = false,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const isDisabled = useMemo(() => {
    return loading || disabled;
  }, [loading, disabled]);

  return (
    <button
      className={clsx(
        'rounded-sm inline-flex justify-center items-center',
        color === 'primary'
          ? 'bg-primary-main text-primary-contrastText'
          : color === 'secondary'
          ? 'bg-secondary-main text-secondary-contrastText'
          : 'bg-primary-text text-white',
        isDisabled && 'opacity-50',
      )}
      disabled={isDisabled}
      {...rest}
    >
      <span
        className={clsx(
          'inline-flex text-sm uppercase',
          size === 'normal' ? 'px-10 py-3' : 'px-8 py-4',
          loading && 'opacity-0',
        )}
      >
        {children}
      </span>

      {loading ? (
        <span className="absolute">
          <Loader />
        </span>
      ) : null}
    </button>
  );
}
