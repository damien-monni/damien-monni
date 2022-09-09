import clsx from 'clsx';
import Design from './Design';
import Engineer from './Engineer';
import ExperienceDivider from './ExperienceDivider';
import Remote from './Remote';

interface ExperiencesProps {
  className?: string;
}

export default function Experiences({ className }: ExperiencesProps) {
  return (
    <section className={clsx(className)}>
      <h2 className="text-center md:text-left mb-20">
        Une vision{' '}
        <em className="not-italic bg-primary-main text-primary-contrastText px-2 drop-shadow-[8px_8px_0_#DBE7FF]">
          professionnelle
        </em>
      </h2>

      <Engineer />

      <ExperienceDivider className="hidden my-14 md:block" />

      <Remote className="my-12 md:my-0" />

      <ExperienceDivider className="hidden my-14 -scale-x-100 md:block" />

      <Design />
    </section>
  );
}
