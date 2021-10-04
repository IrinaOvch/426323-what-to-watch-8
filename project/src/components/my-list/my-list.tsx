import FilmCard from '../film-card/film-card';

type MyListProps = {
  title: string;
  src: string;
  id: number;
}[]

function MyList(films: MyListProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__films-list">
        {films.map((film) => <FilmCard key = {film.id} title = {film.title} src = {film.src}/>)}
      </div>
    </section>
  );
}

export default MyList;
