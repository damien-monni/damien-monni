import React from 'react';

import Project from '../Project';
import getTechs from '../libs/get-techs';

const KeepBlogging = ({ invert }) => {
  return (
    <Project
      title="Keep Blogging"
      subtitle="Plateforme de blogging dédiée aux voyageurs"
      techs={getTechs(['react', 'nextjs', 'aws', 'graphql', 'quilljs'])}
      picture={{ src: 'keepblogging', alt: 'Keep Blogging landing page' }}
      invert={invert}
    >
      <p>
        Keep Blogging est une plateforme de blogging dédiée aux voyageur. Elle
        permet de créer un blog très simplement afin de rendre cela accessible à
        n’importe qui.
      </p>
      <p>
        L’idée vient de l’observation que beaucoup de personnes partagent leur
        voyages sur les réseaux sociaux plutôt qu’un blog car la création de
        blog n’est pas aisée. Avec Keep Blogging, une minute suffie pour créer
        un blog.
      </p>
      <p>
        La plateforme propose des fonctionnalitée moderne, comme un editeur de
        texte directement intégré à la page de l’article. Ainsi, l’utilisateur
        visualise ses articles directement comme ses lecteurs les visualiseront,
        sans avoir à passer par un formulaire intermediaire et une page de
        prévisualisation spéciale.
      </p>
      <p>
        Techniquement, le framework React Next.js est utilisé pour le frontend.
        Le backend est 100 % serverless, doté d'une API GraphQL et utilise le
        cloud d’infrastructure AWS. Cela permet une optimisation maximale des
        coût, une mise à l’échelle illimitée, et supprime la maintenance
        d’infrastructure afin de se focaliser sur le développement de
        l’application.
      </p>
    </Project>
  );
};

export default KeepBlogging;
