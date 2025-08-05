'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload(
    'https://kr.object.ncloudstorage.com/zen-bucket/our-video.mp4',
    {as: 'video'},
  );
  // ReactDOM.preload(
  //   'https://kr.object.ncloudstorage.com/zen-bucket/IMG_0421.JPG',
  //   {as: 'image'},
  // );
  // ReactDOM.preload(
  //   'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1506.JPG',
  //   {as: 'image'},
  // );
  // ReactDOM.preload(
  //   'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1593.JPG',
  //   {as: 'image'},
  // );
  // ReactDOM.preload(
  //   'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1730.JPG',
  //   {as: 'image'},
  // );
  // ReactDOM.preload(
  //   'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1986.JPG',
  //   {as: 'image'},
  // );
  // ReactDOM.preload(
  //   'https://kr.object.ncloudstorage.com/zen-bucket/IMG_2436.JPG',
  //   {as: 'image'},
  // );
  return null;
}
