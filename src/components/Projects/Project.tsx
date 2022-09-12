import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';
import Skill, { SkillName } from '../Skill/Skill';

interface ProjectProps {
  className?: string;
  image: StaticImageData;
  imageAlt: string;
  title: string;
  subtitle: string;
  skills: SkillName[];
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
    <article className={clsx('flex flex-col md:flex-row', className)}>
      <div className="flex-1 md:ml-8 md:order-2">
        <h3>{title}</h3>
        <p className="mt-0 mb-0 opacity-70 text-lg">{subtitle}</p>

        <div className="flex items-center flex-wrap mt-2 mb-4">
          {skills.map((skillName, index) => (
            <Skill key={index} className="mr-2 mb-2" name={skillName} />
          ))}
        </div>

        {children}
      </div>

      <div className="flex-1 mx-auto md:order-1 md:mr-8">
        <figure className="bg-primary-light px-6 py-4 max-w-md md:max-w-max">
          <Image src={image} alt={imageAlt} />
        </figure>
      </div>
    </article>
  );
}
