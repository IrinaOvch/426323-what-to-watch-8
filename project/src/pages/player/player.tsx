import { useParams, Redirect } from 'react-router-dom';
import dayjs from 'dayjs';
import { FILMS } from '../../mocks/films';

type PageParams = {
  id: string
}

function Player(): JSX.Element {
  const { id } = useParams<PageParams>();
  const activeFilm = FILMS.find((film) => film.id === Number(id));

  if (activeFilm === undefined) {
    return (<Redirect to={{ pathname: ''}}/>);
  }

  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"/ >

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{dayjs(activeFilm.runTime).format('HH:mm:ss')}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{activeFilm.title}</div>

          <button type="button" className="player__full-screen">
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
