import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

interface HeroExperienceProps {
  className?: string;
}

// We use a fixed width for the year number so we can align the text with
// the year number on both paragraph while keeping it good from a SEO perspective.

export default function HeroExperience({ className }: HeroExperienceProps) {
  const { t } = useTranslation();

  return (
    <div className={clsx(className)}>
      <p className="flex items-center mb-4 sm:mb-8">
        <span className="text-primary-main text-4xl w-20 font-extrabold text-center sm:text-6xl sm:w-32">
          14
        </span>
        <span className="inline-flex max-w-[250px]">
          {t('HeroExperience.devAndEngeneering')}
        </span>
      </p>

      <p className="flex items-center">
        <span className="text-secondary-main text-4xl w-20 font-extrabold text-center sm:text-6xl sm:w-32">
          8
        </span>
        <span className="inline-flex max-w-[250px]">
          {t('HeroExperience.independant')}
        </span>
      </p>
    </div>
  );
}
