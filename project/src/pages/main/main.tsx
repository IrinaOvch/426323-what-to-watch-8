import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import PlayButton from '../../components/play-button/play-button';
import AddToMyListButton from '../../components/add-to-my-list-button/add-to-my-list-button';
import { Film } from '../../types/film/film';

type MainPageProps = {
  promo: {
    title: string;
    genre: string;
    releaseYear: number;
  },
  films: Film[];
}

function MainPage({promo, films}: MainPageProps) : JSX.Element {
  const {title, genre, releaseYear} = promo;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isUserBlock className="film-card__head" />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton/>
                <AddToMyListButton/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>

          <FilmsList films={films}/>

          <ShowMoreButton/>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MainPage;
