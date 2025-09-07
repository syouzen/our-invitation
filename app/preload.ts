'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/our_video.mp4`, {
    as: 'video',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/our_music.mp3`, {
    as: 'audio',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/dugahun_1.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/dugahun_4.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/dugahun_6.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_1.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_2.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_3.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_4.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_5.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_last_6.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_1.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_2.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_3.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_5.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_7.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/big_add_8.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/og.webp`, {
    as: 'image',
  });
  ReactDOM.preload(`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/kakao_og.webp`, {
    as: 'image',
  });
  return null;
}
