import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { getFilmsByGenre } from '../../utils/getFilmsByGenre';
import { incrementFilmsShownAmount, resetFilmsShownAmount } from '../../store/action';
import { FILMS_SHOWN_PER_CLICK } from '../../const';
import { useEffect } from 'react';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import ErrorScreen from '../../components/error-screen/error-screen';
import { getcurrentGenre, getfilmsShownAmount } from '../../store/app/selectors';
import {
  getFilms,
  getFilmsErrorStatus,
  getFilmsLoadingStatus,
  getPromoErrorStatus,
  getPromoLoadingStatus,
  getGenres
} from '../../store/films/selectors';
import Promo from '../../components/promo/promo';

function MainPage(): JSX.Element {
  const currentGenre = useSelector(getcurrentGenre);
  const filmsShownAmount = useSelector(getfilmsShownAmount);
  const films = useSelector(getFilms);
  const isFilmsLoading = useSelector(getFilmsLoadingStatus);
  const isFilmsError = useSelector(getFilmsErrorStatus);
  const isPromoLoading = useSelector(getPromoLoadingStatus);
  const isPromoError = useSelector(getPromoErrorStatus);

  const genres = useSelector(getGenres);
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
      <Promo />
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
