import React from 'react';

import Project from '../Project';
import getTechs from '../libs/get-techs';

const Datastore = ({ invert }) => {
  return (
    <Project
      title="Datastore"
      subtitle="Application web de collecte et analyse de données à partir d’automates industriels"
      techs={getTechs(['react', 'nodejs', 'meteor', 'mongo', 'raspberrypi'])}
      picture={{ src: 'damienmonni', alt: 'Damien Monni pro site' }}
      invert={invert}
    >
      <p>
        Cette application a été réalisée pour Schneider Electri et permet de
        comuniquer avec des automates industriels afin de récupérer en temps
        réel leurs données et de les analyser.
      </p>

      <p>
        En plus d’être une application web, elle avait pour contrainte de devoir
        être déployé sur une carte embarquée Linux afin de pouvoir être
        installée et utilisé localement dans les usines industrielles.
      </p>

      <p>
        Elle a été réalisée en Javascript avec le framework Meteor et utilise
        une base de données MongoDB ainsi qu’une base de données fichier créée
        spécifiquement pour les besoins de se projet afin de répondre aux
        contraintes limitantes des cartes embarquées. La communication temps
        réel se fait via le protocole Modbus et la technologie websocket.
      </p>
    </Project>
  );
};

export default Datastore;
