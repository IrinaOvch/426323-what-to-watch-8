import { MouseEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFilm } from '../../store/films/selectors';
import { getReviews } from '../../store/reviews/selectors';
import FilmCardNavigation from '../film-card-navigation/film-card-navigation';
import TabDetails from '../tab-details/tab-details';
import TabOverview from '../tab-overview/tab-overview';
import TabReviews from '../tab-reviews/tab-reviews';

export const FilmCardTabs = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
} as const;

function Tabs(): JSX.Element {
  const film = useSelector(getFilm);
  const reviews = useSelector(getReviews);


  const [activeTab, setActiveTab] = useState<keyof typeof FilmCardTabs>(FilmCardTabs.Overview);
  const handleTabClick = (evt: MouseEvent<HTMLAnchorElement>, tab: keyof typeof FilmCardTabs) => {
    evt.preventDefault();
    setActiveTab(tab);
  };

  useEffect(() => setActiveTab(FilmCardTabs.Overview), [film.id]);

  const renderActiveTab = (type: string) => {
    switch (type) {
      case FilmCardTabs.Overview:
        return <TabOverview film={film}/>;
      case FilmCardTabs.Details:
        return <TabDetails film={film}/>;
      case FilmCardTabs.Reviews:
        return <TabReviews reviews={reviews}/>;
    }
  };

  return (
    <>
      <FilmCardNavigation
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      {renderActiveTab(activeTab)}
    </>
  );
}

export default Tabs;
