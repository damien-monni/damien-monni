import clsx from 'clsx';

interface EngineerProps {
  className?: string;
}

export default function Engineer({ className }: EngineerProps) {
  return (
    <section className={clsx(className)}>
      <div className="flex items-center">
        <div className="flex-[10]">
          <h3 className="normal-case font-normal text-2xl mb-10">
            <span className="relative inline-flex">
              <span className="bg-[#DBE7FF] absolute inset-0 translate-x-2 translate-y-2 -z-10" />
              Une expérience en ingénieurie industrielle
            </span>
          </h3>

          <p>
            Auparavant <strong>ingénieur en informatique industrielle</strong>{' '}
            dans la multinationale Schneider Electric, j'ai eu l'opportunité de
            participer à des projets de grosses envergures pour des clients
            industriels importants : Airbus, Stade de France, Eurotunnel,
            Lactalis...
          </p>

          <p>
            Cela m’a permis d'acquérir une forte <strong>rigueur</strong> dans
            la <strong>gestion de mes projets</strong> et une vision
            professionnelle des deroulés d'un projet.
          </p>

          <p>
            Grâce à mon expérience je suis capable d'effectuer des missions de
            développement web mais aussi de gestion de projets et lead technique
            sur les technologies que je maitrise.
          </p>
        </div>

        <div className="flex-[7] flex justify-center">
          <picture>
            <img src="/img/engineer.svg" alt="Ingénieur" className="w-36" />
          </picture>
        </div>
      </div>
    </section>
  );
}
