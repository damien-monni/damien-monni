import clsx from 'clsx';
import Backend from './Backend';
import Database from './Database';
import Frontend from './Frontend';
import Serverless from './Serverless';
import Testing from './Testing';
import Typescript from './Typescript';
import { useTranslation } from 'next-i18next';

interface ServicesProps {
  className?: string;
}

export default function Services({ className }: ServicesProps) {
  const { t } = useTranslation();

  return (
    <section className={clsx(className)}>
      <h2 className="text-center">{t('Services.title')}</h2>

      <p className="text-center text-lg my-12 max-w-2xl mx-4 sm:mx-auto sm:my-12 sm:text-xl">
        {t('Services.description')}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-20">
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
