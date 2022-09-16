import Service from './Service';

export default function Database() {
  return (
    <Service
      title="Base de données"
      icons={[
        <picture key="prisma">
          <img className="w-16" src="/img/skills/prisma.svg" alt="Prisma" />
        </picture>,
        <picture key="postgres">
          <img
            className="w-10"
            src="/img/skills/postgres.png"
            alt="PostgreSQL"
          />
        </picture>,
      ]}
    >
      <p>
        Je travaille principalement sur les bases de données PostgreSQL, MongoDB
        et DynamoDB.
      </p>

      <p>
        Ces trois bases de données couvrent un spectre d’utilisation large qui
        me permet aujourd’hui d’avoir une vision claire des avantages et
        contraintes de chacune d’elles.
      </p>

      <p>
        Le choix de la base de données n’est pas à négliger car en fonction de
        votre projet, elle influencera la robustesse de l’application, sa
        maintenance et ses coûts.
      </p>
    </Service>
  );
}
