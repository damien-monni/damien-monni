import Service from './Service';

export default function Backend() {
  return (
    <Service
      title="Backend"
      icons={[
        <picture key="nodejs">
          <img className="w-10" src="/img/skills/node.png" alt="Node.js" />
        </picture>,
        <picture key="graphql">
          <img className="w-16" src="/img/skills/graphql.png" alt="GraphQL" />
        </picture>,
      ]}
    >
      <p>
        Étant spécialisé dans l’éco-système Javascript, Node.js est mon
        environnement backend de prédilection.
      </p>

      <p>
        Sur une application moderne, je pourrais par exemple travailler sur des
        API GraphQL et Serverless. Si votre code est existant ou que des
        contraintes vous l’imposent, je suis aussi capable de développer des API
        REST à partir d’architectures On Premise, à partir d’Express par
        exemple.
      </p>
    </Service>
  );
}
