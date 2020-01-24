import React from 'react';

import Project from '../Project';
import getTechs from '../libs/get-techs';

const Datastore = ({ invert }) => {
  return (
    <Project
      title="Datastore"
      subtitle="Application web de collecte et analyse de données à partir d’automates industriels"
      techs={getTechs([
        'react',
        'nodejs',
        'meteor',
        'mongo',
        'websocket',
        'raspberrypi',
      ])}
      picture={{ src: 'datastore', alt: 'Datastore portfolio damien monni' }}
      invert={invert}
    >
      <p>
        Cette application a été réalisée pour Schneider Electric et permet de
        comuniquer avec des automates industriels afin de récupérer en temps
        réel leurs données et de les analyser.
      </p>

      <p>
        En plus d’être une application web, elle avait pour contrainte de devoir
        être déployée sur une carte embarquée Linux (Raspberry PI) afin de
        pouvoir être installée et utilisée localement dans des usines
        industrielles.
      </p>

      <p>
        Elle a été réalisée en JavaScript avec le framework Meteor et utilise
        une base de données MongoDB ainsi qu’une base de données fichier créée
        spécifiquement pour les besoins de ce projet afin de répondre aux
        contraintes limitantes des cartes embarquées. La communication temps
        réel se fait via le protocole Modbus et la technologie websocket.
      </p>
    </Project>
  );
};

export default Datastore;
