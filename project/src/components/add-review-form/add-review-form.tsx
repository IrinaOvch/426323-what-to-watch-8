import { useState, ChangeEvent, FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { postReviewAction } from '../../store/api-actions';
import { State } from '../../types/state';
import RateStar from '../rate-star/rate-star';

const STARS_AMOUNT = 10;
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;

type PageParams = {
  id: string
}

const mapStateToProps = ({isReviewPosting}: State) => ({
  isReviewPosting,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReviewForm({isReviewPosting}: PropsFromRedux): JSX.Element {
  const [newReview, setReview] = useState({
    rating: 0,
    comment: '',
  });
  const { id } = useParams<PageParams>();
  const dispatch = useDispatch();
  const isSubmitDisabled =
    newReview.comment.length < MIN_COMMENT_LENGTH ||
    newReview.comment.length > MAX_COMMENT_LENGTH ||
    newReview.rating === 0 ||
    isReviewPosting;

  const handleReviewChange = ({ target }: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReviewAction(Number(id), newReview));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: STARS_AMOUNT}, (_, i) => i).reverse().map((x) => (
              <RateStar
                key={x}
                i={x}
                onRatingChange={handleReviewChange}
              />))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="comment" id="review-text"
            placeholder="Review text"
            value={newReview.comment}
            onChange={handleReviewChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isSubmitDisabled}>
              {isReviewPosting ? 'Posting...' : 'Post'}
            </button>
          </div>

        </div>
      </form>
    </div>);
}

export { AddReviewForm };
export default connector(AddReviewForm);
