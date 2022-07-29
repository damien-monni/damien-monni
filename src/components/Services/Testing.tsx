import Service from './Service';

export default function Testing() {
  return (
    <Service title="Testing">
      <p>
        L’écriture de tests automatisés dans votre code est une nécessité. Un
        code qui n’est pas testé deviendra très rapidement difficile à faire
        évoluer et augmentera les bugs de vos applications.
      </p>

      <p>
        Afin de produire un code de qualité et fonctionnel, j’écrirai des tests
        unitaires et des tests fonctionnels (end-to-end) lors de tous mes
        développements.
      </p>

      <p>
        J’ai l’habitude d’utiliser Jest pour les tests unitaires et Cypress pour
        les tests fonctionnels.
      </p>
    </Service>
  );
}
