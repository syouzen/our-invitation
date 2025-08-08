import Image from 'next/image';
import Gallary from '../Photos/gallary';

const MapGallary = () => {
  const images: string[] = [
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/dugahun_1.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/dugahun_4.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/dugahun_6.webp`,
  ];

  return (
    <>
      <div className="flex justify-center items-center">
        <Image
          src="/images/logo.png"
          alt="두가헌"
          width={360}
          height={140}
          className="px-[32px] min-w-[180px]"
        />
      </div>

      <Gallary images={images} noDialog className="mb-[16px]" />
    </>
  );
};

export default MapGallary;
