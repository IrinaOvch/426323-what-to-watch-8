import { Review } from '../../types/review';
import ReviewElement from '../review/review';

type TabReviewsProps = {
  reviews: Review[];
}

function TabReviews({reviews}: TabReviewsProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('reviews', reviews);
  return (
    <div className="film-card__reviews film-card__row">
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
