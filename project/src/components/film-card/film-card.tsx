import { Link } from 'react-router-dom';
import {Film} from '../../types/film/film';

function FilmCard({title, src, id}: Film): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={src} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link" href="film-page.html">{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
