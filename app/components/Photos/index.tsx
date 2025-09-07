import Intersection from '../Intersection';
import Gallary from './gallary';

const Photos = () => {
  const images: string[] = [
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_add_8.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_1.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_2.webp`,

    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_3.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_4.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_5.webp`,

    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_7.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_3.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_6.webp`,

    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_5.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_1.webp`,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_2.webp`,
  ];

  return (
    <Intersection className="flex flex-col mb-[32px]">
      <span className="text-center mt-[48px] mb-[32px]">갤러리</span>
      <Gallary images={images} />
    </Intersection>
  );
};

export default Photos;
