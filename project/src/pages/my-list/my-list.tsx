
import { Film } from '../../types/film/film';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

type MyListProps = {
  films: Film[]
}

function MyList({films}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Header
        heading={'My list'}
        isUserPage
        isUserBlock
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
