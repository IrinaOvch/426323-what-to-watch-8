import { ChangeEvent } from 'react';

type RateStarProps = {
  i: number;
  onRatingChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RateStar({i, onRatingChange}: RateStarProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={i + 1} onChange={onRatingChange}/>
      <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
    </>
  );
}

export default RateStar;
