import clsx from 'clsx';

export default function Loader({}) {
  return (
    <div
      className={clsx(
        'border-2 border-primary-text',
        'border-t-2 border-t-white',
        'w-6 h-6 rounded-full',
        'animate-spin',
      )}
      data-testid="loader"
    />
  );
}
