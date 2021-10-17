import { Link, generatePath } from 'react-router-dom';

type PlayButtonProps = {
  id: number;
}

function PlayButton({id}: PlayButtonProps): JSX.Element {
  return (
    <Link to={generatePath('/player/:id', {id: id})} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </Link>
  );
}

export default PlayButton;
