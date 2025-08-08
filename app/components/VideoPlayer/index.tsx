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
            src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/our_video.mp4`}
            type="video/mp4"
          />
          영상을 재생할 수 없습니다
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
