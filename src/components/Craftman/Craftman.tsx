import clsx from 'clsx';
import { Trans, useTranslation } from 'next-i18next';
interface CraftmanProps {
  className?: string;
}

export default function Craftman({ className }: CraftmanProps) {
  const { t } = useTranslation();

  return (
    <section
      className={clsx(
        'bg-black text-white px-10 py-16 lg:px-20 lg:py-40 text-center',
        className,
      )}
    >
      <h2>{t('Craftman.title')}</h2>

      <div className="max-w-2xl mx-auto">
        <p className="text-lg lg:text-xl mt-8 mb-6 lg:mt-16 lg:mb-10">
          {t('Craftman.passionate')}
        </p>

        <p className="text-lg lg:text-xl">
          <Trans i18nKey="Craftman.details">
            J’adhère entièrement à la philosophie du{' '}
            <strong>Software Craftsmanship</strong>, afin de vous livrer un
            travail sur lequel vous pourrez évoluer en toute sérénité pour la
            suite de votre projet.
          </Trans>
        </p>
      </div>
    </section>
  );
}
