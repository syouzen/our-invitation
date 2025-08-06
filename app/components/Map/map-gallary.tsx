import Image from 'next/image';
import Gallary from '../Photos/gallary';

const MapGallary = () => {
  const images: string[] = [
    'https://kr.object.ncloudstorage.com/zen-bucket/dugahun_1.jpg',
    // 'https://kr.object.ncloudstorage.com/zen-bucket/dugahun_2.jpg',
    // 'https://kr.object.ncloudstorage.com/zen-bucket/dugahun_3.jpg',
    'https://kr.object.ncloudstorage.com/zen-bucket/dugahun_4.jpg',
    // 'https://kr.object.ncloudstorage.com/zen-bucket/dugahun_5.jpg',
    'https://kr.object.ncloudstorage.com/zen-bucket/dugahun_6.jpg',
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
