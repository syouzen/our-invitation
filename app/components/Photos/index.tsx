import Intersection from '../Intersection';
import Gallary from './gallary';

const Photos = () => {
  const images: string[] = [
    'https://kr.object.ncloudstorage.com/zen-bucket/last-1.jpg',
    'https://kr.object.ncloudstorage.com/zen-bucket/last-2.jpg',
    'https://kr.object.ncloudstorage.com/zen-bucket/last-3.jpg',
    'https://kr.object.ncloudstorage.com/zen-bucket/last-4.jpg',
    'https://kr.object.ncloudstorage.com/zen-bucket/last-5.jpg',
    'https://kr.object.ncloudstorage.com/zen-bucket/last-6.jpg',
  ];

  return (
    <Intersection className="flex flex-col mb-[32px]">
      <span className="text-center mt-[48px] mb-[32px]">갤러리</span>
      <Gallary images={images} />
    </Intersection>
  );
};

export default Photos;
