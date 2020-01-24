import React from 'react';

import Project from '../Project';
import getTechs from '../libs/get-techs';

const Digicolis = ({ invert }) => {
  return (
    <Project
      title="Sourcin"
      subtitle="Plateforme de e-learning pour l'industrie biopharmaceutique"
      techs={getTechs(['react', 'aws', 'pwa', 'mongo', 'express'])}
      picture={{ src: 'sourcin', alt: 'Portfolio dashboard' }}
      invert={invert}
    >
      <p>
        Soucin est une entreprise proposant des formations en ligne réalisées
        sur mesure pour chacun de ces clients qui sont majoritairement dans
        l’industrie biopharmaceutique.
      </p>

      <p>
        Depuis plusieurs années, leur plateforme utilisait un système de gestion
        de contenu (CMS) appelé Liferay qui devenait limittant. Ils m’ont ainsi
        demandé de migrer l’application vers une stack plus moderne : React et
        AWS (Amazon Web Services).
      </p>

      <p>
        Ensemble et avec un prestataire spécialiste du cloud AWS nous avons
        ainsi développé une nouvelle version de la plateforme qui est
        actuellement (début 2020) en cours de migration.
      </p>
    </Project>
  );
};

export default Digicolis;
