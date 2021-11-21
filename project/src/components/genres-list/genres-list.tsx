import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames/bind';
import { changeGenre } from '../../store/action';
import { getcurrentGenre } from '../../store/films-process/selectors';

type GenresListProps = {
  genres: string[];
}

function GenresList(props: GenresListProps): JSX.Element {
  const {genres} = props;
  const currentGenre = useSelector(getcurrentGenre);
  const dispatch = useDispatch();
  const handleGenreClick = (evt: MouseEvent<HTMLAnchorElement>, genre: string) => {
    evt.preventDefault();
    dispatch(changeGenre(genre));
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

export default GenresList;
