import { useSelector } from 'react-redux';
import { getFilmReviewsErrorStatus } from '../../store/reviews/selectors';
import { ReviewType } from '../../types/review';
import Review from '../review/review';

type TabReviewsProps = {
  reviews: ReviewType[];
}

function TabReviews({reviews}: TabReviewsProps): JSX.Element {
  const isFilmReviewsError = useSelector(getFilmReviewsErrorStatus);
  return (
    <div className="film-card__reviews film-card__row">
      {isFilmReviewsError &&
          <p>An error ocured while loading similar films, please try reloading the page</p>}
      <div className="film-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((review) => <Review review={review} key={review.id}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(Math.ceil(reviews.length / 2), reviews.length).map((review) => <Review review={review} key={review.id}/>)}
      </div>
    </div>
  );
}

export default TabReviews;
