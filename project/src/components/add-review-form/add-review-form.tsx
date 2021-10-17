import { useState } from 'react';
import RateStar from '../rate-star/rate-star';

const STARS_AMOUNT = 10;

function AddReviewForm(): JSX.Element {
  const [newReview, setReview] = useState({
    rating: 0,
    review: '',
  });

  const onRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setReview({
      ...newReview,
      rating: Number(evt.target.value),
    });
  };

  const onReviewChange = (evt:React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview({
      ...newReview,
      review: evt.target.value,
    });
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array(STARS_AMOUNT).fill(0).map((_, i) => i+1).map((x) =>(
              <RateStar
                key={x}
                i={x}
                onRatingChange={onRatingChange}
              />))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            value={newReview.review}
            onChange={onReviewChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>);
}

export default AddReviewForm;
