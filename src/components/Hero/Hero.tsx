import clsx from 'clsx';
import Button from '../../design-system/Button/Button';
import HeroExperience from './HeroExperience';
import HeroIntroText from './HeroIntroText';
import MePicture from './MePicture';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={clsx('lg:flex', className)}>
      {/* Left side of the Hero */}
      <div className="flex flex-col items-center lg:items-start lg:flex-1 lg:mb-28">
        <HeroIntroText />

        <div className="my-4 lg:my-10">
          <Button color="secondary" size="large">
            Contactez-moi
          </Button>
        </div>

        <HeroExperience className="lg:-ml-8" />
      </div>

      {/* Right side of the Hero */}
      <div className="lg:flex-1 lg:relative">
        <MePicture className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0" />
      </div>
    </section>
  );
}
