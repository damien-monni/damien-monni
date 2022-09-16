import clsx from 'clsx';

interface DesignProps {
  className?: string;
}

export default function Design({ className }: DesignProps) {
  return (
    <section className={clsx(className)}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-[7] mb-4 md:mb-0 md:order-2 flex justify-center">
          <picture>
            <img src="/img/design.svg" alt="Design" className="w-20 md:w-36" />
          </picture>
        </div>

        <div className="flex-[10] md:order-1">
          <h3 className="normal-case font-normal text-xl md:text-2xl mb-10 text-center md:text-left">
            <span className="relative inline-flex">
              <span className="bg-[#DBE7FF] absolute inset-0 md:translate-x-2 md:translate-y-2 -z-10" />
              Un attrait pour le graphisme
            </span>
          </h3>

          <p>
            Enfin, j'ai aussi un attrait pour l'univers du design et je suis
            ainsi capable de réaliser des maquettes graphiques de sites web avec
            Figma, Photoshop ou encore Adobe XD.
          </p>

          <p>
            Même si je ne me considère pas designer professionnel, ces
            compétences peuvent s'avérer utiles lors de la réalisation
            d'applications web et mobiles.
          </p>
        </div>
      </div>
    </section>
  );
}
