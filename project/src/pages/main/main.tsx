import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import PlayButton from '../../components/play-button/play-button';
import AddToMyListButton from '../../components/add-to-my-list-button/add-to-my-list-button';
import { getGenres } from '../../utils/getGenres';
import { getFilmsByGenre } from '../../utils/getFilmsByGenre';
import { State } from '../../types/state';
import { incrementFilmsShownAmount, resetFilmsShownAmount } from '../../store/action';
import { Actions } from '../../types/action';
import { FILMS_SHOWN_PER_CLICK } from '../../const';
import { useEffect } from 'react';

const mapStateToProps = ({currentGenre, filmsShownAmount, films, promo}: State) => ({
  currentGenre,
  filmsShownAmount,
  films,
  promo,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onFilmsShownAmountChange(amount: number) {
    dispatch(incrementFilmsShownAmount(amount));
  },
  onResetShownAmountChange() {
    dispatch(resetFilmsShownAmount());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function MainPage({promo, films, currentGenre, filmsShownAmount, onFilmsShownAmountChange, onResetShownAmountChange}: ConnectedComponentProps) : JSX.Element {
  const genres = getGenres(films);
  const filteredFilms = getFilmsByGenre(currentGenre, films);
  const renderedFilms = filteredFilms.slice(0, filmsShownAmount);
  const isMoreFilmsToShow = filteredFilms.length > renderedFilms.length;

  const handleShowMoreButtonClick = () => {
    onFilmsShownAmountChange(FILMS_SHOWN_PER_CLICK);
  };

  useEffect(() => {
    onResetShownAmountChange();
  }, [onResetShownAmountChange, currentGenre]);

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

              <div className="film-card__buttons">
                <PlayButton id={promo.id}/>
                <AddToMyListButton/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres}/>

          <FilmsList films={renderedFilms}/>

          {isMoreFilmsToShow && <ShowMoreButton onShowMoreClick={handleShowMoreButtonClick}/>}
        </section>

        <Footer/>
      </div>
    </>
  );
}

export { MainPage };
export default connector(MainPage);
