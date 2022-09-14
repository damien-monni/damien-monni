import { PropsWithChildren, ReactNode } from 'react';

interface ServiceProps {
  title: string;
  icons?: ReactNode[];
}

export default function Service({
  title,
  icons,
  children,
}: PropsWithChildren<ServiceProps>) {
  return (
    <article className="bg-primary-light p-10 rounded">
      <h3 className="text-center mb-4">{title}</h3>

      {icons ? (
        <div className="flex items-center justify-center mb-6">
          {icons.map((Icon, index) => (
            // It is fine to use index as key here because because
            // it will never change.
            <div key={index} className="mx-2">
              {Icon}
            </div>
          ))}
        </div>
      ) : null}

      {children}
    </article>
  );
}
