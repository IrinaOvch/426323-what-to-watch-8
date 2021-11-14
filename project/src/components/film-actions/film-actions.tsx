import AddReviewButton from '../add-review-button/add-review-button';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';
import PlayButton from '../play-button/play-button';

type FilmActionsProps = {
  filmId: number;
}

function FilmActions({filmId}: FilmActionsProps): JSX.Element {
  return (
    <div className="film-card__buttons">
      <PlayButton id={filmId}/>
      <AddToMyListButton/>
      <AddReviewButton id={filmId}/>
    </div>
  );
}

export default FilmActions;
