import Intersection from '../Intersection';
import Gallary from './gallary';

const Photos = () => {
  const images: string[] = [
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_1.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_2.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_3.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_4.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_5.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_6.webp`,
  ];

  return (
    <Intersection className="flex flex-col mb-[32px]">
      <span className="text-center mt-[48px] mb-[32px]">갤러리</span>
      <Gallary images={images} />
    </Intersection>
  );
};

export default Photos;
