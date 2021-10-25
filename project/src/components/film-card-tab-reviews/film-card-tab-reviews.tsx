import { reviews } from '../../mocks/reviews';
import ReviewElement from '../review/review';

function TabReviews(): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length/2).map((review) => <ReviewElement review={review} key={review.id}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length/2, reviews.length).map((review) => <ReviewElement review={review} key={review.id}/>)}
      </div>
    </div>
  );
}

export default TabReviews;
