import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

interface ResumeButtonProps {
  className?: string;
  locale: string;
}

export function ResumeButton({ className, locale }: ResumeButtonProps) {
  const { t } = useTranslation();

  return (
    <p className={clsx(className)}>
      <a
        href={`/cv-damien-monni-${locale}.pdf`}
        className="whitespace-nowrap inline-flex items-center bg-primary-text text-white px-6 py-2 rounded-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
        </span>
        <span className="text-sm">{t('ResumtButton.resume')}</span>
      </a>
    </p>
  );
}
