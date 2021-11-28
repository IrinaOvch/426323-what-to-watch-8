import { forwardRef, ForwardedRef } from 'react';

type VideoPlayerProps = {
  previewVideoLink?: string;
  posterImage?: string;
}

function VideoPlayer(
  {previewVideoLink, posterImage}: VideoPlayerProps,
  ref: ForwardedRef<HTMLVideoElement>,
): JSX.Element {

  return (
    <div
      className="small-film-card__image"
    >
      <video
        poster={posterImage}
        className="small-film-card__image"
        src={previewVideoLink}
        ref={ref}
        preload="none"
        loop
        muted
      />
    </div>
  );
}

export default forwardRef(VideoPlayer);
