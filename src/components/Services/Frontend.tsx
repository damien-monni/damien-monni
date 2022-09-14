import Service from './Service';

export default function Frontend() {
  return (
    <Service
      title="Frontend"
      icons={[
        <picture key="react">
          <img className="w-6" src="/img/skills/react.svg" alt="React" />
        </picture>,
        <picture key="nextjs">
          <img className="w-12" src="/img/skills/nextjs.svg" alt="Next.js" />
        </picture>,
        <picture key="tailwind">
          <img
            className="w-24"
            src="/img/skills/tailwind.svg"
            alt="Tailwind CSS"
          />
        </picture>,
      ]}
    >
      <p>
        Je travail quotidiennement sur du code frontend avec React, depuis
        maintenant plus de 5 ans.
      </p>

      <p>
        J’ai pu évoluer sur une variétée large de code neuf ou legacy, avec des
        composants de classes ou de fonctions, des HOC, des Render Props, des
        Hooks, des configurations Webpack, des bases CRA ou Next.js.
      </p>

      <p>
        Quelque soit votre demande, je serai heureux de produire votre prochaine
        application web, réduire votre dette technique ou venir renforcer une
        équipe déjà en place.
      </p>
    </Service>
  );
}
