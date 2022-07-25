import clsx from 'clsx';
import Button from '../../DesignSystem/Button/Button';
import HeroExperience from './HeroExperience';
import HeroIntroText from './HeroIntroText';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={clsx('flex', className)}>
      <div className="flex-1">
        <HeroIntroText />

        <div className="my-14">
          <Button color="secondary" size="large">
            Contactez-moi
          </Button>
        </div>

        <HeroExperience className="-ml-8" />
      </div>

      <div className="flex-1"></div>
    </section>
  );
}
