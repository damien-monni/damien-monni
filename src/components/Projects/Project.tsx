import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';
import Chip, { ChipProps } from '../../DesignSystem/Chip/Chip';

interface ProjectProps {
  className?: string;
  image: StaticImageData;
  imageAlt: string;
  title: string;
  subtitle: string;
  skills: { name: string; color: ChipProps['color'] }[];
}
export default function Project({
  className,
  children,
  image,
  imageAlt,
  title,
  subtitle,
  skills,
}: PropsWithChildren<ProjectProps>) {
  return (
    <article className={clsx('flex', className)}>
      <div className="flex-1 mr-8">
        <figure className="bg-primary-light px-6 py-4">
          <Image src={image} alt={imageAlt} />
        </figure>
      </div>

      <div className="flex-1 ml-8">
        <h3>{title}</h3>
        <p className="mt-0 mb-0 opacity-70 text-lg">{subtitle}</p>

        <div className="flex items-center">
          {skills.map((skill, index) => (
            // Using index as a map key is generally a bad idea, but in this case it's fine
            // because the skills array is always the same and will never change.
            <Chip
              key={index}
              color={skill.color}
              className="mr-2 mt-2 mb-2"
              textNormal
            >
              {skill.name}
            </Chip>
          ))}
        </div>

        {children}
      </div>
    </article>
  );
}
