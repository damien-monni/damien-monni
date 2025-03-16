import { useTranslation } from 'next-i18next';

export default function HeroIntroText() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-center lg:justify-start">
        <h1 className="text-center lg:mb-2">Damien Monni</h1>
      </div>

      <p className="leading-9 text-2xl text-center lg:text-3xl lg:text-left">
        <strong className="text-secondary-main">CTO</strong> /{' '}
        <strong className="text-primary-main">Tech Lead</strong> <br />
        <span className="text-xl">{t('HeroIntroText.webDeveloper')}</span>
      </p>
    </div>
  );
}
