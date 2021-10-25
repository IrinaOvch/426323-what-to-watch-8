import { MouseEvent } from 'react';

const FILM_CARD_TABS = ['Overview', 'Details', 'Reviews'];

type FilmCardNavigationProps = {
  activeTab: string;
  onTabClick: (evt: MouseEvent<HTMLLIElement>) => void;
}

function FilmCardNavigation({activeTab, onTabClick}: FilmCardNavigationProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {FILM_CARD_TABS.map((tab) => (
          <li
            className={`film-nav__item ${ tab === activeTab ? 'film-nav__item--active' : ''}`}
            key={tab}
            onClick={onTabClick}
          >
            <a className="film-nav__link" href="/">{tab}</a>
          </li>
        ),
        )}
      </ul>
    </nav>
  );
}

export default FilmCardNavigation;
