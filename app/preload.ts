'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload(
    'https://kjhswhyddvck27143991.gcdn.ntruss.com/our-invitation.mp4',
    {as: 'video'},
  );
  ReactDOM.preload(
    'https://kjhswhyddvck27143991.gcdn.ntruss.com/IMG_0421.JPG',
    {as: 'image'},
  );
  ReactDOM.preload(
    'https://kjhswhyddvck27143991.gcdn.ntruss.com/IMG_1506.JPG',
    {as: 'image'},
  );
  ReactDOM.preload(
    'https://kjhswhyddvck27143991.gcdn.ntruss.com/IMG_1593.JPG',
    {as: 'image'},
  );
  ReactDOM.preload(
    'https://kjhswhyddvck27143991.gcdn.ntruss.com/IMG_1730.JPG',
    {as: 'image'},
  );
  ReactDOM.preload(
    'https://kjhswhyddvck27143991.gcdn.ntruss.com/IMG_1986.JPG',
    {as: 'image'},
  );
  ReactDOM.preload(
    'https://kjhswhyddvck27143991.gcdn.ntruss.com/IMG_2436.JPG',
    {as: 'image'},
  );
  return null;
}
