import {useState} from 'react';
import {IconMute, IconUnmute} from '@/app/assets';

const Music = () => {
  const [muted, setMuted] = useState(true);

  const onMute = (value: boolean) => {
    setMuted(value);
  };

  return (
    <>
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
            src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/our_music.mp3`}
            type="audio/mp3"
          />
        </video>
      </div>
      <div className="flex justify-center items-center">
        {muted && (
          <button
            className="bg-transparent border-none flex justify-center items-center px-[8px] py-[4px]"
            onClick={() => onMute(false)}
          >
            <IconMute width={32} height={32} />
          </button>
        )}
        {!muted && (
          <button
            className="bg-transparent border-none flex justify-center items-center px-[8px] py-[4px]"
            onClick={() => onMute(true)}
          >
            <IconUnmute width={32} height={32} />
          </button>
        )}
      </div>
    </>
  );
};

export default Music;
