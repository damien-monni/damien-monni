import { PropsWithChildren } from 'react';

interface ServiceProps {
  title: string;
}

export default function Service({
  title,
  children,
}: PropsWithChildren<ServiceProps>) {
  return (
    <article className="bg-primary-light p-10 rounded">
      <h3 className="text-center mb-6">{title}</h3>

      {children}
    </article>
  );
}
