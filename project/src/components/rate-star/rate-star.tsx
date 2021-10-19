import { ChangeEvent } from 'react';

type RateStarProps = {
  i: number;
  onRatingChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RateStar({i, onRatingChange}: RateStarProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i} onChange={onRatingChange}/>
      <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
    </>
  );
}

export default RateStar;
