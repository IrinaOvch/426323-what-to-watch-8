
import { useState, useRef, useEffect } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
}

const TIMEOUT = 1000;

function FilmCard({film}: FilmCardProps): JSX.Element {
  const {title, previewImage, id,  previewVideoLink} = film;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePlay = () => {
    timerRef.current = setTimeout(() => setIsPlaying(true), TIMEOUT);
  };

  const handleStop = () => {
    setIsPlaying(false);
    timerRef.current && clearTimeout(timerRef.current);
  };

  const stopPlay = () => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      stopPlay();
    }
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [isPlaying]);

  return (
    <Link to={generatePath('/films/:id', {id: id})}
      className="small-film-card catalog__films-card"
      onMouseEnter={handlePlay}
      onMouseLeave={handleStop}
    >
      <VideoPlayer
        previewVideoLink={previewVideoLink}
        posterImage={previewImage}
        ref={videoRef}
      />
      <h3 className="small-film-card__title">
        <Link to={generatePath('/films/:id', {id: id})} className="small-film-card__link">{title}</Link>
      </h3>
    </Link>
  );
}

export default FilmCard;
