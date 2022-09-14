import clsx from 'clsx';

interface CraftmanProps {
  className?: string;
}

export default function Craftman({ className }: CraftmanProps) {
  return (
    <section
      className={clsx(
        'bg-black text-white px-10 py-16 lg:px-20 lg:py-40 text-center',
        className,
      )}
    >
      <h2>Artisan logiciel passionné</h2>

      <div className="max-w-2xl mx-auto">
        <p className="text-lg lg:text-xl mt-8 mb-6 lg:mt-16 lg:mb-10">
          Développeur passionné, je créé du code de qualité, lisible, testé et
          facile à faire évoluer.
        </p>

        <p className="text-lg lg:text-xl">
          J’adère entièrement à la philosophie du{' '}
          <strong>Software Craftsmanship</strong>, afin de vous livrer un
          travail sur lequel vous pourrez évoluer en toute sereinité pour la
          suite de votre projet.
        </p>
      </div>
    </section>
  );
}
