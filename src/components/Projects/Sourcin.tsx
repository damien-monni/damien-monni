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
      skills={['React']}
      className={className}
    >
      <p>
        Sourcin créer et héberge des contenus de formations sur mesure pour
        l'industrie biopharmaceutique.
      </p>

      <p>
        Les contenus peuvent être sous plusieurs formats : vidéos, page web
        interactive, quiz, PDF...
      </p>

      <p>
        Le domaine de la biopharmaceutique demande une grande maitrise de
        l'infrastructure et des données de la plateforme, ce qui leur impose de
        développer leur propre plateforme d'hébergement et de distribution de
        contenus.
      </p>

      <p>
        Sur ce projet long terme, mon rôle a été pendant 4 ans de déveloper une
        grande partie de la plateforme, parfois seul, parfois en équipe, de
        définir l'infrastructure, de la sécuriser et d'avoir un rôle de lead
        technique lors des phases de développement en équipe.
      </p>

      <p>
        La stack est composée d'un frontend React et d'un backend 100%
        Serverless hébergé sur AWS. Le backend utilise entre autres les services
        AWS Lambda, S3, API Gateway, Cognito, DynamoDB et Aurora PostgreSQL
        Serverless. L'infrastructure est déclarée par code (Infrastructure as
        Code) avec Serverless Framework.
      </p>
    </Project>
  );
}
