import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';
import { addToMyListAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user/selectors';

type FilmActionsProps = {
  filmId: number;
  isFavourite?: boolean;
}

function FilmActions({filmId: id, isFavourite}: FilmActionsProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleAddToMyListClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
      return;
    }
    dispatch(addToMyListAction(id, Number(!isFavourite)));
  };

  return (
    <div className="film-card__buttons">
      <Link to={generatePath('/player/:id', {id: id})} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"/>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list film-card__button" type="button" onClick={handleAddToMyListClick}>
        { !isFavourite &&
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"/>
          </svg>}
        {
          isFavourite &&
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
        }
        <span>My list</span>
      </button>
      {authorizationStatus === AuthorizationStatus.Auth &&
      <Link to={generatePath('/films/:id/review', {id})} className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default FilmActions;
