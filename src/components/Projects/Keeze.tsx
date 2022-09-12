import Project from './Project';
import keezeImage from '../../../public/img/keeze.png';

interface KeezeProps {
  className?: string;
}

export default function Keeze({ className }: KeezeProps) {
  return (
    <Project
      image={keezeImage}
      imageAlt="Keeze"
      title="Keeze"
      subtitle="Location d'espaces à la journée pour les entreprises"
      skills={['React', 'Node.js', 'MongoDB']}
      className={className}
    >
      <p>
        Keeze est une startup louant des espaces à la journée aux entreprises
        pour leurs séminaires ou réunions. L'activité de la startup Keeze
        augmentant considérablement, ils m'ont contacté dans le but
        d'automatiser au maximum leurs processus.
      </p>

      <p>
        Cela est passé par la migration de leur site Internet Wordpress vers une
        solution sur-mesure en React ainsi que la création d'un back-end
        permettant d'administrer leurs réservations, devis, et la gestion de
        leurs espaces.
      </p>

      <p>
        Leurs demandes étant très spécifiques, le passage vers une solution
        sur-mesure était indispensable.
      </p>

      <p>
        Côté front-end, le design a été amélioré. Un système de réservation en
        ligne a été entièrement créé, ainsi qu'un système de génération et
        d'envoi automatique de devis PDF suite à une demande d'une réservation
        en ligne.
      </p>

      <p>
        Côté back-end, un espace d'administration 100% sur-mesure a été créé
        afin de répondre exactement à leurs besoins.
      </p>

      <p>
        Le développement utilise le framework Meteor (reposant sur Node.JS),
        combiné à React et MongoDB pour la base de donnée.
      </p>
    </Project>
  );
}
