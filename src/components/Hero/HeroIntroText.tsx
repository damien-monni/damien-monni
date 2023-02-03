import Chip from '../../design-system/Chip/Chip';
import { Trans } from 'next-i18next';

export default function HeroIntroText() {
  return (
    <div>
      <div className="flex justify-center lg:justify-start">
        <div className="relative">
          <h1 className="text-center lg:mb-2">Damien Monni</h1>

          <div className="absolute -top-10 -right-16">
            <Chip className="rotate-12" color="primary">
              Full-stack
            </Chip>
          </div>
        </div>
      </div>

      <Trans i18nKey={'HeroIntroText.webDeveloper'}>
        <p className="leading-9 text-2xl text-center lg:text-3xl lg:text-left">
          Développeur web à{' '}
          <strong className="text-secondary-main">Limoges</strong>, et{' '}
          <strong className="text-primary-main">partout ailleurs</strong>.
        </p>
      </Trans>
    </div>
  );
}
