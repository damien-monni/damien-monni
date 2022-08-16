import Chip from '../../design-system/Chip/Chip';

export default function HeroIntroText() {
  return (
    <div>
      <div className="flex">
        <h1 className="mb-2">Damien Monni</h1>

        <div>
          <Chip className="relative -top-10 right-6 rotate-12" color="primary">
            Full-stack
          </Chip>
        </div>
      </div>

      <p className="leading-9 text-3xl">
        Développeur web à{' '}
        <strong className="text-secondary-main">Limoges</strong>, et{' '}
        <strong className="text-primary-main">partout ailleurs</strong>.
      </p>
    </div>
  );
}
