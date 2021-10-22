
import { generatePath, Link } from 'react-router-dom';
import { Film } from '../../types/film/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
  onMouseEnter: () => void;

}

function FilmCard({ film, isActive, onMouseEnter}: FilmCardProps): JSX.Element {
  const {title, previewImage, id,  previewVideoLink} = film;

  return (
    <article
      className="small-film-card catalog__films-card"
    >
      <VideoPlayer
        previewVideoLink={previewVideoLink}
        posterImage={previewImage}
        isActive={isActive}
        onMouseEnter={onMouseEnter}
      />
      <h3 className="small-film-card__title">
        <Link to={generatePath('/films/:id', {id: id})} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
