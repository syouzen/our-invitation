const VideoPlayer = () => {
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
            src="https://kr.object.ncloudstorage.com/zen-bucket/our-video.mp4"
            type="video/mp4"
          />
          영상을 재생할 수 없습니다
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
