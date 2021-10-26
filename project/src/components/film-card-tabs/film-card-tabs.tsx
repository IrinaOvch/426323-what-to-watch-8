import { MouseEvent, useEffect, useState } from 'react';
import { Film } from '../../types/film/film';
import FilmCardNavigation from '../film-card-navigation/film-card-navigation';
import TabDetails from '../film-card-tab-details/film-card-tab-details';
import TabOverview from '../film-card-tab-overview/film-card-tab-overview';
import TabReviews from '../film-card-tab-reviews/film-card-tab-reviews';

const FilmCardTabs = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

type TabsProps = {
  film: Film;
}

function Tabs({film} : TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(FilmCardTabs.OVERVIEW);
  const handleTabClick = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const newValue = evt.currentTarget.innerText;
    setActiveTab(newValue);
  };

  useEffect(() => setActiveTab(FilmCardTabs.OVERVIEW), [film.id]);

  const getTabByType = (type: string) => {
    switch (type) {
      case FilmCardTabs.OVERVIEW:
        return <TabOverview film={film}/>;
      case FilmCardTabs.DETAILS:
        return <TabDetails film={film}/>;
      case FilmCardTabs.REVIEWS:
        return <TabReviews/>;
    }
  };

  return (
    <>
      <FilmCardNavigation
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      {
        getTabByType(activeTab)
      }
    </>
  );
}

export default Tabs;
