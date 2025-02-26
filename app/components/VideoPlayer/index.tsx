import {useState} from 'react';
import {IconMute, IconUnmute} from '@/app/assets';

const VideoPlayer = () => {
  const [muted, setMuted] = useState(true);

  const onMute = (value: boolean) => {
    setMuted(value);
  };

  return (
    <div className="relative w-full aspect-[4/5] z-[10]">
      <div className="absolute top-0 inset-0 z-[-10] overflow-hidden">
        <video
          className="w-full inset-0 object-cover aspect-[4/5]"
          preload="auto"
          loop
          autoPlay
          muted
          playsInline
          webkit-playsinline="webkit-playsinline"
        >
          <source
            src="https://kr.object.ncloudstorage.com/zen-bucket/our-invitation.mp4"
            type="video/mp4"
          />
          영상을 재생할 수 없습니다
        </video>
      </div>

      {/* 음악 */}
      <div className="w-0 h-0">
        <video
          preload="auto"
          loop
          autoPlay
          muted={muted}
          playsInline
          webkit-playsinline="webkit-playsinline"
        >
          <source
            src="https://kr.object.ncloudstorage.com/zen-bucket/this_happy_madness.mp3"
            type="audio/mp3"
          />
        </video>
      </div>
      {muted && (
        <button
          className="absolute top-0.5 right-0.5 z-10 bg-transparent border-none flex justify-center items-center px-[8px] py-[4px]"
          onClick={() => onMute(false)}
        >
          <IconMute width={32} height={32} />
        </button>
      )}
      {!muted && (
        <button
          className="absolute top-0.5 right-0.5 z-10 bg-transparent border-none flex justify-center items-center px-[8px] py-[4px]"
          onClick={() => onMute(true)}
        >
          <IconUnmute width={32} height={32} />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
