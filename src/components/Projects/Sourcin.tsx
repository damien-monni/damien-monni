import Project from './Project';
import sourcinImage from '../../../public/img/sourcin.png';

interface SourcinProps {
  className?: string;
}

export default function Sourcin({ className }: SourcinProps) {
  return (
    <Project
      image={sourcinImage}
      imageAlt="Sourcin"
      title="Sourcin"
      subtitle="E-learning pour l'industrie biopharmaceutique"
      skills={[
        { name: 'React', color: 'orange' },
        { name: 'GraphQL', color: 'blue' },
        { name: 'AWS', color: 'purple' },
      ]}
      className={className}
    >
      <p>
        Soucin est une entreprise proposant des formations en ligne réalisées
        sur mesure pour chacun de ses clients qui sont majoritairement dans
        l’industrie biopharmaceutique.
      </p>

      <p>
        Depuis plusieurs années, leur plateforme utilisait un système de gestion
        de contenu (CMS) appelé Liferay qui devenait limittant. Ils m’ont ainsi
        demandé de migrer l’application vers un ensemble de technlogies plus
        moderne : React et AWS (Amazon Web Services).
      </p>

      <p>
        Ensemble et avec un prestataire spécialiste du cloud AWS nous avons
        ainsi développé une nouvelle version de la plateforme qui est
        actuellement (début 2020) en cours de migration.
      </p>
    </Project>
  );
}
