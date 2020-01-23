import React from 'react';

import Project from '../Project';
import getTechs from '../libs/get-techs';

const Perso = ({ invert }) => {
  return (
    <Project
      title="Damien Monni"
      subtitle="Ce site ! Mon site professionel"
      techs={getTechs(['react', 'nextjs', 'netlify'])}
      picture={{ src: 'damienmonni', alt: 'Damien Monni pro site' }}
      invert={invert}
    >
      <p>
        Il s’agit de mon site professionel dans lequel je me présente et montre
        certains projets sur lesquels j’ai travaillé.
      </p>

      <p>
        C’est un site vitrine réalisé avec React et exporté de manière statique
        avec Next.js. De cette manière son référencement est optimisé et sa
        vitesse de chargement améliorée.
      </p>

      <p>J’ai réalisé moi-même le design en créant les maquettes avec Figma.</p>

      <p>
        L’hébergement est réalisé via Netlify qui permet un déploiement continue
        via CDN.
      </p>
    </Project>
  );
};

export default Perso;
