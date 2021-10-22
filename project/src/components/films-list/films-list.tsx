import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { Film } from '../../types/film/film';

type FilmsListProps = {
  films: Film[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onMouseEnter={() => (
            setActiveFilm(film.id)
          )}
          isActive={activeFilm === film.id}
        />))}
    </div>
  );
}

export default FilmsList;

