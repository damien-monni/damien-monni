import React from 'react';

import Project from '../Project';
import getTechs from '../libs/get-techs';

const SimplePlanningPoker = ({ invert }) => {
  return (
    <Project
      title="Simple Planning Poker"
      subtitle="Projet personnel de planning poker pour la gestion de projet Agile"
      techs={getTechs(['react', 'pubnub'])}
      picture={{ src: 'damienmonni', alt: 'Damien Monni pro site' }}
      invert={invert}
    >
      <p>
        J’ai créé cette petite application permettant de faire du planning
        poker, une technique de gestion de projet Agile utilisée pour estimer la
        durée de développements logiciels en équipe.
      </p>

      <p>
        Le défi était de créer une application sans backend en utilisant
        javascript au maximum. La communication entre les différents “joueurs”
        se fait via websocket à l’aide de PubNub.
      </p>

      <p>
        Le code est open source et a été écrit pour le challenge en 2 jours.
      </p>
    </Project>
  );
};

export default SimplePlanningPoker;
