import MailIcon from '@heroicons/react/24/outline/EnvelopeIcon';
import ArrowDownTrayIcon from '@heroicons/react/24/outline/ArrowDownTrayIcon';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

interface TopbarProps {
  className?: string;
}

export default function Topbar({ className }: TopbarProps) {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <div
      className={clsx(
        'py-2 border-b border-divider bg-white bg-opacity-90 backdrop-blur',
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto px-4 lg:px-2 xl:px-0">
        <p className="flex items-center justify-center underline font-extrabold text-sm my-2 mr-2">
          <span>
            <MailIcon className="w-5 h-5 mr-2" />
          </span>

          <a
            className="whitespace-nowrap"
            href="mailto:contact@damien-monni.com"
          >
            contact@damien-monni.com
          </a>
        </p>

        <p className="my-2 ml-2">
          <a
            href={`/cv-damien-monni-${locale}.pdf`}
            className="whitespace-nowrap inline-flex items-center bg-primary-text text-white px-6 py-2 rounded-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
            </span>
            <span className="text-sm">{t('Topbar.resume')}</span>
          </a>
        </p>
      </div>
    </div>
  );
}
