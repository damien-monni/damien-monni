import clsx from 'clsx';

interface HeroExperienceProps {
  className?: string;
}

// We use a fixed width for the year number so we can align the text with
// the year number on both paragraph while keeping it good from a SEO perspective.

export default function HeroExperience({ className }: HeroExperienceProps) {
  return (
    <div className={clsx(className)}>
      <p className="flex items-center mb-4 sm:mb-8">
        <span className="text-primary-main text-4xl w-20 font-extrabold text-center sm:text-6xl sm:w-32">
          10
        </span>
        <span className="inline-flex max-w-[250px]">
          ans d’expérience dans le développement et l'ingénierie
        </span>
      </p>

      <p className="flex items-center">
        <span className="text-secondary-main text-4xl w-20 font-extrabold text-center sm:text-6xl sm:w-32">
          5
        </span>
        <span className="inline-flex max-w-[250px]">
          années en tant qu’indépendant au service de vos projets web
        </span>
      </p>
    </div>
  );
}
