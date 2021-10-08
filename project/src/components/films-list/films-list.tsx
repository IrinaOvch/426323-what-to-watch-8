import FilmCard from '../film-card/film-card';
import { Film } from '../../types/film/film';

type FilmProps = {
  films: Film[]
}

function FilmsList({films}: FilmProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          title={film.title}
          src={film.src}
        />))}
    </div>
  );
}

export default FilmsList;

