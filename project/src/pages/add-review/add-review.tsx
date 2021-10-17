import { useParams } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Header from '../../components/header/header';
import { FILMS } from '../../mocks/films';

type Id = {
  id: string
}

function AddReview(): JSX.Element {
  const id: Id = useParams();
  const currentId = Number(id.id);
  const activeFilm = FILMS[currentId - 1];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={activeFilm.backgroundImage} alt={activeFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isUserBlock/>

        <div className="film-card__poster film-card__poster--small">
          <img src={activeFilm.posterImage} alt={`${activeFilm.title} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm onSubmit={() => { throw new Error('Function \'onSubmit\' isn\'t implemented yet.');}}/>

    </section>
  );
}

export default AddReview;
