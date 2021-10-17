import { Redirect, useParams } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Header from '../../components/header/header';
import { FILMS } from '../../mocks/films';

type PageParams = {
  id: string
}

function AddReview(): JSX.Element {
  const { id } = useParams<PageParams>();
  const activeFilm = FILMS.find((film) => film.id === Number(id));

  if (activeFilm === undefined) {
    return (<Redirect to={{ pathname: ''}}/>);
  }

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

      <AddReviewForm />

    </section>
  );
}

export default AddReview;
