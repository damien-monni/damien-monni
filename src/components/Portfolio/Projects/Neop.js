import React from 'react';

import Project from '../Project';
import getTechs from '../libs/get-techs';

const Neop = ({ invert }) => {
  return (
    <Project
      title="Neop"
      subtitle="Application mobile de contrôle d'accès connecté"
      techs={getTechs(['reactnative'])}
      picture={{ src: 'damienmonni', alt: 'Damien Monni pro site' }}
      invert={invert}
    >
      <p>
        Neop est une startup proposant des serrrures connectées gérées à partir
        d'une application web et mobile.
      </p>

      <p>
        J'ai réalisé l'application mobile en React Native afin de n'avoir qu'un
        seul code source déployé sur les stores Apple et Google, tout en gardant
        des performances natives grâce à l'API React Native.
      </p>

      <p>
        L'application mobile communique avec une API réalisée par un prestataire
        externe.
      </p>
    </Project>
  );
};

export default Neop;
