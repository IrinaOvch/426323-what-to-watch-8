import { connect, ConnectedProps } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import AddReviewButton from '../add-review-button/add-review-button';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';
import PlayButton from '../play-button/play-button';

type FilmActionsProps = {
  filmId: number;
}

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmActionsProps;

function FilmActions({filmId, authorizationStatus}: ConnectedComponentProps): JSX.Element {
  return (
    <div className="film-card__buttons">
      <PlayButton id={filmId}/>
      <AddToMyListButton/>
      {authorizationStatus === AuthorizationStatus.Auth && <AddReviewButton id={filmId}/>}
    </div>
  );
}

export { FilmActions };
export default connector(FilmActions);
