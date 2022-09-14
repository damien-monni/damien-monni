import Service from './Service';

export default function Testing() {
  return (
    <Service
      title="Testing"
      icons={[
        <picture key="jest">
          <img className="w-14" src="/img/skills/jest.png" alt="Jest" />
        </picture>,
        <picture key="cypress">
          <img className="w-14" src="/img/skills/cypress.png" alt="Cypress" />
        </picture>,
      ]}
    >
      <p>
        L’écriture de tests automatisés dans votre code est une nécessité. Un
        code qui n’est pas testé deviendra très rapidement difficile à faire
        évoluer et augmentera les bugs de vos applications.
      </p>

      <p>
        Afin de produire un code de qualité et évolutif, j’écrirai des tests
        unitaires, des tests d'intégration et des tests fonctionnels
        (end-to-end) lors de tous mes développements, si possible en TDD
        (Test-Driven Development).
      </p>

      <p>
        J’ai l’habitude d’utiliser Jest pour les tests unitaires et
        d'intégration, ainsi que Cypress pour les tests fonctionnels.
      </p>
    </Service>
  );
}
