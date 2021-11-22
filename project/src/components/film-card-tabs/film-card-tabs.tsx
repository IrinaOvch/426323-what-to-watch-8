import { MouseEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFilm } from '../../store/films/selectors';
import { getReviews } from '../../store/reviews/selectors';
import FilmCardNavigation from '../film-card-navigation/film-card-navigation';
import TabDetails from '../film-details/film-details';
import TabOverview from '../film-overview/film-overview';
import TabReviews from '../film-reviews/film-reviews';

const FilmCardTabs = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

function Tabs(): JSX.Element {
  const film = useSelector(getFilm);
  const reviews = useSelector(getReviews);


  const [activeTab, setActiveTab] = useState(FilmCardTabs.OVERVIEW);
  const handleTabClick = (evt: MouseEvent<HTMLAnchorElement>, tab: string) => {
    evt.preventDefault();
    setActiveTab(tab);
  };

  useEffect(() => setActiveTab(FilmCardTabs.OVERVIEW), [film.id]);

  const renderActiveTab = (type: string) => {
    switch (type) {
      case FilmCardTabs.OVERVIEW:
        return <TabOverview film={film}/>;
      case FilmCardTabs.DETAILS:
        return <TabDetails film={film}/>;
      case FilmCardTabs.REVIEWS:
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
