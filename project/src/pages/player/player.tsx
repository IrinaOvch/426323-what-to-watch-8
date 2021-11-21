import { useEffect, useRef, MouseEvent, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getFilm, getFilmErrorStatus, getFilmLoadingStatus } from '../../store/films-data/selectors';
import { fetchFilmAction } from '../../store/api-actions';
import { formatDuration } from '../../utils/format-duration';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import NotFoundScreen from '../page-not-found/page-not-found';
import cn from 'classnames';

type PageParams = {
  id: string
}

function Player(): JSX.Element {
  const { id } = useParams<PageParams>();
  const activeFilm = useSelector(getFilm);
  const isFilmLoading = useSelector(getFilmLoadingStatus);
  const isFilmError = useSelector(getFilmErrorStatus);
  const history = useHistory();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoState, setVideoState] = useState({
    isPlaying: true,
    progress: 0,
    timeLeft: videoRef?.current?.duration,
  });


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilmAction(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    if (videoState.isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [videoState]);
  const handleExitClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    history.goBack();
  };

  const handleTogglePlay = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setVideoState({
      ...videoState,
      isPlaying: !videoState.isPlaying,
    });
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      const timeLeft = videoRef.current.duration -  videoRef.current.currentTime;

      setVideoState({
        ...videoState,
        progress,
        timeLeft,
      });
    }
  };

  const handleFullScreenClick = ()=>{
    videoRef.current?.requestFullscreen();
  };

  const handleVideoProgress = (change: number) => {
    if (videoRef?.current) {
      videoRef.current.currentTime = (videoRef.current.duration / 100) * change;
      const timeLeft = videoRef.current.duration -  videoRef.current.currentTime;
      setVideoState({
        ...videoState,
        progress: change,
        timeLeft,
      });
    }
  };

  const handleProgressBarClick = (evt: MouseEvent<HTMLDivElement>) => {
    const offsetX = evt.clientX - evt.currentTarget.offsetLeft;
    const totalWidth = evt.currentTarget.clientWidth;
    const change = Math.floor(offsetX / totalWidth * 100);
    handleVideoProgress(change);
  };

  if (isFilmError) {
    return <NotFoundScreen/>;
  }

  return (
    <div className="player">
      <div className={cn({'visually-hidden': !isFilmLoading})}>
        <LoadingScreen/>
      </div>
      <video
        src={activeFilm.videoLink}
        className="player__video"
        poster={activeFilm.posterImage}
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
      />

      <button type="button" className="player__exit" onClick={handleExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time" onClick={handleProgressBarClick}>
            <progress className="player__progress" value="0" max="100" />
            <div className="player__toggler" style={{left: `${videoState.progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">-{formatDuration(videoState.timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          {
            !videoState.isPlaying &&
            <button type="button" className="player__play" onClick={handleTogglePlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
          }
          {
            videoState.isPlaying &&
            <button type="button" className="player__play" onClick={handleTogglePlay}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          }

          <div className="player__name">{activeFilm.title}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
