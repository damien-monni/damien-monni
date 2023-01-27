import clsx from 'clsx';
import Image from 'next/image';
import mePicture from '../../../public/img/me.png';
import SkillChip from './SkillChip';

interface MePictureProps {
  className?: string;
}

export default function MePicture({ className }: MePictureProps) {
  return (
    <div className={clsx('flex justify-center', className)}>
      <div className="flex relative w-[300px] lg:w-[450px]">
        {/* Pink shape behind the picture */}
        <div className="bg-[#FFDED3] absolute top-4 bottom-0 left-0 right-0 lg:top-16 rounded-[75px] rotate-3 translate-y-32" />

        {/* Picture */}
        <Image
          src={mePicture}
          alt="Damien Monni"
          priority
          className="relative z-10"
        />

        {/****** Skill chips ******/}

        {/* React */}
        <SkillChip
          className="absolute top-12 left-8 lg:top-10 lg:left-16"
          src="/img/react-logo.svg"
        />

        {/* AWS */}
        <SkillChip
          className="absolute top-16 right-6 lg:top-20 lg:right-10"
          classes={{ img: 'relative top-1' }}
          src="/img/aws-logo.svg"
        />

        {/* Node.js */}
        <SkillChip
          className="absolute top-44 left-14 lg:top-64 lg:left-20"
          classes={{ img: 'relative top-1' }}
          src="/img/nodejs-logo.svg"
        />

        {/* PostgreSQL */}
        <SkillChip
          className="absolute top-48 right-6 lg:top-72 lg:right-10"
          classes={{ img: 'relative top-1' }}
          src="/img/postgres-logo.svg"
        />
      </div>
    </div>
  );
}
