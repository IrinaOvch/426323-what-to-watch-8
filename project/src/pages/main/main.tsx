import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { getGenres } from '../../utils/getGenres';
import { getFilmsByGenre } from '../../utils/getFilmsByGenre';
import { incrementFilmsShownAmount, resetFilmsShownAmount } from '../../store/action';
import { FILMS_SHOWN_PER_CLICK } from '../../const';
import { useEffect } from 'react';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import FilmActions from '../../components/film-actions/film-actions';
import ErrorScreen from '../../components/error-screen/error-screen';
import { getcurrentGenre, getfilmsShownAmount } from '../../store/films-process/selectors';
import {
  getFilms,
  getFilmsErrorStatus,
  getFilmsLoadingStatus,
  getPromo,
  getPromoErrorStatus,
  getPromoLoadingStatus
} from '../../store/films-data/selectors';

function MainPage(): JSX.Element {
  const currentGenre = useSelector(getcurrentGenre);
  const filmsShownAmount = useSelector(getfilmsShownAmount);
  const films = useSelector(getFilms);
  const promo = useSelector(getPromo);
  const isFilmsLoading = useSelector(getFilmsLoadingStatus);
  const isFilmsError = useSelector(getFilmsErrorStatus);
  const isPromoLoading = useSelector(getPromoLoadingStatus);
  const isPromoError = useSelector(getPromoErrorStatus);

  const genres = getGenres(films);
  const filteredFilms = getFilmsByGenre(currentGenre, films);
  const renderedFilms = filteredFilms.slice(0, filmsShownAmount);
  const isMoreFilmsToShow = filteredFilms.length > renderedFilms.length;

  const dispatch = useDispatch();

  const handleShowMoreButtonClick = () => {
    dispatch(incrementFilmsShownAmount(FILMS_SHOWN_PER_CLICK));
  };

  useEffect(() => {
    dispatch(resetFilmsShownAmount());
  }, [dispatch, currentGenre]);

  if (isFilmsLoading || isPromoLoading) {
    return <LoadingScreen/>;
  }

  if (isFilmsError || isPromoError) {
    return <ErrorScreen/>;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt={promo.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isUserBlock className="film-card__head" />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.posterImage} alt={`${promo.title} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.releaseYear}</span>
              </p>
              <FilmActions filmId={promo.id} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres}/>
          {isFilmsError && <ErrorScreen/>}
          <FilmsList films={renderedFilms}/>

          {isMoreFilmsToShow && <ShowMoreButton onShowMoreClick={handleShowMoreButtonClick}/>}
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default MainPage;
