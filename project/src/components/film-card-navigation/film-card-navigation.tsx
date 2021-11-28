import { MouseEvent } from 'react';
import cn from 'classnames/bind';
import { FilmCardTabs } from '../tabs/tabs';

type FilmCardNavigationProps = {
  activeTab: string;
  onTabClick: (evt: MouseEvent<HTMLAnchorElement>, tab: keyof typeof FilmCardTabs) => void;
}

function FilmCardNavigation({activeTab, onTabClick}: FilmCardNavigationProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {Object.values(FilmCardTabs).map((tab) => {
          const cls = cn('film-nav__item', {'film-nav__item--active': tab === activeTab});

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
