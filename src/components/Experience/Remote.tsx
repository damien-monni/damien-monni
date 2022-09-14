import clsx from 'clsx';

interface RemoteProps {
  className?: string;
}

export default function Remote({ className }: RemoteProps) {
  return (
    <section className={clsx(className)}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-[7] mb-4 md:mb-0 flex justify-center">
          <picture>
            <img src="/img/remote.svg" alt="Design" className="w-20 md:w-36" />
          </picture>
        </div>

        <div className="flex-[10]">
          <h3 className="normal-case font-normal text-xl md:text-2xl mb-10 text-center md:text-left">
            <span className="relative inline-flex">
              <span className="bg-[#DBE7FF] absolute inset-0 md:translate-x-2 md:translate-y-2 -z-10" />
              Exploiter le télé-travail pour une performance accrue
            </span>
          </h3>

          <p>
            Aujourd'hui, je privilégie les projets web effectués majoritairement
            en télétravail qui permettent à mon sens un fort gain en
            productivité grâce à une gestion du temps et organisation
            personnelle optimisée, autonome et productive.
          </p>

          <p>
            J’accepte tout de même des déplacements occasionnels parfois
            nécessaires à la bonne réalisation d’un projet.
          </p>
        </div>
      </div>
    </section>
  );
}
