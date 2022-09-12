import Project from './Project';
import keepBloggingImage from '../../../public/img/keep-blogging.png';

interface KeepBloggingProps {
  className?: string;
}

export default function KeepBlogging({ className }: KeepBloggingProps) {
  return (
    <Project
      image={keepBloggingImage}
      imageAlt="Keep Blogging"
      title="Keep Blogging"
      subtitle="Plateforme de blogging dédiée aux voyageurs"
      skills={['React', 'AWS', 'Node.js', 'Graph QL', 'DynamoDB']}
      className={className}
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
        Le backend est 100 % serverless et utilise le cloud d’infrastructure
        AWS. Cela permet une optimisation maximale des coût, une mise à
        l’échelle illimitée et supprime la gestion d’infrastructure afin de se
        focaliser sur le développement de l’application.
      </p>
    </Project>
  );
}
