// import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { FilmPreview } from '../../types/film/film';

type FilmsListProps = {
  films: FilmPreview[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  // const [activeFilm, setActiveFilm] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          id={film.id}
          title={film.title}
          previewImage={film.previewImage}
        />))}
    </div>
  );
}

export default FilmsList;

