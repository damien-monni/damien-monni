import React from 'react';

import Project from '../Project';
import getTechs from '../libs/get-techs';

const Digicolis = ({ invert }) => {
  return (
    <Project
      title="Digicolis"
      subtitle="Plateforme de gestion logistique"
      techs={getTechs(['react', 'nodejs', 'pwa', 'mongo', 'express'])}
      picture={{ src: 'damienmonni', alt: 'Damien Monni pro site' }}
      invert={invert}
    >
      <p>
        Digicolis est une plateforme de gestion logistique permettant de rendre
        accessible à tous commercant des fonctionnalité de livraison haute gamme
        comme la livraison à la journée.
      </p>

      <p>
        Il s’agit d’un ensemble d’applications : un site vitrine, une
        application d’administration et une PWA (application mobile disponible
        sur le web) dédiée aux livreurs sur le terrain et un backend sous la
        forme d’une API réalisée avec Node.js et MongoDB.
      </p>

      <p>
        Les frontends sont réalisés en React. L’API Node.js est hébergée sur un
        serveur VPS Digital Ocean et la base de données MongoDB sur Atlas.
      </p>
    </Project>
  );
};

export default Digicolis;
