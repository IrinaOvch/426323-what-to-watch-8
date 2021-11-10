import { useParams, Redirect } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilmsList from '../../components/films-list/films-list';
import PlayButton from '../../components/play-button/play-button';
import AddToMyListButton from '../../components/add-to-my-list-button/add-to-my-list-button';
import AddReviewButton from '../../components/add-review-button/add-review-button';
import { Film} from '../../types/film';
import Tabs from '../../components/film-card-tabs/film-card-tabs';

const MAX_AMOUNT = 4;

type FilmProps = {
  films: Film[]
}

type PageParams = {
  id: string
}

function FilmPage({films}: FilmProps): JSX.Element {
  const { id } = useParams<PageParams>();
  const activeFilm = films.find((film) => film.id === Number(id));

  if (activeFilm === undefined) {
    return (<Redirect to={{ pathname: ''}}/>);
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={activeFilm.backgroundImage} alt={activeFilm.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header isUserBlock className="film-card__head" />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{activeFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{activeFilm.genre}</span>
                <span className="film-card__year">{activeFilm.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton id={activeFilm.id}/>
                <AddToMyListButton/>
                <AddReviewButton id={activeFilm.id}/>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={activeFilm.posterImage} alt={`${activeFilm.title} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs film={activeFilm}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films.slice(0, MAX_AMOUNT)}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default FilmPage;
