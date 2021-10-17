import { generatePath, Link } from 'react-router-dom';

type AddReviewButtonProps = {
  id: number;
}

function AddReviewButton({id}: AddReviewButtonProps): JSX.Element {
  return <Link to={generatePath('/films/:id/review', {id: id})} href="add-review.html" className="btn film-card__button">Add review</Link>;
}

export default AddReviewButton;
