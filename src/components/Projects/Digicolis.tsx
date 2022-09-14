import Project from './Project';
import digicolisImage from '../../../public/img/digicolis.png';

interface DigicolisProps {
  className?: string;
}

export default function Digicolis({ className }: DigicolisProps) {
  return (
    <Project
      image={digicolisImage}
      imageAlt="Digicolis"
      title="Digicolis"
      subtitle="Plateforme de gestion logistique"
      skills={['React', 'Node.js', 'MongoDB']}
      className={className}
    >
      <p>
        Digicolis est une plateforme de gestion logistique permettant de rendre
        accessible à tout commerçant des fonctionnalités de livraison haut de
        gamme comme la livraison à la journée.
      </p>

      <p>
        Il s’agit d’un ensemble d’applications : un site vitrine, une
        application d’administration et une PWA (application mobile disponible
        sur le web) dédiées aux livreurs sur le terrain et un backend sous la
        forme d’une API réalisé avec Node.js et MongoDB.
      </p>

      <p>
        Les frontends sont réalisés en React. L’API Node.js est hébergée sur un
        serveur VPS Digital Ocean et la base de données MongoDB sur Atlas.
      </p>
    </Project>
  );
}
