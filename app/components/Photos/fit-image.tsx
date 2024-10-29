import Image from 'next/image';
import {useState, useEffect} from 'react';

interface FitImageProps {
  src: string;
  alt: string;
}

const FitImage = ({src, alt}: FitImageProps) => {
  const [size, setSize] = useState({width: 0, height: 0});

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setSize({width: img.width, height: img.height});
    };
  }, [src]);

  return (
    <div>
      {size.width && size.height && (
        <Image
          src={src}
          alt={alt}
          width={size.width}
          height={size.height}
          layout="responsive"
          objectFit="contain"
        />
      )}
    </div>
  );
};

export default FitImage;