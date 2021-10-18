import { generatePath, Link } from 'react-router-dom';
import { FilmPreview } from '../../types/film/film';

type FilmCardProps = FilmPreview & {
  onMouseEnter: () => void;
}

function FilmCard({title, previewImage, id, onMouseEnter}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={generatePath('/films/:id', {id: id})} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
