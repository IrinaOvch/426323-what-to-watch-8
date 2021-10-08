
import { Film } from '../../types/film/film';
import FilmsList from '../../components/films-list/films-list';

function MyList(films: Film[]): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmsList films={films}/>
    </section>
  );
}

export default MyList;
