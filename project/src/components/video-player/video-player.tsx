import { useState, useEffect, useRef } from 'react';

type VideoPlayerProps = {
  previewVideoLink: string;
  posterImage: string;
  isActive: boolean;
  onMouseEnter: () => void;
}

function VideoPlayer({previewVideoLink, posterImage, isActive, onMouseEnter}: VideoPlayerProps) : JSX.Element {
  const [isPlaying, setIsPlaying] = useState(isActive);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleMouseEnter = () => {
    onMouseEnter();
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  const stopPlay = (video: HTMLVideoElement | null): void => {
    if (video) {
      video.pause();
      video.load();
    }
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isPlaying && isActive) {
      timeout = setTimeout(() => videoRef.current?.play(), 1000);
    } else {
      stopPlay(videoRef.current);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isPlaying, isActive]);

  return (
    <div
      className="small-film-card__image"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        poster={posterImage}
        src={previewVideoLink}
        ref={videoRef}
        preload="none"
        loop
        muted
      />
    </div>
  );
}

export default VideoPlayer;
