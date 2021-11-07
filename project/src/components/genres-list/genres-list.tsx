import { MouseEvent } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import cn from 'classnames/bind';
import { Actions } from '../../types/action';
import { changeGenre } from '../../store/action';
import { State } from '../../types/state';

type GenresListProps = {
  genres: string[];
}

const mapStateToProps = ({currentGenre}: State) => ({
  currentGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenreChange(genre: string) {
    dispatch(changeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenresListProps;


function GenresList(props: ConnectedComponentProps): JSX.Element {
  const {currentGenre, onGenreChange, genres} = props;
  const handleGenreClick = (evt: MouseEvent<HTMLAnchorElement>, genre: string) => {
    evt.preventDefault();
    onGenreChange(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        const cls = cn('catalog__genres-item', {'catalog__genres-item--active': genre === currentGenre});
        return (
          <li className={cls} key={genre}>
            <a
              href="/"
              className="catalog__genres-link"
              onClick={(evt) => handleGenreClick(evt, genre)}
            >
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export { GenresList };
export default connector(GenresList);
