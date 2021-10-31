import { MouseEvent } from 'react';
import classnames from 'classnames/bind';

const FILM_CARD_TABS = ['Overview', 'Details', 'Reviews'];

type FilmCardNavigationProps = {
  activeTab: string;
  onTabClick: (evt: MouseEvent<HTMLAnchorElement>, tab: string) => void;
}

function FilmCardNavigation({activeTab, onTabClick}: FilmCardNavigationProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {FILM_CARD_TABS.map((tab) => {
          const cls = classnames('film-nav__item', tab === activeTab ? 'film-nav__item--active' : '' );

          return (
            <li
              className={cls}
              key={tab}
            >
              <a
                className="film-nav__link"
                href="/"
                onClick={(evt) => onTabClick(evt, tab)}
              >
                {tab}
              </a>
            </li>
          );
        },
        )}
      </ul>
    </nav>
  );
}

export default FilmCardNavigation;
