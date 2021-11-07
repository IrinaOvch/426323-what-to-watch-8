type ShowMoreButtonProps = {
  onShowMoreClick: () => void;
}

function ShowMoreButton({onShowMoreClick}: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreClick}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
