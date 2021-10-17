import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilmsList from '../../components/films-list/films-list';
import PlayButton from '../../components/play-button/play-button';
import AddToMyListButton from '../../components/add-to-my-list-button/add-to-my-list-button';
import AddReviewButton from '../../components/add-review-button/add-review-button';
import { FilmPreview } from '../../types/film/film';
import { FILMS } from '../../mocks/films';
import { getScore } from '../../utils/getScore';

type FilmProps = {
  films: FilmPreview[]
}

type Id = {
  id: string
}

function FilmPage({films}: FilmProps): JSX.Element {
  const id: Id = useParams();
  const currentId = Number(id.id);
  const activeFilm = FILMS[currentId - 1];

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
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{activeFilm.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{getScore(activeFilm.rating)}</span>
                  <span className="film-rating__count">{activeFilm.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{activeFilm.description}</p>

                <p className="film-card__director"><strong>Director: {activeFilm.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {activeFilm.starring.join(', ')} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default FilmPage;
