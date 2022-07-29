import MailIcon from '@heroicons/react/outline/MailIcon';
import clsx from 'clsx';

interface TopbarProps {
  className?: string;
}

export default function Topbar({ className }: TopbarProps) {
  return (
    <div
      className={clsx(
        'py-2 border-b border-divider bg-white bg-opacity-90 backdrop-blur',
        className,
      )}
    >
      <p className="flex items-center justify-center underline font-bold text-sm">
        <span>
          <MailIcon className="w-5 h-5 mr-2" />
        </span>

        <a href="mailto:contact@damien-monni.com">contact@damien-monni.com</a>
      </p>
    </div>
  );
}
