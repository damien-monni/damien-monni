import MailIcon from '@heroicons/react/24/outline/EnvelopeIcon';
import clsx from 'clsx';

interface TopbarEmailProps {
  className?: string;
}

export function TopbarEmail({ className }: TopbarEmailProps) {
  return (
    <p
      className={clsx(
        'flex items-center justify-center underline font-extrabold text-sm',
        className,
      )}
    >
      <span>
        <MailIcon className="w-5 h-5 mr-2" />
      </span>

      <a className="whitespace-nowrap" href="mailto:contact@damien-monni.com">
        contact@damien-monni.com
      </a>
    </p>
  );
}
