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
    <section className={clsx('flex', className)}>
      {/* Left side of the Hero */}
      <div className="flex-1 mb-28">
        <HeroIntroText />

        <div className="my-14">
          <Button color="secondary" size="large">
            Contactez-moi
          </Button>
        </div>

        <HeroExperience className="-ml-8" />
      </div>

      {/* Right side of the Hero */}
      <div className="flex-1 relative">
        <MePicture className="absolute bottom-0 left-0 right-0" />
      </div>
    </section>
  );
}
