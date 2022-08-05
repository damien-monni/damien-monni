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
      <div className="flex relative w-[500px]">
        {/* Pink shape behind the picture */}
        <div className="bg-[#FFDED3] absolute top-16 bottom-0 -left-0 -right-0 rounded-[75px] rotate-3 translate-y-32" />

        {/* Picture */}
        <Image src={mePicture} alt="Damien Monni" />

        {/****** Skill chips ******/}

        {/* React */}
        <SkillChip
          className="absolute top-10 left-16"
          src="/img/react-logo.svg"
        />

        {/* AWS */}
        <SkillChip
          className="absolute top-20 right-10"
          classes={{ img: 'relative top-1' }}
          src="/img/aws-logo.svg"
        />

        {/* Node.js */}
        <SkillChip
          className="absolute top-64 left-20"
          classes={{ img: 'relative top-1' }}
          src="/img/nodejs-logo.svg"
        />

        {/* PostgreSQL */}
        <SkillChip
          className="absolute top-72 right-10"
          classes={{ img: 'relative top-1' }}
          src="/img/postgres-logo.svg"
        />
      </div>
    </div>
  );
}
