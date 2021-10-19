import { useState, ChangeEvent } from 'react';
import RateStar from '../rate-star/rate-star';

const STARS_AMOUNT = 10;

function AddReviewForm(): JSX.Element {
  const [newReview, setReview] = useState({
    rating: 0,
    review: '',
  });

  const onReviewChange = (evt: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name === 'review-text' ? 'review' : evt.target.name;
    setReview({
      ...newReview,
      [name]: name === 'rating' ? Number(evt.target.value) : evt.target.value,
    });
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: STARS_AMOUNT}, (_, i) => i).map((x) => (
              <RateStar
                key={x}
                i={x}
                onRatingChange={onReviewChange}
              />))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
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
