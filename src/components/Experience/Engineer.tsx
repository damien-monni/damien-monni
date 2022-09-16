import clsx from 'clsx';

interface EngineerProps {
  className?: string;
}

export default function Engineer({ className }: EngineerProps) {
  return (
    <section className={clsx(className)}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-[7] mb-4 md:mb-0 md:order-2 flex justify-center">
          <picture>
            <img
              src="/img/engineer.svg"
              alt="Ingénieur"
              className="w-20 md:w-36"
            />
          </picture>
        </div>

        <div className="flex-[10] md:order-1">
          <h3 className="normal-case font-normal text-xl md:text-2xl mb-10 text-center md:text-left">
            <span className="relative inline-flex">
              <span className="bg-[#DBE7FF] absolute inset-0 md:translate-x-2 md:translate-y-2 -z-10" />
              Une expérience en ingénierie industrielle
            </span>
          </h3>

          <p>
            Auparavant <strong>ingénieur en informatique industrielle</strong>{' '}
            dans la multinationale Schneider Electric, j'ai eu l'opportunité de
            participer à des projets de grande envergure pour des clients
            industriels importants : Airbus, Stade de France, Eurotunnel,
            Lactalis...
          </p>

          <p>
            Cela m’a permis d'acquérir une forte <strong>rigueur</strong> dans
            la <strong>gestion de mes projets</strong> et une vision
            professionnelle des déroulés d'un projet.
          </p>

          <p>
            Grâce à mon expérience, je suis capable d'effectuer des missions de
            développement web mais aussi de gestion de projets et lead technique
            sur les technologies que je maîtrise.
          </p>
        </div>
      </div>
    </section>
  );
}
