import { MouseEvent, useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import FilmCardNavigation from '../film-card-navigation/film-card-navigation';
import TabDetails from '../film-details/film-details';
import TabOverview from '../film-overview/film-overview';
import TabReviews from '../film-reviews/film-reviews';

const FilmCardTabs = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

const mapStateToProps = ({film, reviews}: State) => ({
  film,
  reviews,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Tabs({film, reviews} : PropsFromRedux): JSX.Element {
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

export { Tabs };
export default connector(Tabs);
