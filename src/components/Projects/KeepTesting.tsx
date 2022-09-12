import Project from './Project';
import keepTestingImage from '../../../public/img/keep-testing.png';

interface KeepTestingProps {
  className?: string;
}

export default function KeepTesting({ className }: KeepTestingProps) {
  return (
    <Project
      image={keepTestingImage}
      imageAlt="Keep Testing"
      title="Keep Testing"
      subtitle="Plateforme de suivi de tests et corrections de bugs"
      skills={['React', 'Graph QL', 'Node.js', 'PostgreSQL', 'Typescript']}
      className={className}
    >
      <p>
        Keep testing est une plateforme qui permet de créer et suivre des plans
        de tests pour des sites web, applications ou n'importe quel projet
        nécessitant de réaliser des tests de réception.
      </p>

      <p>
        Il est possible de collaborer en équipe sur des suites de tests afin
        d'échanger et de suivre les résolutions de bugs.
      </p>

      <p>
        Techniquement, le front-end utilise React, le backend Node.js et la base
        de données PostgreSQL.
      </p>
    </Project>
  );
}
