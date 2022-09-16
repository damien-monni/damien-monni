import Service from './Service';

export default function Serverless() {
  return (
    <Service
      title="Serverless"
      icons={[
        <picture key="aws">
          <img className="w-10" src="/img/skills/aws.svg" alt="AWS" />
        </picture>,
        <picture key="serverless">
          <img
            className="w-[120px]"
            src="/img/skills/serverless.png"
            alt="Serverless Framework"
          />
        </picture>,
      ]}
    >
      <p>
        Les infrastructures Serverless se sont beaucoup développées ces
        dernières années et j’ai eu l’occasion d’acquerir une certaine expertise
        au cours de mes derniers projets.
      </p>

      <p>
        J’ai mis en place des infrastructures AWS entièrement Serverless pour
        des applications à fortes contraintes réglementaires. Cela me permet
        aujourd’hui de bien maîtriser les services Serverless proposés par AWS
        et d’être capable de créer l’architecture la plus adaptée à votre
        situation.
      </p>
    </Service>
  );
}
