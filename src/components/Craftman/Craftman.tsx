import clsx from 'clsx';

interface CraftmanProps {
  className?: string;
}

export default function Craftman({ className }: CraftmanProps) {
  return (
    <section
      className={clsx('bg-black text-white px-20 py-40 text-center', className)}
    >
      <h2>Artisan logiciel passionné</h2>

      <div className="max-w-2xl mx-auto">
        <p className="text-xl mt-16 mb-10">
          Developpeur passionné, je créé du code de qualité, lisible, testé et
          simple à maintenir.
        </p>

        <p className="text-xl">
          J’adère entièrement à la philosophie du{' '}
          <strong>Software Craftsmanship</strong>, afin de vous livrer un
          travail sur lequel vous pourrez évoluer en toute sereinité pour la
          suite de votre projet.
        </p>
      </div>
    </section>
  );
}
