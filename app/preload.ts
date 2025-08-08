'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/our_video.mp4`,
    {as: 'video'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/our_music.mp3`,
    {as: 'audio'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/dugahun_1.webp`,
    {as: 'image'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/dugahun_4.webp`,
    {as: 'image'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/dugahun_6.webp`,
    {as: 'image'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_1.webp`,
    {as: 'image'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_2.webp`,
    {as: 'image'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_3.webp`,
    {as: 'image'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_4.webp`,
    {as: 'image'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_5.webp`,
    {as: 'image'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/last_6.webp`,
    {as: 'image'},
  );
  ReactDOM.preload(
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/og.webp`,
    {as: 'image'},
  );
  return null;
}
