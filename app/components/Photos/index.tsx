import Intersection from '../Intersection';
import Gallary from './gallary';

const Photos = () => {
  const images: string[] = [
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_0421.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1506.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1559.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1593.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1730.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1986.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_2436.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_2711.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_4251.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_4493.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_4884.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_5316.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_5988.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_6227.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_6238.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_6339.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_6332.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_7276.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_7586.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_8319.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_8402.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_8536.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_9186.JPG',
  ];

  return (
    <Intersection className="flex flex-col mb-[32px]">
      <span className="text-center mt-[48px] mb-[32px]">갤러리</span>
      <Gallary images={images} />
    </Intersection>
  );
};

export default Photos;
