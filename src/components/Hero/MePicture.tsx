import clsx from 'clsx';
import Image from 'next/image';
import mePicture from '../../../public/img/me.png';

interface MePictureProps {
  className?: string;
}

export default function MePicture({ className }: MePictureProps) {
  return (
    <div className={clsx('flex justify-center', className)}>
      <div className="flex relative w-[400px]">
        {/* Pink shape behind the picture */}
        <div className="bg-[#FFDED3] absolute top-16 bottom-0 -left-16 -right-16 rounded-[75px] rotate-3 translate-y-32" />

        {/* Picture */}
        <Image src={mePicture} alt="Damien Monni" />
      </div>
    </div>
  );
}
