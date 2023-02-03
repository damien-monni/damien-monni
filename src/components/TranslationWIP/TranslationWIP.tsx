import clsx from 'clsx';
import Link from 'next/link';

interface TranslationWIPProps {
  className?: string;
}

export function TranslationWip({ className }: TranslationWIPProps) {
  return (
    <div
      className={clsx(
        'bg-orange-100 bg-opacity-70 text-orange-800 py-2 text-sm text-center',
        className,
      )}
    >
      <p className="my-0">
        The English version of this website is currently a work in progress.
      </p>

      <p className="my-0">
        Download{' '}
        <Link className="underline" href="/cv-damien-monni-en.pdf">
          my resume
        </Link>{' '}
        if you want to know more about me in English!
      </p>
    </div>
  );
}
