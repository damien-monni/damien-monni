import clsx from 'clsx';
import HeroText from './HeroText';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={clsx('flex', className)}>
      <div className="flex-1">
        <HeroText />
      </div>

      <div className="flex-1"></div>
    </section>
  );
}
