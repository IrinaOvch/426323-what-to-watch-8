import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilmsList from '../../components/films-list/films-list';
import Tabs from '../../components/tabs/tabs';
import FilmActions from '../../components/film-actions/film-actions';
import { fetchFilmAction, fetchFilmReviewsAction, fetchSimilarFilms } from '../../store/api-actions';
import { useEffect } from 'react';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { getFilm, getFilmErrorStatus, getFilmLoadingStatus, getSimilarFilms, getSimilarFilmsErrorStatus } from '../../store/films/selectors';
import NotFoundScreen from '../page-not-found/page-not-found';

const SIMILAR_AMOUNT = 4;

type PageParams = {
  id: string
}

function FilmPage(): JSX.Element {
  const { id } = useParams<PageParams>();
  const dispatch = useDispatch();

  const film = useSelector(getFilm);
  const similarFilms = useSelector(getSimilarFilms);
  const isFilmLoading = useSelector(getFilmLoadingStatus);
  const isFilmError = useSelector(getFilmErrorStatus);
  const isSimilarFilmsError = useSelector(getSimilarFilmsErrorStatus);

  if (Object.entries(film).length === 0) {
    dispatch(fetchFilmAction(Number(id)));
  }

  useEffect(() => {
    dispatch(fetchFilmAction(Number(id)));
    dispatch(fetchSimilarFilms(Number(id)));
    dispatch(fetchFilmReviewsAction(Number(id)));
  }, [dispatch, id]);

  if (isFilmLoading) {
    return <LoadingScreen />;
  }

  if (isFilmError) {
    return <NotFoundScreen/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header isUserBlock className="film-card__head" />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.releaseYear}</span>
              </p>
              <FilmActions filmId={film.id} isFavourite={film.isFavourite}/>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.title} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms.slice(0, SIMILAR_AMOUNT)}/>
          {isSimilarFilmsError &&
          <p>An error ocured while loading similar films, please try reloading the page</p>}
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default FilmPage;
