import clsx from 'clsx';
import Digicolis from './Digicolis';
import KeepBlogging from './KeepBlogging';
import KeepTesting from './KeepTesting';
import Keeze from './Keeze';
import Sourcin from './Sourcin';

interface ProjectsProps {
  className?: string;
}

export default function Projects({ className }: ProjectsProps) {
  return (
    <section className={clsx(className)}>
      <h2 className="mb-8 text-center">Quelques réalisations</h2>

      <div className="text-center max-w-xl mx-auto md:max-w-2xl">
        <p>
          Voici quelques projets sur lesquels j'ai travaillé ces dernières
          années.
        </p>
        <p>
          Ils sont réalisés sur des stacks Javascript modernes : React, API
          Node.js, Serverless AWS, Typescript, bases de données MongoDB,
          DynamoDB, ou encore PostgreSQL.
        </p>
      </div>

      <KeepTesting className="my-20" />

      <Sourcin className="my-20" />

      <KeepBlogging className="my-20" />

      <Digicolis className="my-20" />

      <Keeze className="my-20" />
    </section>
  );
}
