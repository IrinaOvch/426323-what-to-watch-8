import { useSelector } from 'react-redux';
import { getPromo } from '../../store/films/selectors';
import FilmActions from '../film-actions/film-actions';
import Header from '../header/header';

function Promo(): JSX.Element {
  const promo = useSelector(getPromo);

  return (
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
            <FilmActions filmId={promo.id} isFavourite={promo.isFavourite}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
