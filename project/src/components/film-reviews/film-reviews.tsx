import { useSelector } from 'react-redux';
import { getFilmReviewsErrorStatus } from '../../store/reviews/selectors';
import { Review } from '../../types/review';
import ReviewElement from '../review/review';

type TabReviewsProps = {
  reviews: Review[];
}

function TabReviews({reviews}: TabReviewsProps): JSX.Element {
  const isFilmReviewsError = useSelector(getFilmReviewsErrorStatus);
  return (
    <div className="film-card__reviews film-card__row">
      {isFilmReviewsError &&
          <p>An error ocured while loading similar films, please try reloading the page</p>}
      <div className="film-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((review) => <ReviewElement review={review} key={review.id}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(Math.ceil(reviews.length / 2), reviews.length).map((review) => <ReviewElement review={review} key={review.id}/>)}
      </div>
    </div>
  );
}

export default TabReviews;
