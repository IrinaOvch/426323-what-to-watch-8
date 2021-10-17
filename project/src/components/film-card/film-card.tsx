import { generatePath, Link } from 'react-router-dom';
import { FilmPreview } from '../../types/film/film';

function FilmCard({title, previewImage, id}: FilmPreview): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={generatePath('/films/:id', {id: id})} className="small-film-card__link" href="film-page.html">{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
