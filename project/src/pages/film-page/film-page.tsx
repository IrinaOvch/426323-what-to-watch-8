import { useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkAppDispatch } from '../../types/action';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilmsList from '../../components/films-list/films-list';
import Tabs from '../../components/film-card-tabs/film-card-tabs';
import FilmActions from '../../components/film-actions/film-actions';
import { State } from '../../types/state';
import { fetchFilmAction, fetchFilmReviewsAction, fetchSimilarFilms } from '../../store/api-actions';
import { useEffect } from 'react';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import NotFoundScreen from '../page-not-found/page-not-found';

const SIMILAR_AMOUNT = 4;

type PageParams = {
  id: string
}

const mapStateToProps = ({film, similarFilms, isFilmLoading}: State) => ({
  film,
  similarFilms,
  isFilmLoading,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFetchFilm(id: number) {
    dispatch(fetchFilmAction(id));
  },
  onFetchSimilarFilms(id: number) {
    dispatch(fetchSimilarFilms(id));
  },
  onfetchFilmReviews(id: number) {
    dispatch(fetchFilmReviewsAction(id));
  },
});

type PropsFromRedux = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps, mapDispatchToProps);

function FilmPage({
  film,
  similarFilms,
  isFilmLoading,
  onFetchFilm,
  onFetchSimilarFilms,
  onfetchFilmReviews,
}: PropsFromRedux): JSX.Element {
  const { id } = useParams<PageParams>();
  useEffect(() => {
    if (!id) {
      return;
    }
    onFetchFilm(Number(id));
    onFetchSimilarFilms(Number(id));
    onfetchFilmReviews(Number(id));

  }, [onFetchFilm, onFetchSimilarFilms, onfetchFilmReviews, id]);

  if (isFilmLoading) {
    return <LoadingScreen />;
  }

  if (!film.id) {
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
              <FilmActions filmId={film.id}/>
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
        </section>
        <Footer/>
      </div>
    </>
  );
}

export { FilmPage };
export default connector(FilmPage);
