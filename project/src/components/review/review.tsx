import dayjs from 'dayjs';
import { Review } from '../../types/review/review';

type ReviewProps = {
  review: Review;
}

function ReviewElement({review}: ReviewProps): JSX.Element {
  const {comment, user, rating, date} = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={dayjs(date).format('YYYY-MM-DD')}>{dayjs(date).format('MMMM D, YYYY')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewElement;
