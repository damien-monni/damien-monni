import clsx from 'clsx';
import { useRouter } from 'next/router';
import { TranslationWip } from '../TranslationWIP/TranslationWIP';
import { ResumeButton } from './ResumeButton';
import { TopbarEmail } from './TopbarEmail';

interface TopbarProps {
  className?: string;
}

export default function Topbar({ className }: TopbarProps) {
  const { locale } = useRouter();

  const isEnglish = locale === 'en';

  return (
    <div
      className={clsx(
        'py-2 border-b border-divider bg-white bg-opacity-90 backdrop-blur',
        isEnglish && 'pt-0',
        className,
      )}
    >
      {isEnglish ? <TranslationWip className="mb-2" /> : null}

      <div
        className={clsx(
          'flex flex-col items-center justify-between max-w-6xl mx-auto px-4',
          'sm:flex-row',
          'lg:px-2',
          'xl:px-0',
        )}
      >
        <TopbarEmail className="my-2 mr-2" />

        <ResumeButton className="my-2 ml-2" locale={locale || 'en'} />
      </div>
    </div>
  );
}
