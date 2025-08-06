'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload(
    'https://kr.object.ncloudstorage.com/zen-bucket/our-video.mp4',
    {as: 'video'},
  );
  ReactDOM.preload(
    'https://kr.object.ncloudstorage.com/zen-bucket/last-1.jpg',
    {as: 'image'},
  );
  ReactDOM.preload(
    'https://kr.object.ncloudstorage.com/zen-bucket/last-2.jpg',
    {as: 'image'},
  );
  ReactDOM.preload(
    'https://kr.object.ncloudstorage.com/zen-bucket/last-3.jpg',
    {as: 'image'},
  );
  ReactDOM.preload(
    'https://kr.object.ncloudstorage.com/zen-bucket/last-4.jpg',
    {as: 'image'},
  );
  ReactDOM.preload(
    'https://kr.object.ncloudstorage.com/zen-bucket/last-5.jpg',
    {as: 'image'},
  );
  ReactDOM.preload(
    'https://kr.object.ncloudstorage.com/zen-bucket/last-6.jpg',
    {as: 'image'},
  );
  return null;
}
