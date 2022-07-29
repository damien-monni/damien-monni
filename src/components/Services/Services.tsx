import clsx from 'clsx';
import Backend from './Backend';
import Database from './Database';
import Frontend from './Frontend';
import Serverless from './Serverless';
import Testing from './Testing';
import Typescript from './Typescript';

interface ServicesProps {
  className?: string;
}

export default function Services({ className }: ServicesProps) {
  return (
    <section className={clsx(className)}>
      <h2 className="text-center">Services</h2>

      <p className="text-center text-xl max-w-2xl mx-auto my-12">
        Mes expériences variées me permettent d’intervenir sur différents
        domaines d’expertise. Ainsi, je peux aussi bien venir renforcer votre
        équipe sur un domaine spécifique qu’intervenir en tant que full-stack
        sur toute votre application.
      </p>

      <div className="grid grid-cols-3 gap-20">
        <Frontend />

        <Backend />

        <Database />

        <Typescript />

        <Testing />

        <Serverless />
      </div>
    </section>
  );
}
