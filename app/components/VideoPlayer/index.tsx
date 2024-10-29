import {useState} from 'react';
import styles from './components.module.css';
import {IconMute, IconUnmute} from '@/app/assets';

const VideoPlayer = () => {
  const [muted, setMuted] = useState(true);

  const onMute = (value: boolean) => {
    setMuted(value);
  };

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoBackground}>
        <video
          className={styles.video}
          preload="auto"
          loop
          autoPlay
          muted={muted}
          playsInline
          webkit-playsinline="webkit-playsinline"
        >
          <source
            src="https://kjhswhyddvck27143991.gcdn.ntruss.com/our-invitation.mp4"
            type="video/mp4"
          />
          영상을 재생할 수 없습니다
        </video>
      </div>
      {muted && (
        <button className={styles.muteButton} onClick={() => onMute(false)}>
          <IconMute width={32} height={32} />
        </button>
      )}
      {!muted && (
        <button className={styles.muteButton} onClick={() => onMute(true)}>
          <IconUnmute width={32} height={32} />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
